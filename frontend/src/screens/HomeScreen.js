import React, { useContext } from "react";
import { Store } from "../Store";

const HomeScreen = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return <div>HomeScreen - welcome {userInfo.name}</div>;
};

export default HomeScreen;
