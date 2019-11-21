import React, { Component } from "react";

class StoriesContainer extends Component {
  render() {
    return (
      <div style={{ width: "95%", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "1.5em",
            marginTop: "70px"
          }}
        >
          젠틀몬스터 스토리
        </div>
        <div
          style={{
            height: "50px",
            lineHeight: "25px",
            textAlign: "center",
            fontSize: "0.9em",
            padding: "30px 0"
          }}
        >
          젠틀몬스터가 그리는 세계관과 새로운 브랜드 및 아티스트 협업, 특별한
          이벤트에
          <br /> 관련된 새로운 소식을 확인해 보세요
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://www.gentlemonster.com/img/stories/list/2020_story_thumbnail_pc.jpg)",
            height: "calc(100vh - 200px)",
            backgroundColor: "transparen",
            backgroundSize: "cover",
            borderRadius: "5px"
          }}
        ></div>
      </div>
    );
  }
}

export default StoriesContainer;
