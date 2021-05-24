import React from "react";
import { UserContext } from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = React.useState(null);
  const {
    user: { uid: userId = "" },
  } = React.useContext(UserContext);
  React.useEffect(() => {
    async function getTimelinePhotos() {
      // does the user actually follow people?
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    getTimelinePhotos();
  }, [userId]);
  return { photos };
}
