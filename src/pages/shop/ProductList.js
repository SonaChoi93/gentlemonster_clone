import React, { Component } from "react";
import ProductBox from "./ProductBox";
const products = [
  {
    id: 1,
    name: "잭바이",
    colors: [
      {
        color_code: "#C7C7C7",
        name: "G1(1M)",
        image:
          "https://www.gentlemonster.com/data/item/1544072768/m_JACKBYE_G11M_1_1.jpg"
      },
      {
        color_code: "#333333",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/1540371434/m_JACKBYE_01_1.jpg"
      },
      {
        color_code: "#FF2928",
        name: "WC1",
        image:
          "https://www.gentlemonster.com/data/item/1544072746/m_JACKBYE_WC1_1_1.jpg"
      }
    ],
    price: "249000",
    description:
      "다양한 얼굴형에 어울리는 오버사이즈 사각형 플랫바 프레임의 아세테이트 선글라스입니다."
  },
  {
    id: 2,
    name: "멀린",
    colors: [
      {
        color_code: "#333333",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/1515116887/m_MERLYNN_01_1.jpg"
      },
      {
        color_code: "#876486",
        name: "VC3",
        image:
          "https://www.gentlemonster.com/data/item/1515116890/m_MERLYNN_VC3_1.jpg"
      },
      {
        color_code: "#F8EFDA",
        name: "S3(1M)",
        image:
          "https://www.gentlemonster.com/data/item/1515116889/m_MERLYNN_S3(1M)_1.jpg"
      },
      {
        color_code: "#FF2928",
        name: "WC1",
        image:
          "https://www.gentlemonster.com/data/item/1515116891/m_MERLYNN_WC1_1.jpg"
      },
      {
        color_code: "#C7C7C7",
        name: "G1",
        image:
          "https://www.gentlemonster.com/data/item/1515116888/m_MERLYNN_G1_1.jpg"
      }
    ],
    price: "260000",
    description:
      "멀린 WC1 은 FLATBA 구조적 디자인을 반영하면서도 오버사이즈 프레임을 재구성했습니다. 투명 와인 아세테이트 프런트와 조절 가능한 PVC 노즈 패드가 장착된 실버 메탈 노즈 브릿지로 구성되었습니다. 템플 팁의 메탈 컷아웃 디테일과 100% UV 차단이 되는 플랫한 투톤 레드 틴트 렌즈로 완성됩니다."
  },
  {
    id: 3,
    name: "마마스",
    colors: [
      {
        color_code: "#876486",
        name: "VC3",
        image:
          "https://www.gentlemonster.com/data/item/1553473261/m_MAMARS_VC3_1.jpg"
      },
      {
        color_code: "#333333",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/1529405922/m_MA_MARS_01_1.jpg"
      },
      {
        color_code: "#C7C7C7",
        name: "G1",
        image:
          "https://www.gentlemonster.com/data/item/1532937930/m_MA_MARS_G1_1.jpg"
      },
      {
        color_code: "#FF2928",
        name: "WC1",
        image:
          "https://www.gentlemonster.com/data/item/1515116886/m_MA_MARS_WC1_1.jpg"
      }
    ],
    price: "249000",
    description:
      "마마스 VC3 은 FLATBA 디자인에 따라 제작된 투명 바이올렛 아세테이트 프레임입니다. 클래식한 프래임에서 발전된 이 스타일은 기존 모델들보다 대체로 더 얇고 가벼우며, 100% UV 차단이 되는 플랫한 바이올렛 렌즈가 특징입니다."
  },
  {
    id: 4,
    name: "식스베어스",
    colors: [
      {
        color_code: "#333333",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/1540371489/m_SIXBEARS_01_1.jpg"
      },
      {
        color_code: "#7E8656",
        name: "KC2",
        image:
          "https://www.gentlemonster.com/data/item/1544078001/m_SIXBEARS_KC2_1_1.jpg"
      },
      {
        color_code: "#C7C7C7",
        name: "G1(1M)",
        image:
          "https://www.gentlemonster.com/data/item/1544077654/m_SIXBEARS_G1(1M)_1.jpg"
      }
    ],
    price: "259000",
    description:
      "넓은 세로폭으로 안정감있는 사각형 아세테이트 플랫바 선글라스입니다."
  },
  {
    id: 5,
    name: "찹쌀",
    colors: [
      {
        color_code: "#E49400",
        name: "033",
        image:
          "https://www.gentlemonster.com/data/item/15524690718/m_CHAPSSAL_033_01.jpg"
      },
      {
        color_code: "#333333",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/15524690688/m_CHAPSSAL_01_01.jpg"
      },
      {
        color_code: "#E57A44",
        name: "OR1",
        image:
          "https://www.gentlemonster.com/data/item/15524690730/m_CHAPSSAL_OR1_01.jpg"
      }
    ],
    price: "250000",
    description:
      "찹쌀 033은 좁고 긴 형태의 레오파드 아세테이트 캣아이 프레임 선글라스입니다. 안구의 세로폭이 좁고 끝부분이 올라간 디자인으로 여성스러움이 강조되며 템플에 젠틀몬스터 레터 로고가 선글라스를 돋보이게 합니다. 100% UV 차단이 되는 네이비 렌즈를 사용하였습니다."
  },
  {
    id: 6,
    name: "파파스",
    colors: [
      {
        color_code: "#7F865B",
        name: "KC2",
        description:
          "파파스 KC2 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 다크 카키 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 다크 카키 틴트 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1515116906/m_PAPAS_KC2_1.jpg"
      },
      {
        color_code: "#EBD5C3",
        name: "S1",
        description:
          "파파스 S1 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 투명 베이지 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 투명 베이지 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1515116907/m_PAPAS_S1_1.jpg"
      },
      {
        color_code: "#C7C7C7",
        name: "G1(1M)",
        description:
          "파파스 G1(1M) 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 투명 그레이 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 실버 미러 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1515116905/m_PAPAS_G1(1M)_1.jpg"
      },
      {
        color_code: "#000000",
        name: "01",
        description:
          "파파스 01 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 블랙 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 블랙 Zeiss 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1515116904/m_PAPAS_01_1.jpg"
      }
    ],
    price: "249000"
  }
];

const products_glasses = [
  {
    id: 1,
    name: "가타",
    colors: [
      {
        color_code: "#000",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/1572396236/m_GATTA01001.jpg"
      },
      {
        color_code: "#F79882",
        name: "C1",
        image:
          "https://www.gentlemonster.com/data/item/1572399562/m_GATTAC1001.jpg"
      }
    ],
    price: "375,000",
    description:
      "2020 T-Optical Series에 소개된 직사각형 형태의 아세테이트 메탈 콤비 프레임 안경입니다. 하금테 프론트의 상하 소재를 재치있게 바꾸어 재해석한 디자인으로 아래쪽은 아세테이트, 위쪽은 티타늄 소재로 구성되어 있습니다. 프론트 양 끝의 징 장식이 세련미를 더하며, 고급스러운 인그레이빙 디테일과 GENTLE MONSTER 로고가 돋보이는 템플은 곡선 메탈 팁으로 완성됩니다."
  },
  {
    id: 2,
    name: "하바나",
    colors: [
      {
        color_code: "#333333",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/1572399808/m_HABANA010001.jpg"
      },
      {
        color_code: "#753125",
        name: "B4",
        image:
          "https://www.gentlemonster.com/data/item/1572400464/m_HABANAB4001.jpg"
      }
    ],
    price: "330,000",
    description:
      "2020 T-Optical Series에 소개된 직사각형 형태의 아세테이트 메탈 콤비 프레임 안경입니다. 메탈림을 감싸고 있는 안구 윗쪽의 아세테이트가 특징인 하금테 프레임으로 프론트 양 끝의 두 개의 징 디테일, 템플의 고급스러운 인그레이빙 디테일로 완성됩니다. 티타늄 소재를 사용해 가볍고 착용감이 좋습니다."
  },
  {
    id: 3,
    name: "웨스트 코스트",
    colors: [
      {
        color_code: "#876486",
        name: "01",
        image:
          "https://www.gentlemonster.com/data/item/1572400735/m_WESTCOAST01001.jpg"
      },
      {
        color_code: "#333333",
        name: "D01",
        image:
          "https://www.gentlemonster.com/data/item/1572401020/m_WESTCOASTD01001.jpg"
      }
    ],
    price: "330,000",
    description:
      "2020 T-Optical Series에 소개된 스퀘어 형태의 아세테이트 메탈 콤비 프레임 안경입니다. 안구 위쪽의 아세테이트를 둘러싼 메탈림이 특징인 하금테 프레임으로 프론트 양 끝의 징 디테일, 템플의 고급스러운 인그레이빙 디테일로 완성됩니다. 티타늄 소재를 사용해 가볍고 착용감이 좋습니다."
  },
  {
    id: 4,
    name: "톰 21",
    colors: [
      {
        color_code: "#333333",
        name: "A02",
        image:
          "https://www.gentlemonster.com/data/item/1572401964/m_TOM21M01001.jpg"
      },
      {
        color_code: "#7E8656",
        name: "M01",
        image:
          "https://www.gentlemonster.com/data/item/1572401712/m_TOM21A02001.jpg"
      }
    ],
    price: "320,000",
    description:
      "2020 T-Optical Series에 소개된 라운드 메탈 프레임 안경입니다. 클래식한 라운드 형태의 안구와 템플의 고급스러운 인그레이빙 디테일이 특징이며 티타늄 소재를 사용해 착용감이 뛰어납니다."
  },
  {
    id: 5,
    name: "톰 22",
    colors: [
      {
        color_code: "#E49400",
        name: "A02",
        image:
          "https://www.gentlemonster.com/data/item/1572402174/m_TOM22A02001.jpg"
      },
      {
        color_code: "#333333",
        name: "M01",
        image:
          "https://www.gentlemonster.com/data/item/1572402291/m_TOM22M01001.jpg"
      }
    ],
    price: "320,000",
    description:
      "2020 T-Optical Series에 소개된 스퀘어 메탈 프레임 안경입니다. 부드러운 곡선의 사각 안구와 템플의 고급스러운 인그레이빙 디테일이 특징이며 티타늄 소재를 사용해 착용감이 뛰어납니다."
  },
  {
    id: 6,
    name: "파파스",
    colors: [
      {
        color_code: "#7F865B",
        name: "KC2",
        description:
          "파파스 KC2 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 다크 카키 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 다크 카키 틴트 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1572402174/m_TOM22A02001.jpg"
      },
      {
        color_code: "#EBD5C3",
        name: "S1",
        description:
          "파파스 S1 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 투명 베이지 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 투명 베이지 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1572402291/m_TOM22M01001.jpg"
      },
      {
        color_code: "#C7C7C7",
        name: "G1(1M)",
        description:
          "파파스 G1(1M) 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 투명 그레이 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 실버 미러 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1515116905/m_PAPAS_G1(1M)_1.jpg"
      },
      {
        color_code: "#000000",
        name: "01",
        description:
          "파파스 01 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 블랙 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 블랙 Zeiss 렌즈가 특징입니다.",
        image:
          "https://www.gentlemonster.com/data/item/1515116904/m_PAPAS_01_1.jpg"
      }
    ],
    price: "249000"
  }
];
class ProductList extends Component {
  render() {
    const ca_id_index = this.props.root_url.substring(12);
    const result = parseInt(ca_id_index) === 0 ? products : products_glasses;
    return (
      <div className="wrapper_product">
        <div className="product_collection_image">collection main image</div>
        {result.map(product => (
          <ProductBox
            key={product.id}
            product={product}
            root_url={this.props.root_url}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
