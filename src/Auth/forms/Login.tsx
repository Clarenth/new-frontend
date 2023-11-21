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

  async function getAccountData() {
    const account = await fetch("http://localhost:4000/auth/account", {
      method: 'GET',
      headers:
      {
        Authorization: `Bearer ${sessionStorage.getItem("idToken")}`
      }
    })
    const result = await account.json();
    const miro = result;
    console.log("hello miro", miro);
    return miro;
  }

  useEffect(() => {
    // login();
    // setTimeout(() => { console.log("wait 2") }, 2000)
    // getAccount();

    // const myAccount = getAccountData();
    // console.log("myAccount", myAccount)
  })

  return (
    <div>Login</div>
  )
}

export default Login