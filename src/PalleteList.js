import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PalleteList extends Component {
  render() {
    const { palettes } = this.props;
    console.log(palettes);
    return (
      <div>
        <h1>Palettes</h1>,{" "}
        {palettes.map((palette) => (
          <Link
            to={`palette/${palette.id}`}
            style={{ fontWeight: "bold", display: "block" }}
          >
            {palette.paletteName}
          </Link>
        ))}
      </div>
    );
  }
}
