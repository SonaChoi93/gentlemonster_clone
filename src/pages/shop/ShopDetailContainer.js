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
          'https://www.gentlemonster.com/data/item/1544072768/m_JACKBYE_G11M_1_1.jpg',
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
          'https://www.gentlemonster.com/data/item/1540371434/m_JACKBYE_01_1.jpg',
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
          'https://www.gentlemonster.com/data/item/1544072746/m_JACKBYE_WC1_1_1.jpg',
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
        image:
          'https://www.gentlemonster.com/data/item/1515116887/m_MERLYNN_01_1.jpg'
      },
      {
        color_code: '#876486',
        name: 'VC3',
        image:
          'https://www.gentlemonster.com/data/item/1515116890/m_MERLYNN_VC3_1.jpg'
      },
      {
        color_code: '#F8EFDA',
        name: 'S3(1M)',
        image:
          'https://www.gentlemonster.com/data/item/1515116889/m_MERLYNN_S3(1M)_1.jpg'
      },
      {
        color_code: '#FF2928',
        name: 'WC1',
        image:
          'https://www.gentlemonster.com/data/item/1515116891/m_MERLYNN_WC1_1.jpg'
      },
      {
        color_code: '#C7C7C7',
        name: 'G1',
        image:
          'https://www.gentlemonster.com/data/item/1515116888/m_MERLYNN_G1_1.jpg'
      }
    ],
    price: '260000'
  },
  {
    id: 3,
    name: '마마스',
    colors: [
      {
        color_code: '#876486',
        name: 'VC3',
        image:
          'https://www.gentlemonster.com/data/item/1553473261/m_MAMARS_VC3_1.jpg'
      },
      {
        color_code: '#333333',
        name: '01',
        image:
          'https://www.gentlemonster.com/data/item/1529405922/m_MA_MARS_01_1.jpg'
      },
      {
        color_code: '#C7C7C7',
        name: 'G1',
        image:
          'https://www.gentlemonster.com/data/item/1532937930/m_MA_MARS_G1_1.jpg'
      },
      {
        color_code: '#FF2928',
        name: 'WC1',
        image:
          'https://www.gentlemonster.com/data/item/1515116886/m_MA_MARS_WC1_1.jpg'
      }
    ],
    price: '249000'
  },
  {
    id: 4,
    name: '식스베어스',
    colors: [
      {
        color_code: '#333333',
        name: '01',
        image:
          'https://www.gentlemonster.com/data/item/1540371489/m_SIXBEARS_01_1.jpg'
      },
      {
        color_code: '#7E8656',
        name: 'KC2',
        image:
          'https://www.gentlemonster.com/data/item/1544077654/m_SIXBEARS_G1(1M)_1.jpg'
      },
      {
        color_code: '#C7C7C7',
        name: 'G1(1M)',
        image:
          'https://www.gentlemonster.com/data/item/1544077654/m_SIXBEARS_G1(1M)_1.jpg'
      }
    ],
    price: '259000'
  },
  {
    id: 5,
    name: '찹쌀',
    colors: [
      {
        color_code: '#E49400',
        name: '033',
        image:
          'https://www.gentlemonster.com/data/item/15524690718/m_CHAPSSAL_033_01.jpg'
      },
      {
        color_code: '#333333',
        name: '01',
        image:
          'https://www.gentlemonster.com/data/item/15524690688/m_CHAPSSAL_01_01.jpg'
      },
      {
        color_code: '#E57A44',
        name: 'OR1',
        image:
          'https://www.gentlemonster.com/data/item/15524690730/m_CHAPSSAL_OR1_01.jpg'
      }
    ],
    price: '250000'
  },
  {
    id: 6,
    name: '파파스',
    colors: [
      {
        color_code: '#EBD5C3',
        name: 'S1',
        image:
          'https://www.gentlemonster.com/data/item/1515116907/m_PAPAS_S1_1.jpg'
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
        <div className="product_detail_img_section">
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
        <div className="product_detail_info_section">
          <div className="product_detail_name">
            {product.name} {product.color.name}
          </div>
          <div className="product_detail_price">{product.price} 원</div>
          <div className="product_detail_description">
            {product.description}
          </div>
          <div className="wrapper_product_colors">
            Color ({product.colors.length})
            <br />
            {product.colors.map((color, idx) => (
              // <a href="/">
              <NavLink
                key={idx}
                to={
                  `/shop_detail?product_id=` +
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
            <button onClick={() => addCart(product)}>장바구니 담기</button>
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
