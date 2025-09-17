import React from 'react'
import bg from '../images/Hero_Bg_image.png' // background image for hero section

const Heros = () => {
  // mock data for hero section
  const details = [
    {
      text: "১ লক্ষ+ সফল বিদেশ যাত্রা", logos: ["https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-1.png", "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-2.png",
        "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-3.png", "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-4.png"
        , "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-5.png", "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-11.png"
      ]
    },
  ];
  return (
    <div className='lg:w-screen w-auto bg-gradient-to-r from-yellow-50 to-orange-200 font-sutonny'>
      {/* hero section with background image */}
      <div className="lg:w-screen lg:h-screen w-auto h-auto bg-cover bg-center bg-no-repeat bg-[rgba(0,0,0,0.6)] bg-blend-overlay flex justify-center items-center -mt-4"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className='text-white lg:space-y-6 p-6 lg:pb-0 pb-24 lg:mr-[500px]'>
          {/* title , description and button */}
          <h1 className='lg:p-4 p-2 lg:text-5xl text-2xl font-extrabold lg:space-y-6 space-y-3'><p>ভ্রমণ আর নয় স্বপ্ন</p><p> এবার বাস্তবতা</p></h1>
          <p className='lg:p-4 p-2 text-yellow-100 font-semibold lg:text-lg text-sm'>আমরা শুধু ট্র্যাভেল এজেন্সি নই, আমরা আপনার ভ্রমণের সঙ্গী। <br /> আমাদের লক্ষ্য হলো আপনাকে একটি নিরবচ্ছিন্ন এবং স্মরণীয় অভিজ্ঞতা দেওয়া। <br /> আপনি কোথায় যেতে চান, তা বলুন আর বাকিটা আমাদের উপর ছেড়ে দিন।</p>
          <button className='lg:p-3 p-2 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-md text-white lg:text-xl text-sm font-extrabold'>বিস্তারিত দেখুন</button>
        </div>


      </div>
      <div className='lg:w-[1000px] lg:h-[250px] bg-white rounded-md flex justify-center items-center text-center lg:pt-20 pt-5 lg:pb-20 pb-5 lg:-mt-28 -mt-20 ml-10 lg:mr-0 mr-10 lg:ml-[320px]'>
        {/* mapping the data */}
        <div>{details.map((detail, index) => (
          <ul className='' key={index}>
            {/* title and logos */}
            <h1 className='lg:text-4xl lg:font-extrabold text-xl font-bold text-black lg:mb-6 mb-2'>{detail.text}</h1>
            <div className='lg:flex grid grid-cols-3 justify-center items-center'>
              {/* mapping the logos */}
              {detail.logos.map((logo, idx) => (
                <li className='' key={idx}>
                  {/* logo setup */}
                  <img className='lg:w-36 lg:h-16 w-24 h-12 lg:m-4' src={logo} alt="" /></li>
              ))}
            </div>
          </ul>
        ))}</div>
      </div>
    </div>
  )
}

export default Heros