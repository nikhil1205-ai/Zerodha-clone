import React, { PureComponent } from 'react';
import Hero from './Hero';
import Universe from './Universe';
import LeftColumn from './LeftColumn';
import kite from "../../assets/kite.jpg"
import Coin from "../../assets/coin.png"
import Varsity from "../../assets/varsity.png"
import Console from "../../assets/console.png"
import kiteconnect from "../../assets/kiteconnect.png"
import RightColumn from './RightColumn';

function ProductsPage() {
     return (
    <>
      <Hero />
      <LeftColumn
        imageURL={kite}
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      />
      <RightColumn
        imageURL={Console}
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftColumn
        imageURL={Coin}
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
      />
      <RightColumn
        imageURL={kiteconnect}
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."

      />
      <LeftColumn
        imageURL={Varsity}
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;