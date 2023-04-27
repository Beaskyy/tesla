import Section from "../section/Section";
import "./Home.css";
import modelS from "../../images/model-s.jpg";
import modelY from "../../images/model-y.jpg";
import model3 from "../../images/model-3.jpg";
import modelX from "../../images/model-x.jpg";
import solar from "../../images/solar-panel.jpg";
import roof from "../../images/solar-roof.jpg";
import accessories from "../../images/accessories.jpg";

const Home = () => {
  return (
    <div className="home">
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelS}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelY}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={model3}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelX}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg={solar}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs less Than a New Roof"
        backgroundImg={roof}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={accessories}
        leftBtnText="Shop now"
      />
    </div>
  );
};

export default Home;
