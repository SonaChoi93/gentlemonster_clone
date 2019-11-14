const CLICK_CATEGORY = 'CLICK_CATEGORY';
const CLICK_LOGO = 'CLICK_LOGO';
const CLICK_LOGIN = 'CLICK_LOGIN';

export const clickCategory = id => ({ type: CLICK_CATEGORY, id });
export const clickLogo = () => ({ type: CLICK_LOGO });
export const clickLogin = () => ({ type: CLICK_LOGIN });

const categories = [
  { id: '1', name: '선글라스', active: false, path: '/shop?ca_id=0' },
  { id: '2', name: '안경', active: false, path: '/shop?ca_id=1' },
  { id: '3', name: '매장', active: false, path: '/store' },
  { id: '4', name: '스토리', active: false, path: '/stories' },
  { id: '5', name: '서비스', active: false, path: '/service' }
  // { id: '6', name: '관리자', active: false }
];
const initialState = {
  admin: 0,
  id: 0,
  categories
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case CLICK_CATEGORY:
      return {
        ...state,
        id: action.id,
        categories: categories.map(category => {
          if (category.id === action.id) {
            return {
              ...category,
              active: !category.active
            };
          }
          return category;
        })
      };

    default:
      return state;
  }
}
