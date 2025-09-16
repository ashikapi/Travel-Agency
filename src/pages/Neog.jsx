import { use, useState } from "react";
import { NavLink } from "react-router"
import { FaPhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Neog = () => {

    // use state for modal
    const [isModelOpen, setIsModelOpen] = useState(false);

    // function for model open
    const openModel = () => {
        setIsModelOpen(true);
    };
    // function for model open
    const closeModel = () => {
        setIsModelOpen(false);
    };

    const whatsappNumber = "+8801766957233"; // Replace with your WhatsApp number
    const message = "হ্যালো, আমি আপনার সেবায় আগ্রহী!"; // Replace with your custom message
    const phoneNumber = "+8801766957233"; // Replace with your phone number

    // phone handeler function 
    const phoneHandel = () => {
        window.location.href = `tel:${phoneNumber}`;
    }

    // whatsapp handeler function
    const encodedMessage = encodeURIComponent(message);
    const whatsappHandel = () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    // mock data for neog section 
    const catagory = [
        { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-01.jpg', name: '', text: '' },
        { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-02.jpg', name: '', text: '' },
        { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-03.jpg', name: '', text: '' },
        { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-04.jpg', name: '', text: '' }
    ];

    return (
        <div className='w-screen flex justify-center items-center bg-gradient-to-r from-yellow-50 to-orange-200 pt-20 pb-20 font-sutonny'>
            <div>
                {/* neog section */}
                <div className='pb-10 text-center space-y-4'>
                    {/* title and description */}
                    <h1 className='lg:text-5xl text-xl text-black font-bold'>আমাদের বিভাগসমূহ</h1>
                    <p className='lg:text-xl text-sm'>আপনার আগ্রহ এবং যোগ্যতা অনুযায়ী বিভিন্ন বিভাগের পদগুলো দেখুন।</p>
                </div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-20 flex flex-col justify-center items-center gap-16'>
                    {/* mapping the data */}
                    {catagory.map((cata, index) => (
                        <div key={index}>
                            {/* banner image */}
                            <img className='border-2 border-gray-500 rounded-4xl mt-15' src={cata.banner} alt="" />
                            <div className="lg:w-96 w-80 p-6 bg-white flex justify-evenly items-center text-white font-bold lg:ml-24 ml-10 -mt-10 rounded-tl-full rounded-br-full absolute">
                                {/* button for details and contact */}
                                <button className="lg:px-6 lg:py-3 px-3 py-2 bg-cyan-950 rounded-md">বিস্তারিত</button>
                                <button onClick={openModel} className="lg:p-3 p-2 bg-cyan-500 rounded-md">যোগাযোগ</button>
                            </div>

                        </div>

                    ))}
                </div>


                {/* modal for contact */}
                {isModelOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    {/* modal title */}
                                    <h1 className="text-center font-extrabold lg:text-2xl text-xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">যোগাযোগ করুন আমাদের সাথে</h1>
                                    {/* modal close button */}
                                    <button className="absolute top-3 right-3 text-gray-500 text-2xl font-bold font-serif" onClick={closeModel}>&times;</button>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center gap-10">
                                {/* call button */}
                                <button className="lg:px-4 lg:py-3 px-2 py-2 bg-cyan-300 flex justify-between rounded-md items-center lg:gap-4 gap-2" onClick={phoneHandel}><span className="text-2xl text-blue-500"><FaPhone /></span><h1 className="text-black lg:font-extrabold font-bold">কল করুন</h1></button>
                                {/* whatsapp button */}
                                <button className="lg:p-2 p-1 bg-cyan-950 flex justify-between rounded-md items-center gap-2" onClick={whatsappHandel}><span className="text-3xl text-[rgb(37,211,102)]"><FaSquareWhatsapp /></span><h1 className="text-white lg:font-extrabold font-bold">হোয়াটসঅ্যাপ করুন</h1></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Neog