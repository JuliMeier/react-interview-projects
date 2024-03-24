import { useState } from "react";


import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/*Random Color Component */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      {/* <StarRating numOfStars={10} /> */}
      {/* Image slider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"10"} /> */}
      {/* Load more products Component */}
      {/* <LoadMoreData /> */}
      {/* Tree view Component */}
      {/* <TreeView menus={menus} /> */}
      {/* QR code generatpr */}
      <QRCodeGenerator />
    </>
  );
}

export default App;
