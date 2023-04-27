import "./Section.css";
import downArrow from "../../../src/images/down-arrow.svg";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Fade bottom>
        <div className="item-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Fade>

      <div className="buttons">
        <Fade bottom>
          <div className="button-group">
            <div className="left-button">{leftBtnText}</div>
            {rightBtnText && <div className="right-button">{rightBtnText}</div>}
          </div>
        </Fade>
        <div className="down-arrow">
          <img src={downArrow} alt="down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Section;
