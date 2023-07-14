import React from 'react'
import htmlimg from '../../assets/images/html5.png'
import cssimg from '../../assets/images/css.png'
import jsimg from '../../assets/images/js.png'
import reactimg from '../../assets/images/react.png'
import tlimg from '../../assets/images/tailwind.png'
import tsimg from '../../assets/images/ts.png'
import gitimg from '../../assets/images/github.png'

const Services = () => {
  return (
    <section id="services">
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                    What I learned
                </h2>
                <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[19px] leading-[2]">
                On the way, I learned new knowledge, especially in the front end world. I was already proficient in a number of things needed to create websites with the latest technology
                </p>
            </div>

            <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* ===================== vertical line through the middle ======================== */}
                        <div className="hidden absolute w-1 sm:block bg-black h-full left-1/2 transform -translate-x-1/2"></div>

                        {/* ====================== left card ========================== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1000'className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                HTML 5
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">Writing Semantic HTML, Forms and validations, Conventions and Best Practices, Accessibility, SEO Basics</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={htmlimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* ======================= Right card ========================= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1200'className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                CSS 3
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">Positioning, Display, Box Model, CSS Grid, Flex Box, Responsive design and Media Queries</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={cssimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* ====================== left card ========================== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1000'className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                JavaScript
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">Syntax and Basic Constructs, Learn DOM Manipulation, Learn Fetch API, ES6+ and modular javascript</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={jsimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* ======================= Right card ========================= */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1200'className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                React JS
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">structure JSX elements (and how it differs from plain HTML)structure JSX elements (and how it differs from plain HTML),  render (show) JSX elements and how to show or hide elements based on certain conditions,  use event data in React and handle events from onClick, onChange, and onSubmit events (i.e. events from buttons, inputs, and forms), etc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={reactimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* ====================== left card ========================== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1000'className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                Tailwind
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7"> create custom classes, how to extend the default classes, and how to customize the colors and other settings to fit design.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={tlimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                         {/* ======================= Right card ========================= */}
                         <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos='fade-left' data-aos-duration='1200'className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                Typescript
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">allowing developers to define the types of variables and function arguments, TypeScript makes it easier to catch errors </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={tsimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                         {/* ====================== left card ========================== */}
                         <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1000'className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                                                Github
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7"> Easy Project Management, Increased Safety With Packages, Effective Team Management, Increased Code Safety, Easy Code Hosting</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={gitimg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services