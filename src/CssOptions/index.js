import React from "react";
import CssOptionsList from "./CssOptionsList.js";
import SelectedCssOption from "./SelectedCssOption.js";
/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <CssOptionsList selectColor={props.selectColor} />
    <SelectedCssOption
      selectedColor={props.selectedColor}
      palette={props.palette}
      addToPalette={props.addToPalette}
    />
    <div className="color-options-row" />
  </div>
);

export default CssOptions;
