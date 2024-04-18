import { useState } from "react";

import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/ligth-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabsTest from "./components/custom-tabs/tabs-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";

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
      {/* <QRCodeGenerator /> */}
      {/*Light Dark Mode Component */}
      {/* <LightDarkMode /> */}
      {/*Scroll Indicator Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* Custom Tab Component */}
      {/* <TabsTest /> */}
      {/* Custom Modal Component */}
      {/* <ModalTest /> */}
      {/* Github profile finder */}
      <GithubProfileFinder />
    </>
  );
}

export default App;
