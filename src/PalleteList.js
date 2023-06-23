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
      <div className="bg-white">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <p class="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
              Introducing
            </p>

            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              React Color Picker
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Discover an extensive collection of vibrant colors with our Color
              Picker. Find the perfect shade for your creative projects with
              ease. Simply browse through hundreds of colors and copy your
              favorites with a single click. Whether you're a designer, artist,
              or enthusiast, our intuitive interface and one-click copy feature
              make it effortless to integrate your chosen colors into your
              designs. Join our community of passionate color enthusiasts and
              unlock a world of inspiration. Start exploring our Color Picker
              now and elevate your creations with the power of color.
            </p>
          </div>
        </div>
        <h3 class="mb-4 text-center text-2xl font-400 text-gray-800 md:mb-6 lg:text-3xl">
              Click on one of the collections to explore the colors inside of it 
            </h3>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
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
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
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
                ></div>
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
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
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
