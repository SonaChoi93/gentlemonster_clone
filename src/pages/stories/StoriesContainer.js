import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeadlineText from "./HeadlineText";
import FeedWrap from "./FeedWrap";

class StoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "젠틀몬스터 스토리",
      title_desc:
        "젠틀몬스터가 그리는 세계관과 새로운 브랜드 및 아티스트 협업, 특별한 이벤트에\n관련된 새로운 소식을 확인해 보세요",
      headline_text_title: "2020 아이웨어 컬렉션",
      headline_text_desc:
        "새롭게 선보이는 ‘뉴 플랫바’와 ‘티-옵티컬’ 시리즈를 만나보세요."
    };
  }

  render() {
    const title_desc = this.state.title_desc;
    return (
      <div className="ContainerWrap" style={{ width: "95%", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            textAlign: "center",
            fontWeight: "800",
            fontSize: "1.5em",
            marginTop: "70px"
          }}
        >
          {this.state.title}
        </div>
        <div
          style={{
            height: "50px",
            lineHeight: "25px",
            textAlign: "center",
            fontSize: "1em",
            padding: "30px 0"
          }}
        >
          {title_desc.split("\n").map((line, idx) => {
            return (
              <span key={idx}>
                {line}
                <br />
              </span>
            );
          })}
        </div>

        <Link to="#" className="headline_bg_wrap">
          <div
            style={{
              position: "relative",
              backgroundImage:
                "url(https://www.gentlemonster.com/img/stories/list/2020_story_thumbnail_pc.jpg)",
              height: "calc(100vh - 200px)",
              backgroundColor: "transparen",
              backgroundSize: "cover",
              borderRadius: "5px"
            }}
          >
            <HeadlineText
              headline_text={[
                this.state.headline_text_title,
                this.state.headline_text_desc
              ]}
            />
          </div>
        </Link>

        <FeedWrap />
      </div>
    );
  }
}

export default StoriesContainer;
