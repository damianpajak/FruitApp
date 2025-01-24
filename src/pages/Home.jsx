import { HomeHeader } from "../components/HomePage/HomeHeader";
import { HomeLogo } from "../components/HomePage/HomeLogo";
import { HomeText } from "../components/HomePage/HomeText";

export const Home = () => {
  return (
    <div className="home container">
      <HomeLogo />
      <HomeHeader />
      <HomeText />
    </div>
  );
};
