import React from "react";
import FeedList from "./FeedList";

const FeedWrap = props => {
  const Feed = [
    {
      id: 1,
      title: "젠틀몬스터 x 알렉산더 왕",
      description:
        "젠틀몬스터와 알렉산더 왕과의 두번째 협업 컬렉션 ‘엠프리스’를 소개합니다.",
      img_url:
        "https://www.gentlemonster.com/img/stories/list/aw_cn_story_thumbnail_2.jpg"
    },
    {
      id: 2,
      title: "젠틀몬스터 x 앰부시",
      description:
        "젠틀몬스터와 앰부시 특유의 실험적인 디자인이 담긴 ‘ZIP TIE’ 협업 컬렉션을 소개합니다.",
      img_url:
        "https://www.gentlemonster.com/img/stories/list/ambush_story_thumbnail.jpg"
    },
    {
      id: 3,
      title: "젠틀몬스터 키즈 컬렉션",
      description:
        "동시대 아이들의 무한한 꿈과 도전을 담고 있는 젠틀몬스터의 첫 키즈 컬렉션을 소개합니다.",
      img_url: "https://www.gentlemonster.com/img/stories/list/kids_pc_mob.jpg"
    },
    {
      id: 4,
      title: "FENDI | GENTLE MONSTER",
      description:
        "젠틀몬스터와 펜디의 협업 컬렉션 GENTLE FENDI를 소개합니다. 젠틀몬스터의 혁신적인 디자인과 펜디의 장인정신이 만나 예측 불가능한 미학과 활기찬 무드를 보여줍니다.",
      img_url: "https://www.gentlemonster.com/img/stories/list/gf_pc_mob.jpg"
    },
    {
      id: 5,
      title: "13월, 예측할 수 없는 세상",
      description:
        "‘지구에 열세 번째 달이 생긴다면?’ 이 호기심과 상상에서 출발한 젠틀몬스터의 2019 캠페인 ‘13’, 그 두번째 에피소드로 애니메이션 작가 Ugo Bienven와 함께 ‘예측불가한 세상’을 이야기합니다.",
      img_url: "https://www.gentlemonster.com/img/stories/list/13_pc_mob.jpg"
    },
    {
      id: 6,
      title: "2019 컬렉션 캠페인 13",
      description:
        "달의 자전축이 기울어 지구와의 거리가 조금씩 멀어지면서 열 세 번째 달이 생긴다는 가정에서 시작한 젠틀몬스터의 새로운 캠페인 ‘13’.",
      img_url: "https://www.gentlemonster.com/img/stories/list/Frederik.jpg"
    }
  ];

  return (
    <div className="Wrap2" style={{ paddingTop: "80px" }}>
      {<FeedList Feed={Feed} />}
    </div>
  );
};

export default FeedWrap;
