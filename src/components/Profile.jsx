import { useParams, useHistory } from "react-router-dom";
import React from "react";
import * as ROUTES from "../constants/routes";
import { getUserByUsername } from "../services/firebase";

export default function Profile() {
  let history = useHistory();
  const { username } = useParams();
  const [user, setUser] = React.useState(null);
  const [userExists, setUserExist] = React.useState(false);
  React.useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);
      if (user.length > 0) {
        setUser(user[0]);
        setUserExist(true);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }
    checkUserExists();
  }, [username, history]);
  return (
    userExists && (
      <div className="bg-gray-background">
        <div className="max-auto max-w-screen-lg">{username}</div>
      </div>
    )
  );
}
