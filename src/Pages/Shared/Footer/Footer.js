import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='py-6 px-4 bg-gray-800 -bottom-11 relative'>
            <p className="md:text-lg sm:text-base text-center text-gray-100 text-center">&copy; 2021 স্বপ্ন রঙ by তানজিনা All Rights Reserved | Developed by <Link to="" className='hover:underline'>MSS Developer</Link> Team</p>
        </div>
    );
};

export default Footer;