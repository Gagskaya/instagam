import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";
export default function SignUp() {
  const history = useHistory();
  const { firebase } = React.useContext(FirebaseContext);
  const [username, setUsername] = React.useState("");
  const [fullName, setFullname] = React.useState("");
  const [emailAdress, setEmailAdress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const isInvalid = password === "" || emailAdress === "";

  const handleSignUp = async (e) => {
    e.preventDefault();
    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAdress, password);
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAdress: emailAdress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBORD);
      } catch (error) {
        setUsername("");
        setFullname("");
        setEmailAdress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setError("That username is already taken, please try another");
    }
  };

  React.useEffect(() => {
    document.title = "Signup - Instagram";
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
          <form onSubmit={handleSignUp} method="post" className="mt-6">
            <input
              type="text"
              aria-label="Enter your username"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              type="text"
              aria-label="Enter your full name"
              placeholder="Fullname"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullname(target.value)}
              value={fullName}
            />
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
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary mt-2 rounded">
          <p className="text-sm">
            Have an account?{` `}
            <Link to="login" className="font-bold text-blue-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
