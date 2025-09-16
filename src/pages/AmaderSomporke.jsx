import React from 'react'
import aboutImage from '../images/AboutUSLogo.png'

const AmaderSomporke = () => {
    // mock data for about us section
    const data = [
        {
            title: 'আমরা আপনার স্বপ্নের ভ্রমণের সঙ্গী', description: 'আমরা শুধু একটি ট্র্যাভেল এজেন্সি নই, আমরা আপনার অবিস্মরণীয় অভিজ্ঞতার নির্মাতা। আমাদের অভিজ্ঞ টিম হাজারো মানুষের স্বপ্নের ভ্রমণকে বাস্তবে রূপ দিয়েছে, কারণ আমরা প্রতিটি যাত্রাকে আপনার জীবনের সেরা স্মৃতিতে পরিণত করতে চাই।',
            mission: 'আমাদের লক্ষ্য', missiontext: 'সর্বোচ্চ মানের সেবা, বন্ধুত্বপূর্ণ পরিবেশ এবং সাশ্রয়ী মূল্যে আপনার পছন্দের ভ্রমণ অভিজ্ঞতা নিশ্চিত করা।', vision: 'আমাদের ভিশন', visiontext: 'পৃথিবীর প্রতিটি কোণে ভ্রমণকে সহজ, নিরাপদ এবং আনন্দময় করে তোলা, যাতে প্রতিটি মানুষ তার স্বপ্নের গন্তব্যে পৌঁছাতে পারে।',
            logo: aboutImage,
        },
    ];
    return (

        // set font as sutonnyMJ
        <div className='font-sutonny'>
            {/* aboutus section */}
            <div className='w-screen h-auto flex justify-center items-center text-center'>
                <div>
                    {/* mapping the data */}
                    {data.map((info, index) => ((
                        <div key={index}>
                            <div className='lg:p-10 p-6 flex justify-evenly items-center lg:gap-20 gap-2 lg:pt-20 pt-10'>
                                <div className='lg:w-[600px] w-[350px] lg:space-y-6 p-2 space-y-4'>
                                    {/* title */}
                                    <h1 className='lg:text-5xl text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent'>{info.title}</h1>
                                    {/* description */}
                                    <p className='lg:text-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-950 bg-clip-text text-transparent'>{info.description}</p>
                                </div>
                                {/* logo of about us  */}
                                <div>
                                    <img src={info.logo} alt="" className='lg:w-[600px] w-96  rounded-l-full ' />
                                </div>
                            </div>
                            <div className='lg:p-10 p-3 flex justify-center items-center lg:gap-40 pb-20'>
                                <div className='lg:w-96 lg:space-y-4 space-y-3'>
                                    {/* mission title */}
                                    <h1 className='lg:text-3xl text-xl font-semibold'>{info.mission}</h1>
                                    {/* mission text */}
                                    <p className='text-gray-600 lg:text-xl'>{info.missiontext}</p>
                                </div>
                                <div className='lg:w-96 lg:space-y-4 space-y-3'>
                                    {/* vision title */}
                                    <h1 className='lg:text-3xl text-xl font-semibold'>{info.vision}</h1>
                                    {/* vision text */}
                                    <p className='text-gray-600 lg:text-xl'>{info.visiontext}</p>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default AmaderSomporke