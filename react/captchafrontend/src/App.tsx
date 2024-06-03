import axios from "axios";
import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const App = () => {
  const [token, setToken] = useState<string>("");

  return (
    <div>
      {token}
      <form action="">
        <input type="text" placeholder="OTP" />
        <input type="text" placeholder="password" />
        <Turnstile
          onSuccess={(value) => setToken(value)}
          siteKey="0x4AAAAAAAbzeXqlgB7ecY7H"
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("clicked");
            const response = await axios.post(
              "http://localhost:3000/reset-password",
              {
                email: "john.mclean@examplepetstore.com",
                otp: "123431",
                newPassword: "1234",
                token: token,
              }
            );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
