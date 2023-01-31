import React from "react";
import Imgcard from "./Imgcard";
import Imgcardone from "./Imgcard";
import imgone from "../img/imgone.jpg";
import imgtwo from "../imgtwo.jpg";
import imgthree from "../imgthree.jpg";
import "../App.css";

export default function Content() {
  return (
    <>
      <div className="container  mt-5" id="imgmain">
        <div className="row  ">
          <div className="col-sm-4 p-3">
            <Imgcard
              imgone={imgone}
              Name="Virat Kohli"
              Bio="He is the Best player and most follower instagram"
            />
          </div>
          <div className="col-sm-4 p-3">
            <Imgcard
              imgone={imgtwo}
              Name="Allu Arjun Redddy"
              Bio="He the most style acter in indian cinema"
            />
          </div>
          <div className="col-sm-4 p-3">
            <Imgcard
              imgone={imgthree}
              Name="Shaid Kapoor"
              Bio="He is bollywood acter"
            />
          </div>
        </div>
      </div>
    </>
  );
}
