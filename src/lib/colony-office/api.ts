import { INewAccount } from '@/types'
import { serverConfig } from './config';

export async function postCreateAccount(account: INewAccount) {
  const url = serverConfig.signup;
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

export async function postLoginAccount(account: { email: string, password: string }) {
  const url = serverConfig.login;
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
      }
    )
  }

  try {
    const login = await fetch(url, payload)
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem("idToken", data.tokens.idToken)
      sessionStorage.setItem("refreshToken", data.tokens.refreshToken)
      /*
      Check if what comes back matches a JWT structure
      We should not just allow anything to be placed in the session storage
      */
     return true
    })
    .catch(error => console.log(error))
    //console.log(login)

    if (!login) throw Error;
    return login;
  } catch (error) {
    console.log(error)
    return error;
  }
}

export async function postLogoutAccount() {
  const url = serverConfig.logout;
  try {
    //await fetch(url, 
    const logout = await fetch(url, 
      {
        method: 'POST',
        headers:
        {
          Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
        }
      }
    )
    .then(response => response.json())
    .then(data => {
      sessionStorage.removeItem("idToken");
      sessionStorage.removeItem("refreshToken");
      console.log(data)
    })
    return logout

  } catch (error) {
    console.log(error)
  }
}

export async function getCurrentAccount() {
  const url = serverConfig.currentAccount;
  try {
    const fetchAccount = await fetch(url,
      {
        method: 'GET',
        headers:
        {
          Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
        }
      }
    )
    .then(response => response.json())
    .then((data) => {
      const account = data;
      return account;
    })
    return fetchAccount;
  } catch (error) {
    console.log(error)
  }
}

export async function getAccountPromiseAll() {
  const url = serverConfig.currentAccount;
  const getAccount = await (await fetch(url, {
    method: 'GET',
    headers:
    {
      Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
    }
  })).json()

  const data = Promise.all(
    [getAccount].map((obj) => {
      console.log(obj)
      const account = obj
      /*to get a value from obj: 
        obj.account.employee_identity_data.<field>,
      */
      return account
    })
  )
  return data
}

export async function postNewTokenPair() {
  const url = serverConfig.newTokenPair;
  try {
    const newTokens = await fetch(url, 
      {
        method: 'POST',
        headers: 
        {
          Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
        }
      }
    )
    .then(response => response.json())
    .then((response) => {
      //const jwt = response.tokens.idToken;
      sessionStorage.setItem("idToken", response.tokens.idToken)
      sessionStorage.setItem("refreshToken", response.tokens.refreshToken)
      return true
    })
    return newTokens
  } catch (error) {
    console.log(error)
    return false
  }
}