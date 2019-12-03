import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`;

class FeedList extends Component {
  render() {
    const { url } = this.props;

    return (
      <div
        className="FeedWrap"
        style={{
          textAlign: "Left",
          margin: "0px auto",
          display: "inline-block"
          //height: "520px"
        }}
      >
        {this.props.Feed.map(feed => (
          <div
            className={feed.title}
            key={feed.id}
            style={{
              float: "left",
              height: "500px",
              width: "30%",
              margin: "0 0 50px 0",
              padding: "0px 1.666666666666667%"
            }}
          >
            <Link to={`${url}/${feed.id}`} style={{ textDecoration: "none" }}>
              <Img alt={feed.name} src={feed.img_url} />
            </Link>
            <div
              className="Feed_text_wrap"
              style={{ padding: "0 5px", margin: "15px 0" }}
            >
              <Link to="#" style={{ textDecoration: "none" }}>
                <div
                  className="stories_title"
                  style={{
                    margin: "20px 0 0",
                    fontWeight: "700",
                    color: "#000"
                  }}
                >
                  {feed.title}
                </div>
              </Link>

              <div
                className="stories_desc"
                style={{
                  fontSize: "14px",
                  wordBreak: "normal",
                  lineHeight: "140%",
                  margin: "15px 0"
                }}
              >
                {feed.description}
              </div>
              <div
                className="storie_View"
                style={{
                  fontSize: "14px"
                }}
              >
                <Link
                  to="#"
                  style={{
                    color: "#000",
                    borderBottom: "1px solid #000"
                  }}
                >
                  <div>스토리 보기</div>
                  <div
                    style={{ clear: "both", content: "", dispaly: "table" }}
                  ></div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FeedList;
