import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';


const About = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="mt-10 mb-5 mr-10 ml-10 p-3">
      <div className="title">
        <h2 className="titleText"><span>A</span>bout Us</h2>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:p-5">
        {/* <h2 className="titleText"><span>A</span>bout Us</h2> */}
				<p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus debitis, natus fuga, ullam deleniti eligendi fugiat magni expedita dolor molestiae atque a reprehenderit ex voluptates saepe nostrum! Iure voluptatem itaque quidem laboriosam laudantium, illo dolores eos asperiores reiciendis quis ipsum vitae sed, veniam eveniet officiis aperiam tenetur temporibus incidunt dignissimos repellat velit magni! Alias dolorum corrupti incidunt aperiam iusto, facere quod, modi minima esse cupiditate, laborum recusandae. Eligendi quis, laudantium corrupti rerum eveniet ut deserunt doloremque pariatur officia impedit unde vel rem temporibus numquam. Cumque ratione, nemo blanditiis beatae commodi natus consequatur error placeat dicta eaque dolor impedit accusamus quas totam reiciendis?</p>
        <div className="imgbox">
					<img src={`https://i.ibb.co/N2cjTDQ/img1.jpg`} alt="" />
				</div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;