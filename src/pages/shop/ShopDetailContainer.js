import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { addCart } from '../../store/modules/cart';
import { connect } from 'react-redux';

const products = [
  {
    id: 1,
    name: '잭바이',
    colors: [
      {
        color_code: '#C7C7C7',
        name: 'G1(1M)',
        image: [
          'https://www.gentlemonster.com/data/item/1544072768/JACKBYE_G11M_1_1.jpg',
          'https://www.gentlemonster.com/data/item/1544072768/JACKBYE_G11M_2_2.jpg',
          'https://www.gentlemonster.com/data/item/1544072768/JACKBYE_G11M_3_3.jpg',
          'https://www.gentlemonster.com/data/item/1544072768/JACKBYE_G11M_4_4.jpg',
          'https://www.gentlemonster.com/data/item/1544072768/JACKBYE_G11M_5_2.jpg',
          'https://www.gentlemonster.com/data/item/1544072768/JACKBYE_G11M_6_2.jpg',
          'https://www.gentlemonster.com//img/19/product/19_package.jpg'
        ]
      },
      {
        color_code: '#333333',
        name: '01',
        image: [
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_1.jpg',
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_2.jpg',
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_3.jpg',
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_4.jpg',
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_5_2.jpg',
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_6_2.jpg',
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_7_2.jpg',
          'https://www.gentlemonster.com/data/item/1540371434/JACKBYE_01_8_2.jpg'
        ]
      },
      {
        color_code: '#FF2928',
        name: 'WC1',
        image: [
          'https://www.gentlemonster.com/data/item/1544072746/JACKBYE_WC1_1_1.jpg',
          'https://www.gentlemonster.com/data/item/1544072746/JACKBYE_WC1_2_2.jpg',
          'https://www.gentlemonster.com/data/item/1544072746/JACKBYE_WC1_3_3.jpg',
          'https://www.gentlemonster.com/data/item/1544072746/JACKBYE_WC1_4_4.jpg',
          'https://www.gentlemonster.com/data/item/1544072746/JACKBYE_WC1_5_2.jpg'
        ]
      }
    ],
    price: '249000',
    description:
      '다양한 얼굴형에 어울리는 오버사이즈 사각형 플랫바 프레임의 아세테이트 선글라스입니다.'
  },
  {
    id: 2,
    name: '멀린',
    colors: [
      {
        color_code: '#333333',
        name: '01',
        image: [
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_4.jpg',
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_5.jpg',
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_6.jpg',
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_7.jpg',
          'https://www.gentlemonster.com/data/item/1515116887/MERLYNN_01_8.jpg'
        ]
      },
      {
        color_code: '#876486',
        name: 'VC3',
        image: [
          'https://www.gentlemonster.com/data/item/1515116890/MERLYNN_VC3_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116890/MERLYNN_VC3_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116890/MERLYNN_VC3_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116890/MERLYNN_VC3_4.jpg'
        ]
      },
      {
        color_code: '#F8EFDA',
        name: 'S3(1M)',
        image: [
          'https://www.gentlemonster.com/data/item/1515116889/MERLYNN_S3(1M)_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116889/MERLYNN_S3(1M)_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116889/MERLYNN_S3(1M)_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116889/MERLYNN_S3(1M)_4.jpg'
        ]
      },
      {
        color_code: '#FF2928',
        name: 'WC1',
        image: [
          'https://www.gentlemonster.com/data/item/1515116891/MERLYNN_WC1_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116891/MERLYNN_WC1_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116891/MERLYNN_WC1_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116891/MERLYNN_WC1_4.jpg'
        ]
      },
      {
        color_code: '#C7C7C7',
        name: 'G1',
        image: [
          'https://www.gentlemonster.com/data/item/1515116888/MERLYNN_G1_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116888/MERLYNN_G1_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116888/MERLYNN_G1_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116888/MERLYNN_G1_4.jpg',
          'https://www.gentlemonster.com/data/item/1515116888/MERLYNN_G1_5.jpg',
          'https://www.gentlemonster.com/data/item/1515116888/MERLYNN_G1_6.jpg'
        ]
      }
    ],
    price: '260000',
    description:
      '멀린 WC1 은 FLATBA 구조적 디자인을 반영하면서도 오버사이즈 프레임을 재구성했습니다. 투명 와인 아세테이트 프런트와 조절 가능한 PVC 노즈 패드가 장착된 실버 메탈 노즈 브릿지로 구성되었습니다. 템플 팁의 메탈 컷아웃 디테일과 100% UV 차단이 되는 플랫한 투톤 레드 틴트 렌즈로 완성됩니다.'
  },
  {
    id: 3,
    name: '마마스',
    colors: [
      {
        color_code: '#876486',
        name: 'VC3',
        image: [
          'https://www.gentlemonster.com/data/item/1553473261/MAMARS_VC3_1.jpg',
          'https://www.gentlemonster.com/data/item/1553473261/MAMARS_VC3_2.jpg',
          'https://www.gentlemonster.com/data/item/1553473261/MAMARS_VC3_3.jpg',
          'https://www.gentlemonster.com/data/item/1553473261/MAMARS_VC3_4.jpg'
        ]
      },
      {
        color_code: '#333333',
        name: '01',
        image: [
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_1.jpg',
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_2.jpg',
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_3.jpg',
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_4.jpg',
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_5.jpg',
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_6.jpg',
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_7.jpg',
          'https://www.gentlemonster.com/data/item/1529405922/MA_MARS_01_8.jpg'
        ]
      },
      {
        color_code: '#C7C7C7',
        name: 'G1',
        image: [
          'https://www.gentlemonster.com/data/item/1532937930/MA_MARS_G1_1.jpg',
          'https://www.gentlemonster.com/data/item/1532937930/MA_MARS_G1_2.jpg',
          'https://www.gentlemonster.com/data/item/1532937930/MA_MARS_G1_3.jpg',
          'https://www.gentlemonster.com/data/item/1532937930/MA_MARS_G1_4.jpg',
          'https://www.gentlemonster.com/data/item/1532937930/MA_MARS_G1_5.jpg',
          'https://www.gentlemonster.com/data/item/1532937930/MA_MARS_G1_6.jpg'
        ]
      },
      {
        color_code: '#FF2928',
        name: 'WC1',
        image: [
          'https://www.gentlemonster.com/data/item/1515116886/MA_MARS_WC1_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116886/MA_MARS_WC1_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116886/MA_MARS_WC1_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116886/MA_MARS_WC1_4.jpg'
        ]
      }
    ],
    price: '249000',
    description:
      '마마스 VC3 은 FLATBA 디자인에 따라 제작된 투명 바이올렛 아세테이트 프레임입니다. 클래식한 프래임에서 발전된 이 스타일은 기존 모델들보다 대체로 더 얇고 가벼우며, 100% UV 차단이 되는 플랫한 바이올렛 렌즈가 특징입니다.'
  },
  {
    id: 4,
    name: '식스베어스',
    colors: [
      {
        color_code: '#333333',
        name: '01',
        image: [
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_1.jpg',
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_2.jpg',
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_3.jpg',
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_4.jpg',
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_5.jpg',
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_6.jpg',
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_7.jpg',
          'https://www.gentlemonster.com/data/item/1540371489/SIXBEARS_01_8.jpg'
        ]
      },
      {
        color_code: '#7E8656',
        name: 'KC2',
        image: [
          'https://www.gentlemonster.com/data/item/1544078001/SIXBEARS_KC2_1_1.jpg',
          'https://www.gentlemonster.com/data/item/1544078001/SIXBEARS_KC2_2_2.jpg',
          'https://www.gentlemonster.com/data/item/1544078001/SIXBEARS_KC2_3_3.jpg',
          'https://www.gentlemonster.com/data/item/1544078001/SIXBEARS_KC2_4_4.jpg',
          'https://www.gentlemonster.com/data/item/1544078001/SIXBEARS_KC2_5_5.jpg',
          'https://www.gentlemonster.com/data/item/1544078001/SIXBEARS_KC2_6_6.jpg'
        ]
      },
      {
        color_code: '#C7C7C7',
        name: 'G1(1M)',
        image: [
          'https://www.gentlemonster.com/data/item/1544077654/SIXBEARS_G1(1M)_1.jpg',
          'https://www.gentlemonster.com/data/item/1544077654/SIXBEARS_G1(1M)_2.jpg',
          'https://www.gentlemonster.com/data/item/1544077654/SIXBEARS_G1(1M)_3.jpg',
          'https://www.gentlemonster.com/data/item/1544077654/SIXBEARS_G1(1M)_4.jpg',
          'https://www.gentlemonster.com/data/item/1544077654/SIXBEARS_G1(1M)_5.jpg',
          'https://www.gentlemonster.com/data/item/1544077654/SIXBEARS_G1(1M)_6.jpg'
        ]
      }
    ],
    price: '259000',
    description:
      '넓은 세로폭으로 안정감있는 사각형 아세테이트 플랫바 선글라스입니다.'
  },
  {
    id: 5,
    name: '찹쌀',
    colors: [
      {
        color_code: '#E49400',
        name: '033',
        image: [
          'https://www.gentlemonster.com/data/item/15524690718/CHAPSSAL_033_01.jpg',
          'https://www.gentlemonster.com/data/item/15524690718/CHAPSSAL_033_02.jpg',
          'https://www.gentlemonster.com/data/item/15524690718/CHAPSSAL_033_3.jpg',
          'https://www.gentlemonster.com/data/item/15524690718/CHAPSSAL_033_4.jpg',
          'https://www.gentlemonster.com/data/item/15524690718//CHAPSSAL_033_1.jpg',
          'https://www.gentlemonster.com/data/item/15524690718/CHAPSSAL_033_2.jpg'
        ]
      },
      {
        color_code: '#333333',
        name: '01',
        image: [
          'https://www.gentlemonster.com/data/item/15524690688/CHAPSSAL_01_01.jpg',
          'https://www.gentlemonster.com/data/item/15524690688/CHAPSSAL_01_02.jpg',
          'https://www.gentlemonster.com/data/item/15524690688/CHAPSSAL_01_31.jpg',
          'https://www.gentlemonster.com/data/item/15524690688/CHAPSSAL_01_4.jpg',
          'https://www.gentlemonster.com/data/item/15524690688//CHAPSSAL_01_1.jpg',
          'https://www.gentlemonster.com/data/item/15524690688/CHAPSSAL_01_2.jpg'
        ]
      },
      {
        color_code: '#E57A44',
        name: 'OR1',
        image: [
          'https://www.gentlemonster.com/data/item/15524690730/CHAPSSAL_OR1_01.jpg',
          'https://www.gentlemonster.com/data/item/15524690730/CHAPSSAL_OR1_002.jpg',
          'https://www.gentlemonster.com/data/item/15524690730/CHAPSSAL_OR1_3.jpg',
          'https://www.gentlemonster.com/data/item/15524690730/CHAPSSAL_OR1_4.jpg',
          'https://www.gentlemonster.com/data/item/15524690730//CHAPSSAL_OR1_1.jpg',
          'https://www.gentlemonster.com/data/item/15524690730/CHAPSSAL_OR1_2.jpg'
        ]
      }
    ],
    price: '250000',
    description:
      '찹쌀 033은 좁고 긴 형태의 레오파드 아세테이트 캣아이 프레임 선글라스입니다. 안구의 세로폭이 좁고 끝부분이 올라간 디자인으로 여성스러움이 강조되며 템플에 젠틀몬스터 레터 로고가 선글라스를 돋보이게 합니다. 100% UV 차단이 되는 네이비 렌즈를 사용하였습니다.'
  },
  {
    id: 6,
    name: '파파스',
    colors: [
      {
        color_code: '#7F865B',
        name: 'KC2',
        description:
          '파파스 KC2 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 다크 카키 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 다크 카키 틴트 렌즈가 특징입니다.',
        image: [
          'https://www.gentlemonster.com/data/item/1515116906/PAPAS_KC2_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116906/PAPAS_KC2_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116906/PAPAS_KC2_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116906/PAPAS_KC2_4.jpg'
        ]
      },
      {
        color_code: '#EBD5C3',
        name: 'S1',
        description:
          '파파스 S1 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 투명 베이지 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 투명 베이지 렌즈가 특징입니다.',
        image: [
          'https://www.gentlemonster.com/data/item/1515116907/PAPAS_S1_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116907/PAPAS_S1_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116907/PAPAS_S1_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116907/PAPAS_S1_4.jpg'
        ]
      },
      {
        color_code: '#C7C7C7',
        name: 'G1(1M)',
        description:
          '파파스 G1(1M) 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 투명 그레이 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 실버 미러 렌즈가 특징입니다.',
        image: [
          'https://www.gentlemonster.com/data/item/1515116905/PAPAS_G1(1M)_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116905/PAPAS_G1(1M)_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116905/PAPAS_G1(1M)_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116905/PAPAS_G1(1M)_4.jpg',
          'https://www.gentlemonster.com/data/item/1515116905/PAPAS_G1(1M)_5.jpg',
          'https://www.gentlemonster.com/data/item/1515116905/PAPAS_G1(1M)_6.jpg'
        ]
      },
      {
        color_code: '#000000',
        name: '01',
        description:
          '파파스 01 은 FLATBA 디자인 중에서도 더 날렵해진 형태를 띱니다. 더 얇아진 블랙 아세테이트 프레임, 메탈 컷아웃 템플 팁 및 100% UV 차단이 되는 블랙 Zeiss 렌즈가 특징입니다.',
        image: [
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_1.jpg',
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_2.jpg',
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_3.jpg',
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_4.jpg',
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_5.jpg',
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_6.jpg',
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_7.jpg',
          'https://www.gentlemonster.com/data/item/1515116904/PAPAS_01_8.jpg'
        ]
      }
    ],
    price: '249000'
  }
];

class ShopDetailContainer extends Component {
  render() {
    const parse = this.props.location.search.substr(1).split('?');
    const id = parse[0].split('=')[1];
    const item_color = parse[1].split('=')[1];
    let product = products.filter(product => product.id === parseInt(id))[0];
    product.color = product.colors.filter(
      color => color.name === item_color
    )[0];
    const { addCart } = this.props;
    return (
      <div>
        <div className="product_detail_section image">
          <div className="wrapper_anchor">
            <a href="#image_0">
              <div className="image_anchor" />
            </a>
            <a href="#image_1">
              <div className="image_anchor" />
            </a>
            <a href="#image_2">
              <div className="image_anchor" />
            </a>
            <a href="#image_3">
              <div className="image_anchor" />
            </a>
          </div>
          <div className="wrapper_product_images">
            {product.color.image.map((image, idx) => (
              <img
                key={idx}
                alt="product_image"
                width="100%"
                src={image}
                id={`image_` + idx}
              />
            ))}
          </div>
        </div>
        <div className="product_detail_section info">
          <div className="product_detail_name">
            {product.name} {product.color.name}
          </div>
          <div className="product_detail_price">{product.price} 원</div>
          <div className="product_detail_description">
            {product.description}
          </div>
          <div className="wrapper_product_colors">
            <div style={{ marginBottom: '10px' }}>
              Color ({product.colors.length})
            </div>
            {product.colors.map((color, idx) => (
              <NavLink
                key={idx}
                to={
                  `/product_detail?product_id=` +
                  product.id +
                  `?color_name=` +
                  color.name
                }
              >
                <img
                  key={idx}
                  alt="product_image"
                  className={
                    `mini_product_image ` +
                    `${color.name === item_color && 'active'}`
                  }
                  src={color.image[0]}
                />
              </NavLink>
            ))}
          </div>
          <div className="product_detail_add_btn">
            <div className="btn_style_black" onClick={() => addCart(product)}>
              장바구니 담기
            </div>
          </div>
          <div className="wrapper_product_detail_etc">
            <div className="product_detail_etc"></div>
            <div className="product_detail_etc"></div>
            <div className="product_detail_etc"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carts: state.cart.carts
});

const mapDispatchToProps = dispatch => ({
  addCart: data => dispatch(addCart(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopDetailContainer);
