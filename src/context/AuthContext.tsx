// Libraries
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// API
import { getCurrentAccount } from '@/lib/colony-office/api';

// Types
import { IAccount, IContextType } from '@/types';

export const INITIAL_ACCOUNT = {
  email: "",
  phoneNumber: "",
  jobTitle: "",
  officeAddress: "",
  firstName: "",
  middleName: "",
  lastName: "",
  sex: "",
  gender: "",
  age: "",
  height: "",
  homeAddress: "",
  birthdate: "",
  birthplace: "",
  securityAccessLevel: ""
}

const INITIAL_STATE = {
  account: INITIAL_ACCOUNT,
  isLoading: false,
  isAuthenticated: false,
  setAccount: () => {},
  setIsAuthenticated: () => {},
  checkAuthAccount: async () => false as boolean
}

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = useState<IAccount>(INITIAL_ACCOUNT)
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  
  const checkAuthAccount = async () => {
    try {
      const currentAccount = await getCurrentAccount();

      if(currentAccount) {
        setAccount({
          email: currentAccount.account.email,
          phoneNumber: currentAccount.account.phoneNumber,
          jobTitle: currentAccount.account.jobTitle,
          officeAddress: currentAccount.account.officeAddress,
          firstName: currentAccount.account.employee_identity_data.first_name,
          middleName: currentAccount.account.employee_identity_data.middle_name,
          lastName: currentAccount.account.employee_identity_data.last_name,
          sex: currentAccount.account.employee_identity_data.sex,
          gender: currentAccount.account.employee_identity_data.gender,
          age: currentAccount.account.employee_identity_data.age,
          height: currentAccount.account.employee_identity_data.height,
          homeAddress: currentAccount.account.employee_identity_data.home_address,
          birthdate: currentAccount.account.employee_identity_data.birthplace,
          birthplace: currentAccount.account.employee_identity_data.burthplace,
          securityAccessLevel: currentAccount.account.employee_identity_data.security_access_level,
        })
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error)
      return false
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if
    (
      sessionStorage.getItem("idToken") === "" ||
      sessionStorage.getItem("idToken") === null ||
      sessionStorage.getItem("refreshToken") === "" ||
      sessionStorage.getItem("refreshToken") === null
    ) navigate("/login")
    checkAuthAccount();
  }, [])

  const value = {
    account,
    setAccount,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthAccount,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAccountContext = () => useContext(AuthContext)