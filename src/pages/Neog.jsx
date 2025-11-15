import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import banner1 from '../images/demo1.jpg';
import banner2 from '../images/demo2.jpg';
import banner3 from '../images/demo3.jpg';
import banner4 from '../images/demo4.jpg';
import banner5 from '../images/demo5.jpg';

const Neog = () => {
    const [active, setActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModelOpen, setIsModelOpen] = useState(false);

    // Handle modal open for image
    const handelModelOpen = (image) => {
        setSelectedImage(image);
        setActive(true);
    };

    // Handle modal close for image
    const handelModelClose = () => {
        setActive(false);
        setSelectedImage(null);
    };

    // Handle modal for contact
    const openModel = () => {
        setIsModelOpen(true);
    };
    const closeModel = () => {
        setIsModelOpen(false);
    };

    const whatsappNumber = "+8801766957233"; // Replace with your WhatsApp number
    const message = "হ্যালো, আমি আপনার সেবায় আগ্রহী!"; // Replace with your custom message
    const phoneNumber = "+8801766957233"; // Replace with your phone number

    // Phone handler function
    const phoneHandel = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    // WhatsApp handler function
    const encodedMessage = encodeURIComponent(message);
    const whatsappHandel = () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    // Mock data for Neog section
    // const category = [
    //     { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-01.jpg', title: 'বিস্তারিত ১', description: 'এটা হলো বিস্তারিত ১' },
    //     { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-02.jpg', title: 'বিস্তারিত ২', description: 'এটা হলো বিস্তারিত ২' },
    //     { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-03.jpg', title: 'বিস্তারিত ৩', description: 'এটা হলো বিস্তারিত ৩' },
    //     { banner: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-04.jpg', title: 'বিস্তারিত ৪', description: 'এটা হলো বিস্তারিত ৪' }
    // ];
    const category = [
        { banner: banner1, title: 'বিস্তারিত ১', description: 'এটা হলো বিস্তারিত ১' },
        { banner: banner2, title: 'বিস্তারিত ২', description: 'এটা হলো বিস্তারিত ২' },
        { banner: banner3, title: 'বিস্তারিত ৩', description: 'এটা হলো বিস্তারিত ৩' },
        { banner: banner4, title: 'বিস্তারিত ৪', description: 'এটা হলো বিস্তারিত ৪' },
        { banner: banner5, title: 'বিস্তারিত ৫', description: 'এটা হলো বিস্তারিত ৫' },
    ];

    return (
        <div className='w-screen flex justify-center items-center bg-gradient-to-r from-yellow-50 to-orange-200 pt-20 pb-20 font-sutonny'>
            <div>
                {/* Neog section */}
                <div className='pb-10 text-center space-y-4'>
                    {/* Title and description */}
                    <h1 className='lg:text-5xl text-xl text-black font-bold'>আমাদের বিভাগসমূহ</h1>
                    <p className='lg:text-xl text-sm'>আপনার আগ্রহ এবং যোগ্যতা অনুযায়ী বিভিন্ন বিভাগের পদগুলো দেখুন।</p>
                </div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-28 flex flex-col justify-center items-center gap-16'>
                    {/* Mapping the data */}
                    {category.map((cata, index) => (
                        <div key={index}>
                            {/* Banner image */}
                            <img className='border-2 rounded-t-xl border-gray-500 bg-[rgba(0,0,0,0.6)] bg-blend-overlay rounded-4xl mt-15 lg:w-[600px] lg:h-[500px] object-cover' src={cata.banner} alt="" />
                            <div className="w-[600px] p-2 rounded-b-xl bg-[#87CEEB] flex justify-evenly items-center text-black font-bold absolute object-cover">
                                {/* Button for details and contact */}
                                <button onClick={() => handelModelOpen(cata)} className="lg:px-6 lg:py-3 px-3 py-2">বিস্তারিত</button>
                                <div className="pl-12 rotate-90 border border-gray-200 border-opacity-50"></div>
                                <button onClick={openModel} className="lg:p-3 p-2 rounded-md">যোগাযোগ</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for contact */}
                {isModelOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    {/* Modal title */}
                                    <h1 className="text-center font-extrabold lg:text-2xl text-xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">যোগাযোগ করুন আমাদের সাথে</h1>
                                    {/* Modal close button */}
                                    <button className="absolute top-3 right-3 text-orange-700 text-4xl font-bold font-serif" onClick={closeModel}>&times;</button>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center gap-10">
                                {/* Call button */}
                                <button className="lg:px-4 lg:py-3 px-2 py-2 bg-cyan-300 flex justify-between rounded-md items-center lg:gap-4 gap-2" onClick={phoneHandel}>
                                    <span className="text-2xl text-blue-500"><FaPhone /></span>
                                    <h1 className="text-black lg:font-extrabold font-bold">কল করুন</h1>
                                </button>
                                {/* WhatsApp button */}
                                <button className="lg:p-2 p-1 bg-cyan-950 flex justify-between rounded-md items-center gap-2" onClick={whatsappHandel}>
                                    <span className="text-3xl text-[rgb(37,211,102)]"><FaSquareWhatsapp /></span>
                                    <h1 className="text-white lg:font-extrabold font-bold">হোয়াটসঅ্যাপ করুন</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal for selected image */}
                {active && selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg w-full relative lg:ml-10 lg:mr-10 ml-2 mr-2 lg:mt-24 lg:mb-24 overflow-y-auto max-h-[95vh]">
                            <div className="flex justify-between items-center mb-1">
                                <div>
                                    {/* Modal title */}
                                    <h1 className="text-center font-extrabold lg:text-2xl text-xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent pt-2">
                                        {selectedImage.title}
                                    </h1>
                                    {/* Modal close button */}
                                    <button className="absolute top-3 right-3 text-orange-700 text-4xl font-bold font-serif" onClick={handelModelClose}>&times;</button>
                                </div>
                            </div>
                            {/* Show selected image */}
                            <div className="lg:flex lg:justify-between lg:items-center text-center mb-2 lg:-mt-6 lg:gap-10 lg:p-10">
                                <img className="lg:w-[950px] lg:h-[500px] w-full p-2 border border-teal-500 lg:rounded-md" src={selectedImage.banner} alt={selectedImage.title} />
                                <p className="lg:w-[950px] lg:p-[100px] w-full p-2 border border-teal-500 bg-gradient-to-tr from-teal-300 to-cyan-950 text-white text-xl">লোরেম ইপসাম ডলর সিট আমেট কনসেক্টুর adipisicing এলিট। ইমপেডিট আস্পিরিওরেস ফেসারে ইয়াক ওডিট আর্কিটেক্টো ইনভেনটোরে ইওস অপটিও অ্যাপেরিয়াম পারফেরেনডিস প্রোভিডেন্ট নেকেসিটেটিবাস, নুল্লা আইডি ডেবিতিস ভেল ম্যাক্সিমে প্লেসেট কুইস ল্যাবোরাম ইয়ারাম ইট্যাকু অ্যাক্কুসামুস পসিমুস। কোয়ারেট প্রোভিডেন্ট, ভোলপটাতে ইল্লো, রেইসিডিস নিহিল রেপ্রেহেনডারেম নেকু ভেনিয়াম ভলুপট্যাটেস ডোলোরেম এন্ড টেম্পোরিবাস পার্সপিসিয়াতিস নেসকিয়েন্ট এক্সেপ্টুরি!</p>
                            </div>
                            <div className="text-center">
                                <p>{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Neog;
