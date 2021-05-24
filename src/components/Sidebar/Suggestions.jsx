import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./SuggestedProfile";

export default function Suggestions({ userId, following, loggedInUserDocId }) {
  const [profiles, setProfiles] = React.useState(null);
  React.useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId, following]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex item-center align-items justify between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 gap-5">
        {profiles &&
          profiles.map((profile) => (
            <SuggestedProfile
              key={profile.docId}
              spDocId={profile.docId}
              profileId={profile.userId}
              username={profile.username}
              userId={userId}
              loggedInUserDocId={loggedInUserDocId}
            />
          ))}
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string,
};
