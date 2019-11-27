import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
  width: 200px;
  border-radius: 5px;
`;

class FeedList extends Component {
  render() {
    // const { Feed } = this.props;
    console.log(this.props);
    return (
      <div className="FeedWrap" style={{ textAlign: "Left" }}>
        {this.props.Feed.map(feed => (
          <div
            className="FeedList"
            style={{
              display: "inline-block",
              width: "32%",
              padding: "5px",
              margin: "5px"
            }}
          >
            <div key={feed.id} style={{ display: "inline" }}>
              <Link to="#" style={{ textDecoration: "none" }}>
                <Img alt={feed.name} src={feed.img_url} />
                <div className="store_name">{feed.title}</div>
              </Link>
              <div className="store_show">{feed.description}</div>
              <div className="store_show">
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div>스토리 보기</div>
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
