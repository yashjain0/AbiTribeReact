import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import Image1 from "../images/banner/img1.jpg"
import Image2 from "../images/banner/img2.jpg"
import Image3 from "../images/banner/img3.jpg"
import Image4 from "../images/banner/img4.jpg"
import Image5 from "../images/banner/img5.jpg"
import Image6 from "../images/banner/img6.jpg"
import Image7 from "../images/banner/img7.jpg"
import Image8 from "../images/banner/img8.jpg"
import Image9 from "../images/banner/img9.jpg"
import Image10 from "../images/banner/img10.jpg"
import Image11 from "../images/banner/img11.jpg"
import Image12 from "../images/banner/img12.jpg"
import Image13 from "../images/banner/img13.jpg"
import Image14 from "../images/banner/img14.jpg"
import Image15 from "../images/banner/img15.jpg"


const Gallery = () => {
   let images = [
      {
         name: "image1",
         path: Image1
      },
       {
         name: "image2",
         path: Image2
      },
       {
         name: "image3",
         path: Image3
      },
       {
         name: "image4",
         path: Image4
      },
       {
         name: "image5",
         path: Image5
      },
       {
         name: "image6",
         path: Image6
      },
       {
         name: "image7",
         path: Image7
      },
       {
         name: "image8",
         path: Image8
      },
       {
         name: "image9",
         path: Image9
      },
       {
         name: "image10",
         path: Image10
      },
       {
         name: "image11",
         path: Image11
      },
       {
         name: "image12",
         path: Image12
      },
       {
         name: "image13",
         path: Image13
      },
      {
         name: "image14",
         path: Image14
      },
       {
         name: "image15",
         path: Image15
      }
   ]

   const Gallery = () => {
      return images.map(img => 
         <div class="item col-sm-6 col-md-4 mb-3">
            <a href={img.path} class="fancybox" data-fancybox="gallery1">
            <img src={img.path} width="100%" height="100%" alt={img.name}/>
            </a>
         </div>
      )
   }
    return (
        <div id="gallery" class="section-bg">
        
            <div class="section-title aos-init" data-aos="fade-center">
               <h2>Gallery</h2>
               <div className="container">
               <div class="row mt-4">
                  <Gallery />
               </div>
            </div>
            </div>
         </div>
    );
};

export default Gallery