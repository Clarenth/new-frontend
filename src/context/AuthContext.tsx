// Libraries
import React, { createContext, useContext, useEffect, useState } from 'react';

// API
import { getCurrentAccount } from '@/lib/colony-office/api';

// Types
import { IAccount, IContextType } from '@/types';

export const INITIAL_ACCOUNT = {
  email: "",
  password: "",
  phone_number: "",
  job_title: "",
  office_address: "",
  employee_identity_data: 
  {
    first_name: "",
    middle_name: "",
    last_name: "",
    sex: "",
    gender: "",
    age: "",
    height: "",
    home_address: "",
    birthdate: "",
    birthplace: "",
  },
  security_access_level: ""
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
  
  const checkAuthAccount = async () => {
    try {
      const currentAccount = await getCurrentAccount();

      // if(currentAccount) {
      //   setAccount({
      //     email: currentAccount
      //   })
      // }
      return false;
    } catch (error) {
      console.log(error)
      return false
    } finally {
      setIsLoading(false);
    }
  };

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
    </AuthContext>
  )
}

export default AuthContext