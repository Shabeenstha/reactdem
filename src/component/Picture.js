import React from 'react'

function Picture(){
  return ( 
    <div>
    <p> Lorem ipsum dolo fdfsdfsdsfsdfsdfls;adkflskdflksjadflksjadflksdfsdfsdfsdfsdffsdfr sit amet, consectetur adipisicing elit. Ex voluptate voluptates ipsam ad! Nihil dignissimos dolor neque natus reprehenderit assumenda maxime
         odio recusandae accusantium aliquam! Ducimus accusamus sit itaque atque?</p>
         <img className='img1' src={process.env.PUBLIC_URL + '/image1.jpg'} alt="My Image" />

         </div>
    );
}
export default Picture;