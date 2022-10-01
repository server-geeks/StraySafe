import React, { PureComponent } from 'react';

const DonateHomeCard =() =>{
    return(
<div className="donate_cards flex justify-center align-center  gap-x-10">

<div className="donate_card ">
<div class="wrapper  antialiased text-gray-900">
<div>
    
    <img src="https://images.unsplash.com/photo-1629345566327-67421778dd9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt=" random imgee" class="w-full object-cover object-center h-96 rounded-lg shadow-md"/>  
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-white  p-6 rounded-lg shadow-lg">
        
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Donate Money</h4>
  <div className="mt-4 flex flex-col justify-center align-center ">
    <span className="text-teal-600 text-md font-semibold">Donate money to help stray animals </span>
    <div className="flex justify-center align-center md:order-2 mr-10">
          <button>
            <span>Donate Now</span>
          </button>         
        </div>
  </div>  
  </div>
 </div>
  
</div>
  </div>
</div>
<div className="donate_card">
<div class="wrapper  antialiased text-gray-900">
<div>
    
    <img src="https://firebasestorage.googleapis.com/v0/b/straycare-e039c.appspot.com/o/stary_food.jpg?alt=media&token=532d4a39-88ca-4b02-8886-644c2a6fb398
" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md h-96 "/>  
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
        
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Donate Food</h4>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">Donate food to feed stray animals</span>
    <div className="flex justify-center align-center md:order-2 mr-10">
          <button>
            <span>Donate Now</span>
          </button>         
        </div>
  </div>  
  </div>
 </div>
  
</div>
  </div>
</div>
</div>
    )
};

export default DonateHomeCard;