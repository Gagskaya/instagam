import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
export default function Login() {
  const history = useHistory();
  const { firebase } = React.useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const isInvalid = password === "" || emailAdress === "";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAdress, password);
      history.push(ROUTES.DASHBORD);
    } catch (error) {
      setEmailAdress("");
      setPassword("");
      setError(error.message);
    }
  };

  React.useEffect(() => {
    document.title = "Login - Instagram";
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iphone with instagram app"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleLogin} method="post" className="mt-6">
            <input
              type="text"
              aria-label="Enter your email address"
              placeholder="Email adress"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAdress(target.value)}
              value={emailAdress}
            />
            <input
              type="password"
              aria-label="Enter your password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              type="submit"
              disabled={isInvalid}
              className={`${
                isInvalid && "opacity-50"
              } bg-blue-medium rounded h-8 font-bold w-full text-white`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary mt-2 rounded">
          <p className="text-sm">
            Dont have an account?{` `}
            <Link to="sign-up" className="font-bold text-blue-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
