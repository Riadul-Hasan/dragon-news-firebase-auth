import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news)
    const { title, image_url, details, category_id } = news;
    return (
        <div className='space-y-4'>
            <img className='w-full h-[400px] object-cover rounded-xl' src={image_url} alt="" />
            <h2 className='font-bold py-4'>{title}</h2>

            <p>{details}</p>

            <Link className='btn btn-secondary' to={`/category/${category_id}`}>Back To Category</Link>
        </div>
    );
};

export default NewsDetailsCard;