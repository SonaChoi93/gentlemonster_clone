import React, { Component } from 'react';
import StoreImage from './StoreImage';

const stores = [
  {
    id: 1,
    name: '서울 신사',
    address: '서울특별시 강남구 압구정로10길 23',
    number: '+82-70-5080-0196',
    time: '월요일 – 토요일. 10:30AM-11PM',
    image_url: [
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail01.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail02.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail03.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail04.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail05.jpg'
    ]
  },
  {
    id: 2,
    name: '서울 홍대',
    address: '서울특별시 마포구 독막로7길 54',
    number: '+82-2-3144-0864',
    time: '월요일 – 토요일. 10:30AM-11PM',
    image_url: [
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail01.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail02.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail03.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail04.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail05.jpg'
    ]
  },
  {
    id: 3,
    name: '서울 북촌',
    address: '서울특별시 종로구 계동길 92',
    number: '+82-70-4895-1287',
    time: '월요일 – 토요일. 10:30AM-11PM',
    image_url: [
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail01.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail02.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail03.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail04.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail05.jpg'
    ]
  },
  {
    id: 4,
    name: '대구',
    address: '대구광역시 중구 동성로3가 106-4',
    number: '+82-53-252-5121',
    time: '월요일 – 토요일. 10:30AM-11PM',
    image_url: [
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail01.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail02.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail03.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail04.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail05.jpg'
    ]
  },
  {
    id: 5,
    name: '부산',
    address: '부산광역시 중구 광복로 78-1',
    number: '+82-51-254-7898',
    time: '월요일 – 토요일. 10:30AM-11PM',
    image_url: [
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail01.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail02.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail03.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail04.jpg',
      'https://www.gentlemonster.com/img/store/KR_Seoul_Bukchon/store_Bukchon_pc_detail05.jpg'
    ]
  }
];
class StoreDetail extends Component {
  render() {
    const { store_id } = this.props.match.params;
    /* 가져올때 where id 로 {} 한개만*/
    const data = stores.filter(store => store.id === parseInt(store_id))[0];
    return (
      <div>
        <div>{data.name}</div>
        <div>{data.address}</div>
        <div>운영시간</div>
        <div>{data.time}</div>
        <div>전화번호</div>
        <div>{data.number}</div>
        <StoreImage images={data.image_url} />
      </div>
    );
  }
}

export default StoreDetail;
