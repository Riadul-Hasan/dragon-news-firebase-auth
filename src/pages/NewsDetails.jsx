import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    const [news, setNews] = useState({})
    // console.log(data, id, news)

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails)
    }, [data, id])
    return (
        <div>
            <header className='py-10'>
                <Header></Header>
            </header>

            <main className='container mx-auto grid grid-cols-12 gap-4'>
                <section className='col-span-9 '>
                    <h2 className='text-4xl font-bold text-blue-400 py-2'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;