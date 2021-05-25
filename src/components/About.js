import React, { Component } from "react";

// npm install --save-dev @iconify/react @iconify-icons/carbon
import { Icon } from "@iconify/react";
import augmentedReality from "@iconify-icons/carbon/augmented-reality";

// npm install --save-dev @iconify/react @iconify-icons/bi
import headsetVr from "@iconify-icons/bi/headset-vr";

// npm install --save-dev @iconify/react @iconify-icons/carbon
import machineLearningModel from "@iconify-icons/carbon/machine-learning-model";

// npm install --save-dev @iconify/react @iconify-icons/gridicons

import shareComputer from "@iconify-icons/gridicons/share-computer";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic =
        process.env.PUBLIC_URL +
        "/" +
        "images/" +
        this.props.sharedBasicInfo.image;
    }

    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
      var about2 = this.props.resumeBasicInfo.description2;
      var about3 = this.props.resumeBasicInfo.description3;
      var about4 = this.props.resumeBasicInfo.description4;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="260px"
                    src={profilepic}
                    alt="Avatar placeholder"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <Icon
                    icon={augmentedReality}
                    style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={headsetVr}
                    style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={shareComputer}
                    style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={machineLearningModel}
                    style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "125%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <br />
                    <br />
                    {about2}
                    <br />
                    <br />
                    {about3}
                    <br />
                    <br />
                    {about4}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
