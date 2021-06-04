import React from "react";

import PropTypes from "prop-types";
export default function Footer({ caption, username }) {
  return (
    <div className="p-4 pt-2 pb-8">
      <span className="mr-1 font-bold">
        {username}
        {` `}
        <span>{caption}</span>
      </span>
    </div>
  );
}

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
