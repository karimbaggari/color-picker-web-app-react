import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { generatePalette } from "./colorHelpers";
import "./palette.css";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    console.log(level);
    setTimeout(() => {
      this.setState({ level });
    }, 1000);
  }
  render() {
    const { colors } = this.props.palette;
    const colorBoxes = colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
