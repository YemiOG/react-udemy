import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();

  return (
    <>
      <Link
        onClick={() => {
          navigate("posts");
        }}
      >
        people profile
      </Link>
    </>
  );
};

export default Profile;
