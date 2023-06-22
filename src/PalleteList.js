import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
export default class PalleteList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { palettes } = this.props;
    console.log(palettes[0].colors[0]);
    return (
      <div className="bg-purple-500">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {palettes.map((palette) => (
            <div
              className="m-8 grid grid-cols-3 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8"
              key={palette.id}
            >
              <Link
                to={`palette/${palette.id}`}
                style={{ fontWeight: "bold", display: "block" }}
              >
                <div
                  style={{
                    background: palette.colors[0].color,
                    width: "200px",
                    height: "50px",
                  }}
                ></div>
                <div
                  style={{
                    background: palette.colors[1].color,
                    width: "200px",
                    height: "50px",
                  }}
                ></div>
                <div
                  style={{
                    background: palette.colors[2].color,
                    width: "200px",
                    height: "50px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {palette.paletteName}
                </div>
                <div
                  style={{
                    background: palette.colors[3].color,
                    width: "200px",
                    height: "50px",
                  }}
                ></div>
                <div
                  style={{
                    background: palette.colors[4].color,
                    width: "200px",
                    height: "50px",
                  }}
                ></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
