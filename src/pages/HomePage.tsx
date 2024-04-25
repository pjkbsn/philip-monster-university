import { Button } from "../components/Button/Button";
import { DropDown } from "../components/DropDown/DropDown";
import { Outlet, useNavigate } from "react-router-dom";
import "./HomePage.scss";

export const HomePage = () => {
  const navigate = useNavigate();

  const ToAddPage = () => {
    navigate("/monster/add");
  };

  return (
    <div className="HomePage">
      <h1 className="HomePageTitle">Welcome to Monsters University!</h1>
      <div className="HomePageButtons">
        <Button buttonName="New Monster" handleClick={ToAddPage} />
        <DropDown />
      </div>
      <Outlet />
    </div>
  );
};
