import { Button } from "../components/Button/Button";
import { DropDown } from "../components/DropDown/DropDown";
import { Outlet, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const ToAddPage = () => {
    navigate("/monster/add");
  };

  return (
    <>
      <h1>HomePage</h1>
      <h2>Welcome to Monsters University!</h2>
      <DropDown />
      <Button buttonName="New Monster" handleClick={ToAddPage} />
      <Outlet />
    </>
  );
};
