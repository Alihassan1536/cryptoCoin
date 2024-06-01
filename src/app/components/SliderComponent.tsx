// "use client";
// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from '../../../public/images/image1.svg'
// import img2 from '../../../public/images/image2.svg'
// import img3 from '../../../public/images/image3.svg'
// import img4 from '../../../public/images/image4.svg'
// import img5 from '../../../public/images/image5.svg'
// import img6 from '../../../public/images/image6.svg'
// import Image from "next/image";
//
//
// function CustomPrevArrow(props : any)  {
//     const {className, style, onClick} = props;
//     return (
//         <div
//             className={className}
//             style={{...style, bottom: '0', left: '0', zIndex: '41'}}
//             onClick={onClick}
//         >
//             {/* Your previous arrow icon or custom design */}
//             <span>Previous</span>
//         </div>
//     );
// }
//
// function CustomNextArrow(props : any) {
//     const {className, style, onClick} = props;
//     return (
//         <div
//             className={className}
//             style={{...style, bottom: '0', right: '0', zIndex: '41'}}
//             onClick={onClick}
//         >
//             {/* Your next arrow icon or custom design */}
//             <span>Next</span>
//         </div>
//     );
// }
//
// function SliderComponent() {
//
//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         speed: 500,
//         centerMode: false,
//         prevArrow: <CustomPrevArrow/>,
//         nextArrow: <CustomNextArrow/>,
//         slidesToScroll: 1,
//         arrows: false,
//         slidesToShow: 5,
//         responsive: [
//             {
//                 breakpoint: 1024, // laptop
//                 settings: {
//                     slidesToShow: 4,
//                 },
//             },
//             {
//                 breakpoint: 768, // iPad
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 640, // iPad Pro
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 480, // mobile
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     }
//     return (
//         <div className="block overflow-hidden">
//             <div className="max-w-5xl mx-auto px-2">
//                 <div
//                     className={`py-0`}>
//                     <Slider {...settings}
//                             className="mx-auto flex h-auto mt-5 slider-container-3 lg:py-0 md:py-2 py-4 justify-center lg:max-w-7xl md:max-w-3xl max-w-xl px-3 gap-4 w-full">
//                         <div className="!flex justify-center">
//                             <div className={`py-5`}>
//                                 <div className=" px-10 justify-center">
//                                     <Image src={img1} alt="image1"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="!flex justify-center">
//                             <div
//                                 className={`py-5`}>
//                                 <div className=" px-10 justify-center">
//                                     <Image src={img2} alt="image1"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="!flex justify-center">
//                             <div
//                                 className={`py-5`}>
//                                 <div className=" px-10 justify-center">
//                                     <Image src={img3} alt="image1"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="!flex justify-center">
//                             <div
//                                 className={`py-5`}>
//                                 <div className=" px-10 justify-center">
//                                     <Image src={img4} alt="image1"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="!flex justify-center">
//                             <div
//                                 className={`py-5`}>
//                                 <div className=" px-10 justify-center">
//                                     <Image src={img5} alt="image1"/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="!flex justify-center">
//                             <div
//                                 className={`py-5`}>
//                                 <div className=" px-10 justify-center">
//                                     <Image src={img6} alt="image1"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default SliderComponent;