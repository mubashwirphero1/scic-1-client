import React from 'react';
import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={`${styles.banner} flex flex-row gap-3 items-center py-36 px-4`}>
            <div>
                <h1 className={` ${styles.bannerH} font-black lg:text-4xl md:text-2xl sm:text-2xl text-white`}>YOU PROVIDE THE BEST QUALITY PRODUCTS <br /> WHICH ACCOMMODATE WITH YOUR NEEDS</h1>
                <br />
                <p className="lg:text-3xl md:text-2xl sm:text-2xl font-thin text-white">We Make It A Priority To Offer Flexible Services <br /> To Accommodate Your Needs</p>
            </div>
        </div>
    );
};

export default Banner;