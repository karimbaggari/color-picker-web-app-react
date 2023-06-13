import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorBox.css";
export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { copied } = this.state;
    const { name, background } = this.props;
    return (
      <div style={{ background: background }} className="Color-box">
        <div
          className={`copy-overlay ${copied && "show"}`}
          style={{ background: background }}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{this.props.background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className="copy-button">Copy</button>
          </CopyToClipboard>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
