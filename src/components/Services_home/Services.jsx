import React, { PureComponent } from 'react';
import {Card} from 'flowbite-react';
const Services = () => {
    return(
        <div className="services flex justify-center align-center w-full">
      <div className="card-container-services p-8  grid grid-cols-3 justify-center align-center gap-x-10">
      <div className="max-w-sm ">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F6.jpg?alt=media&token=d046e3d2-88d2-4a06-b83f-d750a43513e2"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
Adoption
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     We provide a service were you can adopt a stray animal and give it a home.
     If you hav a animal for adoption you can also contact us.
    </p>
  </Card>
  
</div>
<div className="max-w-sm ">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F8.jpg?alt=media&token=0c98d2c7-6076-4533-b41d-2c0ddb083084"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Grooming
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     In this service we groom your pet and make it look good.
    </p>
  </Card>
  
</div>
<div className="max-w-sm ">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/carousel%2F1.jpg?alt=media&token=259dde77-e20b-4c12-9414-dd4ea9195eac"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Foster
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      We provide a service were you can foster a stray animal and give it a home.
    </p>
  </Card>
  
</div>
        </div>
        </div>

    )
}
export default Services;
