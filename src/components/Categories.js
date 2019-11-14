import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

class Item extends Component {
  render() {
    const { item, clickCategory, active } = this.props;
    return (
      <li className={active} onClick={() => clickCategory(item.id)}>
        <Link style={{ textDecoration: 'none' }} to={item.path}>
          <span>{item.name}</span>
        </Link>
      </li>
    );
  }
}
class Categories extends Component {
  render() {
    const { categories, id, clickCategory } = this.props;
    return (
      <div className="nav_section">
        <ul className="nav_item">
          {categories.map(category => {
            return (
              <Item
                key={category.id}
                item={category}
                active={category.id === id ? 'active' : ''}
                clickCategory={clickCategory}
              ></Item>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Categories;
