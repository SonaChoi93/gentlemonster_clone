import React, { Component } from 'react';
import ProductBox from './ProductBox';

const products = [
  {
    id: 1,
    name: '잭바이',
    colors: [
      {
        color_code: '#C7C7C7',
        name: 'G1(1M)',
        image:
          'https://www.gentlemonster.com/data/item/1544072768/m_JACKBYE_G11M_1_1.jpg'
      },
      {
        color_code: '#333333',
        name: '01',
        image:
          'https://www.gentlemonster.com/data/item/1540371434/m_JACKBYE_01_1.jpg'
      },
      {
        color_code: '#FF2928',
        name: 'WC1',
        image:
          'https://www.gentlemonster.com/data/item/1544072746/m_JACKBYE_WC1_1_1.jpg'
      }
    ],
    price: '249000'
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
class ProductList extends Component {
  render() {
    return (
      <div className="wrapper_product">
        <div className="product_collection_image">collection main image</div>
        {products.map(product => (
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
