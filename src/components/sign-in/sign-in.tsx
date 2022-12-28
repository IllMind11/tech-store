import React, { useState } from "react";

export function SignIn() {
  const initiatedData = {
    userName: "",
    password: "",
  };
  const [userData, setUserData] = useState(initiatedData);

  async function signIn() {
    if (!userData.userName || !userData.password)
      throw Error("user data con`t be empty");
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        userData,
      }),
    });
    const data = await response.json();

    console.log("responseData", data);
    setUserData(initiatedData);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-96 border">
        <input
          type="text"
          placeholder="username"
          value={userData.userName}
          onChange={(e) =>
            setUserData(() => ({ ...userData, userName: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="password"
          value={userData.password}
          onChange={(e) =>
            setUserData(() => ({ ...userData, password: e.target.value }))
          }
        />
        <button onClick={signIn}>Sign in</button>
      </div>
    </div>
  );
}
