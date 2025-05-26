import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaYoutube, FaInstagram, FaGlobe, FaEnvelope } from 'react-icons/fa6';

const HomeCont1 = () => {
  const marqueeRef1 = useRef(null);
  const containerRef1 = useRef(null);

  const marqueeRef2 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    if (!marqueeRef1.current || !containerRef1.current) return;

    const marquee = marqueeRef1.current;
    let offset = 0;
    let animationFrameId;

    const move = () => {
      offset -= 5;
      marquee.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
      }
      animationFrameId = requestAnimationFrame(move);
    };

    const start = () => {
      if (!animationFrameId) move();
    };

    const stop = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    containerRef1.current.addEventListener('mouseenter', stop);
    containerRef1.current.addEventListener('mouseleave', start);
    start();

    return () => {
      containerRef1.current?.removeEventListener('mouseenter', stop);
      containerRef1.current?.removeEventListener('mouseleave', start);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (!marqueeRef2.current || !containerRef2.current) return;

    const marquee = marqueeRef2.current;
    let offset = 0;
    let animationFrameId;

    const move = () => {
      offset -= 5;
      marquee.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
      }
      animationFrameId = requestAnimationFrame(move);
    };

    const start = () => {
      if (!animationFrameId) move();
    };

    const stop = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    };

    containerRef2.current.addEventListener('mouseenter', stop);
    containerRef2.current.addEventListener('mouseleave', start);
    start();

    return () => {
      containerRef2.current?.removeEventListener('mouseenter', stop);
      containerRef2.current?.removeEventListener('mouseleave', start);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="py-12 px-4 sm:px-8 md:px-12 overflow-hidden relative bg-black">
      {/* Headings */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        Join our Community on Twitter and let's guide you on your next move
      </h2>
      <p className="text-center text-base sm:text-lg text-white max-w-xl mx-auto mb-6">
        You can't win alone you need team and people that can guide you
      </p>

      {/* CTA Buttons */}
      <div className="relative w-full flex justify-center items-center py-6 sm:py-8">
        <div className="absolute h-px w-full text-white z-0" style={{ top: '50%' }} />
        <div className="flex flex-col sm:flex-row gap-4 z-10 px-4 ">
          <Link to="">
            <button className="bg-black border border-white flex items-center gap-2  text-white px-6 py-2 rounded-full hover:bg-[#0e0c0cf1] transition w-full sm:w-auto">
              <FaXTwitter />
              <p>Twitter</p>
            </button>
          </Link>
          <Link to="">
            <button className="bg-white border-1 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300 w-full sm:w-auto">
              Join Now
            </button>
          </Link>
        </div>
      </div>

      {/* First Marquee Section */}
      <div
        ref={containerRef1}
        className="mt-10 md:mt-20 relative overflow-hidden w-full h-[60px] sm:h-[80px] md:h-[100px] bg-[#121212] flex items-center"
      >
        <div
          ref={marqueeRef1}
          className="flex items-center gap-8 text-white text-lg sm:text-xl md:text-3xl font-semibold whitespace-nowrap px-6 z-10"
          style={{ willChange: 'transform' }}
        >
          {Array.from({ length: 6 }).map((_, idx) =>
            [
              'Next Move Only',
              'NMO',
              'Next Move Only',
              'NMO',
            ].map((text, i) => (
              <React.Fragment key={`${idx}-${i}`}>
                <span>{text}</span>
                {i !== 4 && (
                  <span className="text-white text-2xl sm:text-4xl mx-4 sm:mx-6">•</span>
                )}
              </React.Fragment>
            ))
          )}
        </div>

        {/* Optional gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-60 z-20" />
      </div>

      {/* Heading 2 */}
      <div className='mt-20 md:mt-32 max-w-3xl'>
			<div>
				<h2 className=" text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
					Explore our live streams 
				</h2>
				<p className="text-base sm:text-lg text-white max-w-xl mb-6">
					Subscribe to our youtube channel
				</p>
			</div>

        {/* CTA Buttons */}
        	<div className="relative w-full flex py-6 sm:py-8">
				<div className="flex gap-4 z-10 ">
					<Link to="">
						<button className="bg-black border border-white flex items-center gap-2  text-white px-6 py-2 rounded-full hover:bg-[#131111f1] transition w-full sm:w-auto">
							<FaYoutube />
							<p>Youtube</p>
						</button>
					</Link>
					<Link to="">
						<button className="bg-white border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300 w-full sm:w-auto">
							Subscribe
						</button>
					</Link>
          	</div>
        	</div>
      </div>

      {/* Heading 3 */}
      <div className="mt-20 flex justify-end">
        <div className="max-w-4xl w-full md:text-right">
				<div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:5xl font-bold text-white mb-4">
						Visit NMO Insta Page and Get more updates on exclusive offer
					</h2>
					<p className="text-base sm:text-lg text-white mb-6">
						You can't win alone, you need a team and people who can guide you.
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="relative w-full flex py-6 sm:py-8 md:justify-end ">
					<div className="flex gap-4 z-10 ">
						<Link to="">
							<button className="bg-black border border-white flex items-center gap-2  text-white px-6 py-2 rounded-full hover:bg-[#131111f1] transition w-full sm:w-auto">
								<FaInstagram /> 
								<p>Instagram</p>
							</button>
						</Link>
						<Link to="">
							<button className="bg-white border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white  hover:border hover:border-white transition-all duration-300 w-full sm:w-auto">
								Follow
							</button>
						</Link>
					</div>
				</div>	
     		</div>
   	</div>

		
      {/* Second Marquee Section */}
      <div
        ref={containerRef2}
        className="mt-10 md:mt-20 relative overflow-hidden w-full h-[60px] sm:h-[80px] md:h-[100px] bg-[#121212] flex items-center"
      >
        <div
          ref={marqueeRef2}
          className="flex items-center gap-8 text-white text-lg sm:text-xl md:text-3xl font-semibold whitespace-nowrap px-6 z-10"
          style={{ willChange: 'transform' }}
        >
          {Array.from({ length: 6 }).map((_, idx) =>
            [
              'Next Move Only',
              'NMO',
              'Next Move Only',
              'NMO'
            ].map((text, i) => (
              <React.Fragment key={`${idx}-${i}`}>
                <span>{text}</span>
                {i !== 4 && (
                  <span className="text-white text-2xl sm:text-4xl mx-4 sm:mx-6">•</span>
                )}
              </React.Fragment>
            ))
          )}
        </div>

        {/* Optional gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-60 z-20" />
      </div>

		{/* Heading 2 */}
      <div className='mt-20 md:mt-32 max-w-3xl'>
			<div>
				<h2 className=" text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
					Subscribe to our News Letter 
				</h2>
				<p className="text-base sm:text-lg text-white max-w-xl mb-6">
					Have access to our broadcast emails to know your next move
				</p>
			</div>

        {/* CTA Buttons */}
        	<div className="relative w-full flex py-6 sm:py-8">
				<div className="flex gap-4 z-10 ">
					<Link to="">
						<button className="bg-black border border-white flex items-center gap-2  text-white px-6 py-2 rounded-full hover:bg-[#131111f1] transition w-full sm:w-auto">
							<FaEnvelope />
							<p>Youtube</p>
						</button>
					</Link>
					<Link to="">
						<button className="bg-white border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white  hover:border hover:border-white transition-all duration-300 w-full sm:w-auto">
							Subscribe
						</button>
					</Link>
          	</div>
        	</div>
      </div>

      {/* Heading 3 */}
      <div className="mt-20 flex justify-end">
        <div className="max-w-4xl w-full md:text-right">
				<div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:5xl font-bold text-white mb-4">
						Connect with Next Move Only on Rumble
					</h2>
					<p className="text-base sm:text-lg text-white mb-6">
						You can't win alone — you need a team and people who can guide you.
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="relative w-full flex py-6 sm:py-8 md:justify-end ">
					<div className="flex gap-4 z-10 ">
						<Link to="">
							<button className="bg-black border border-white flex items-center gap-2  text-white px-6 py-2 rounded-full hover:bg-[#131111f1] transition w-full sm:w-auto">
								<FaGlobe />
								<p>Rumble</p>
							</button>
						</Link>
						<Link to="">
							<button className="bg-white border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black  hover:border hover:border-white hover:text-white transition-all duration-300 w-full sm:w-auto">
								Follow
							</button>
						</Link>
					</div>
				</div>	
     		</div>
   	</div>
   </div>
  );
};

export default HomeCont1;
