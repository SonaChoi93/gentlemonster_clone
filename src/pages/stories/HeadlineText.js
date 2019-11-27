import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeadlineText extends Component {
  render() {
    const headline_text_title = this.props.headline_text[0];
    const headline_text_desc = this.props.headline_text[1];

    return (
      <div
        className="con_img_headline_text"
        style={{
          position: "absolute",
          left: "30px",
          bottom: "50px",
          color: "#fff",
          textAlign: "Left",
          zIndex: "99",
          marginLeft: "10px"
        }}
      >
        <p style={{ fontWeight: "800", fontSize: "20px" }}>
          {headline_text_title}
        </p>
        <p style={{ fontSize: "16px" }}>{headline_text_desc}</p>
        <Link
          to="#"
          style={{
            color: "#fff"
          }}
        >
          <div>스토리보기</div>
        </Link>
      </div>
    );
  }
}

export default HeadlineText;
