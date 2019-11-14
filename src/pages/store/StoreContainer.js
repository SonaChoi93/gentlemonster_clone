import React, { Component } from 'react';
import StoreList from './StoreList';
import './store.css';

class StoreContainer extends Component {
  render() {
    const stores = [
      {
        id: 1,
        name: '서울 신사',
        address: '서울특별시 강남구 압구정로10길 23',
        number: '+82-70-5080-0196',
        thumbnail_url:
          'https://www.gentlemonster.com/img/store/KR_Seoul_Sinsa/store_sinsa_storethumbnail_pc1.jpg'
      },
      {
        id: 2,
        name: '서울 홍대',
        address: '서울특별시 마포구 독막로7길 54',
        number: '+82-2-3144-0864',
        thumbnail_url:
          'https://www.gentlemonster.com/img/store/KR_Seoul_Hongdae/190524/store-hongdae-list-190524-01.jpg'
      },
      {
        id: 3,
        name: '서울 북촌',
        address: '서울특별시 종로구 계동길 92',
        number: '+82-70-4895-1287',
        thumbnail_url:
          'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_storethumbnail_pc.jpg'
      },
      {
        id: 4,
        name: '대구',
        address: '대구광역시 중구 동성로3가 106-4',
        number: '+82-53-252-5121',
        thumbnail_url:
          'https://www.gentlemonster.com/img/store/KR_Daegu/store_Daegu_storethumbnail_pc.jpg'
      },
      {
        id: 5,
        name: '부산',
        address: '부산광역시 중구 광복로 78-1',
        number: '+82-51-254-7898',
        thumbnail_url:
          'https://www.gentlemonster.com/img/store/kr_busan-2/190614/store_Busan_storethumbnail_mob.jpg'
      }
    ];
    return (
      <div>
        <StoreList stores={stores} url={this.props.match.url} />
      </div>
    );
  }
}

export default StoreContainer;
