import React from "react";
import { Carousel } from "flowbite-react";

const Crousel = (props) => {
  return (
    <div className="h-screen sm:h-screen xl:h-screen 2xl:h-screen">
  <Carousel slide={false}>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F2.jpg?alt=media&token=97c5b853-88b4-4523-8ace-cef6b42028d8"
      alt="..."
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F3.jpg?alt=media&token=92afc80f-e9d6-4c60-ac2f-393cc7d25959"
      alt="..."
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F4.jpg?alt=media&token=9fdf676f-7bba-4cf6-90ed-01c7b2d8168d"
      alt="..."
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F6.jpg?alt=media&token=d046e3d2-88d2-4a06-b83f-d750a43513e2"
      alt="..."
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F8.jpg?alt=media&token=0c98d2c7-6076-4533-b41d-2c0ddb083084"
      alt="..."
    />
  </Carousel>
</div>);
}

export default Crousel;