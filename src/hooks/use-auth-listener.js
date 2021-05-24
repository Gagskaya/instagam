import { FirebaseContext } from "../context/firebase";
import React from "react";
export default function UseAuthListener() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = React.useContext(FirebaseContext);
  React.useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase]);
  return { user };
}
