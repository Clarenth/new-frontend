import { INewAccount } from '@/types'
import { serverConfig } from './config';

export async function createAccount(account: INewAccount) {
  const url = serverConfig.signup;
  //const url = "http://localhost:4000/auth/signup";
    const payload = 
    {
      method: 'POST',
      headers: 
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          email: account.email,
          password: account.password,
          phone_number: account.phone_number,
          job_title: account.job_title,
          office_address: account.office_address,
          employee_identity_data: 
          {
            first_name: account.employee_identity_data.first_name,
            middle_name: account.employee_identity_data.middle_name,
            last_name: account.employee_identity_data.last_name,
            sex: account.employee_identity_data.sex,
            gender: account.employee_identity_data.gender,
            age: account.employee_identity_data.age,
            height: account.employee_identity_data.height,
            home_address: account.employee_identity_data.home_address,
            birthdate: account.employee_identity_data.birthdate,
            birthplace: account.employee_identity_data.birthplace,
          },
          security_access_level: account.security_access_level
        }
      )
    }

  try {
    const newAccount = await fetch(url, payload)
    console.log(newAccount)

    if(!newAccount) throw Error;
    return newAccount;
  } catch (error) {
    console.log(error)
    return error;
  }
}