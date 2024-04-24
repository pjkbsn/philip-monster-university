import { AddMonster } from "../components/AddMonster/AddMonster";
import { DropDown } from "../components/DropDown/DropDown";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <h2>Welcome to Monsters University!</h2>
      <DropDown />
      <AddMonster />
      <Outlet />
    </>
  );
};
