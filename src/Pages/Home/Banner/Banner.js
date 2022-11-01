import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import './Banner.css';
import BannerItem from './BannerItem';

const Banner = () => {

    const sliderData = [
        {
            img: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            img: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            img: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            img: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            img: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            img: img6,
            prev: 5,
            id: 6,
            next: 1
        },
    ];

    return (
        <div className="carousel w-full">
            {
                sliderData.map(slider => <BannerItem
                    key={slider.id}
                    slider={slider}
                ></BannerItem>)
            }


            {/* <BannerItem image={img1}></BannerItem>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img6} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}


        </div>
    );
};

export default Banner;