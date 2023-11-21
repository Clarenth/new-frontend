import React, { useEffect } from 'react'

const Login = () => {

  const login = () => {
    fetch("http://localhost:4000/auth/signin", 
    {
      method: 'POST',
      headers: 
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          email: "crag@tarr.gov",
          password: "BatteryHorseStapleGenerator",
        }
      ),
    })
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem("idToken", data.tokens.idToken)
      sessionStorage.setItem("refreshToken", data.tokens.refreshToken)
    })
    .catch(error => console.log(error))
  }
  
  const getAccount = async () => {
    let accountData = fetch("http://localhost:4000/auth/account", 
    {
      method: 'GET',
      headers:
      {
        Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
      }
    }
    )
    .then(response => response.json())
    .then(data => {
      accountData = data;
      //console.log("Hello from inside fetch: ", accountData)
      return accountData;
    })
    console.log("Hello accountData: ", accountData)
    return accountData;
  }

  const accountPromise = async () => {
    const getAccount = await (await fetch("http://localhost:4000/auth/account", {
      method: 'GET',
      headers:
      {
        Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
      }
    })).json()

    const data = Promise.all(
      [getAccount].map((obj) => {
        console.log(obj)
        const account = {
          firstName: obj.account.employee_identity_data.first_name,
          lastName: obj.account.employee_identity_data.last_name,
          email: obj.account.email,
          phoneNumber: obj.account.phone_number,
          jobTitle: obj.account.job_title,
          officeAddress: obj.account.office_address,
          employmentDate: obj.account.employment_date,
        }
        console.log(account)
        return account;
      })
    )
  }

  const getAccountData = async () => {
    try {
      const getAccount = await fetch("http://localhost:4000/auth/account", {
        method: 'GET',
        headers:
        {
          Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
        }
      })
      const result = await getAccount.json();
      [result].map((data) => {
        console.log(data)
        const account = {
          firstName: data.employee_identity_data.first_name,
          lastName: data.employee_identity_data.last_name,
          email: data.email,
          phoneNumber: data.phone_number,
          jobTitle: data.job_title,
          officeAddress: data.office_address,
          employmentDate: data.employment_date,
        }
        console.log("Hello from displayAccount: ", account)
        return account;
      })
    } catch (error) {
      console.log(error)
    }
  }

  const displayAccount = async() => {
    const result = await getAccountData();
    [result].map((data) => {
      console.log(data)
      const account = {
        firstName: data.employee_identity_data.first_name,
        lastName: data.employee_identity_data.last_name,
        email: data.email,
        phoneNumber: data.phone_number,
        jobTitle: data.job_title,
        officeAddress: data.office_address,
        employmentDate: data.employment_date,
      }
      console.log("Hello from displayAccount: ", account)
      return account;
    })
  }

  useEffect(() => {
    //login();
    // setTimeout(() => { console.log("wait 2") }, 2000)
    accountPromise();
    getAccount();
  })

  return (
    <div>Login</div>
  )
}

export default Login