import React, { useState } from "react";

export function SignUp() {
  const initiatedData = {
    email: "",
    userName: "",
    password: "",
  };
  const [userData, setUserData] = useState(initiatedData);

  async function signUp() {
    if (!userData.email || !userData.userName || !userData.password)
      throw Error("user data con`t be empty");
    const response = await fetch("https://fakestoreapi.com/users", {
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
          placeholder="email"
          value={userData.email}
          onChange={(e) =>
            setUserData(() => ({ ...userData, email: e.target.value }))
          }
        />
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
        <button onClick={signUp}>Sign up</button>
      </div>
    </div>
  );
}
