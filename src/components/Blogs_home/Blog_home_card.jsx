import React, { PureComponent } from 'react'

const BlogHomeCard =()=>{
    return(
        <div className='BlogCardsConatainer w-full flex flex-col justify-center align-center'>
<div className='Blog_card w-9/12 flex justify-center align-center '>
<div>
    <div className="w-full flex justify-center align-center mx-auto px-4">
      <div className='relative m-0 shadow-lg flex bg-white'>
        <div className='flex-no-shrink'>
          <img alt='' className='w-full h-64 block mx-auto' src='https://source.unsplash.com/WLUHO9A_xik/1600x900'/>
        </div>
        <div className='flex-1 card-block relative'>
          <div className="p-6">
            <h4 className='font-medium text-2xl mb-3'>Blog #1</h4>
            <p className='leading-normal'>Magni inventore repellat dignissimos eveniet dolore ex sit illo adipisci accusamus quos.</p>
            <div className="flex justify-center align-center md:order-2 mr-10">
          <button>
            <span>Read More+</span>
          </button>         
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='Blog_card w-9/12 flex justify-center align-center '>
<div>
    <div className="w-full flex justify-center align-center mx-auto px-4">
      <div className='relative m-0 shadow-lg flex bg-white'>

        <div className='flex-1 card-block relative'>
          <div className="p-6">
            <h4 className='font-medium text-2xl mb-3'>Blog #1</h4>
            <p className='leading-normal'>Magni inventore repellat dignissimos eveniet dolore ex sit illo adipisci accusamus quos.</p>
            <div className="flex justify-center align-center md:order-2 mr-10">
          <button>
            <span>Read More+</span>
          </button>         
        </div>
       
        </div>
        
        </div>
        <div className='flex-no-shrink'>
          <img alt='' className='w-full h-64 block mx-auto' src='https://source.unsplash.com/WLUHO9A_xik/1600x900'/>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default BlogHomeCard;