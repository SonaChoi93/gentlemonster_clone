import React, { Component } from 'react';

class StoreImage extends Component {
  state = {
    index: 0
  };
  render() {
    const { images } = this.props;
    return (
      <div className="store_image_section">
        <div
          className="store_image_btn pre"
          onClick={() => {
            if (this.state.index > 0)
              this.setState({
                index: this.state.index - 1
              });
          }}
        >
          이전
        </div>
        <div
          className="store_image_btn next"
          onClick={() => {
            if (this.state.index < images.length - 1)
              this.setState({
                index: this.state.index + 1
              });
          }}
        >
          다음
        </div>
        <div
          className="store_image"
          style={{
            backgroundImage: `url(${images[`${this.state.index}`]})`
          }}
        ></div>
        <div className="store_slider_pagination">
          <div
            className="store_slider_pagination_per"
            style={{ width: `calc(100% / 5 * (${this.state.index + 1}))` }}
          >
            <div
              style={{ fontSize: '12px', paddingTop: '5px', textAlign: 'left' }}
            >
              {this.state.index + 1} of 5
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StoreImage;
