
import React from 'react'
import heroImg from '../../assets/images/rakaedit.png'
import CountUp from 'react-countup'
import CV from '../../assets/CV_Zulfan.pdf'


const Hero = () => {
    return (
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/* ================= Hero Left ================= */}
                    <div className="w-full md:basis-1/2">
                        <h5 
                        data-aos="fade-right" 
                        data-aos-duration="1500" 
                        className="text-headingColor font-[600] text-[18px]">
                            Hello welcome
                        </h5>
                        <h1 data-aos="fade-up" className="text-headingColor font-[700] text-[1.6rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                            I'm Zulfan Hindharaka Zudhan <br />Web Developer
                        </h1>
                        <div data-aos="fade-up"
                             data-aos-duration="1800" data-aos-delay="200"
                             className="flex items-center gap-6 mt-7"
                             >
                                <a href="#contact">
                                    <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                        <i class="ri-mail-line"></i>Hire Me
                                    </button>
                                </a>
                                <a href={CV} download="CV_Zulfan.pdf" target="_blank" rel="noopener noreferrer" className="text-smallTextColor font-[600] text-[17px] border-b border-solid border-smallTextColor hover:animate-bounce">Download CV
                                <i class="ri-file-download-line"></i>
                                </a>
                        </div>
                        <p 
                        data-aos="fade-left" 
                        data-aos-duration="1500"
                        className="flex gap-2 text-headingColor mt-14 font-[500] text-[18px] leading-7 sm:pl-14 sm:pr-10">
                        <span><i class="ri-command-line"></i></span>
                        I am highly motivated front-end developer with a passion for creating beautiful, clean coded, disability complaint website that are easy to navigate and absorb.
                        </p>

                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[18px] font-[600]">
                                Follow Me
                            </span>
                            <span>
                                <a href="https://github.com/zulfanhz" target="_blank" className="text-smallTextColor text-[30px] font-[600] hover:text-opacity-40">
                                <i class="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.instagram.com/raka_jevieza" target="_blank" className="text-smallTextColor text-[27px] font-[600] hover:text-opacity-40">
                                <i class="ri-instagram-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* ================= Hero Left End ================= */}
                    {/* ================= Hero img ================= */}
                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img src={heroImg} alt="" />
                        </figure>
                    </div>
                    {/* ================= Hero img end ================= */}
                    {/* ================= Hero content right ================= */}
                    <div className="md:basis-1/8 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font[700] text-[32px]">
                                <CountUp start={0} end={6} duration={2} suffix="+"/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Years Experience
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font[700] text-[32px]">
                                <CountUp start={0} end={100} duration={2} suffix="%"/>
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Succes Rate
                            </h4>
                        </div>
                    </div>
                    {/* ================= Hero content right end ================= */}
                </div>
            </div>
        </section>
            );
};

            export default Hero