    import React from "react";
    import {
    VerticalTimeline,
    VerticalTimelineElement,
    } from "react-vertical-timeline-component";
    import "react-vertical-timeline-component/style.min.css";
    import BSPI from "../../assets/Educational Logo/BSPI.png";
    import IJBHS from "../../assets/Educational Logo/IJBHS.jpeg";
    // import Primary_School from "../../assets/Educational Logo/KSMACA.png";

    const Education = () => {
    return (
        <div id="education" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
           
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span className="text-slate-900 dark:text-white">Educational </span>
                    <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
                    Qualification
                    </span>
                </h2>

            {/* Gradient Underline */}
            <div className="flex justify-center ">
                <span className="h-1 w-32 md:w-40 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 animate-pulse"></span>
            </div>

            {/* Optional Subtext */}
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm md:text-base">
                Here’s a summary of my academic journey and milestones.
            </p>
            </div>


            
        <VerticalTimeline>
            {/* Educational Item 1 */}
            <VerticalTimelineElement
            date="2024 - 2027"
            contentStyle={{ background: "#F3E8FF", color: "#6A0DAD" }}
            contentArrowStyle={{ borderRight: "7px solid #6A0DAD" }}
            iconStyle={{ background: "#6A0DAD", color: "#fff" }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                <img
                    src="https://img.icons8.com/?size=100&id=wogrNmTvt9qn&format=png"
                    alt="Bachelor Icon"
                    className="w-16 h-16 object-contain"
                />
                </div>
            }
            >
            <div className="flex items-center gap-2 mb-2">
                <img src={BSPI} alt="BSPI Logo" className="w-16 h-16 object-contain" />
                <h3 className="text-[#6A0DAD] text-[20px] font-bold">Diploma in Computer Science</h3>
            </div>
            <p className="text-[#4B0082] text-[16px] font-semibold mb-4">
                <span className="font-bold text-xl">Institute:</span> Bangladesh Sweden Polytechnic Institute
            </p>
            <ul className="list-disc ml-5 space-y-2">
                <li className="text-[#4B0082] text-[14px]">
                Diploma in Computer Science and Technology<br />
                Completed in 2027-<span className="underline font-bold">(runnig)</span> with CGPA: ......
                </li>
            </ul>
            </VerticalTimelineElement>

            {/* Educational Item 2 */}
            <VerticalTimelineElement
            date="2018 - 2023"
            contentStyle={{ background: "#E8EAF6", color: "#3F51B5" }}
            contentArrowStyle={{ borderRight: "7px solid #3F51B5" }}
            iconStyle={{ background: "#3F51B5", color: "#fff" }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                <img
                    src="https://img.icons8.com/?size=100&id=81348&format=png"
                    alt="HSC Icon"
                    className="w-16 h-16 object-contain"
                />
                </div>
            }
            >
         
            {/*  */}
             <div className="flex items-center gap-2 mb-2">
                <img src={IJBHS} alt="IJBHS Logo" className="w-16 h-16 object-contain" />
                <h3 className="text-[#3F51B5] text-[20px] font-bold"> Secondary Secondary Certificate-[SSC]  </h3>
            </div>
            <p className="text-[#303F9F] text-[16px] font-semibold mb-4">
                <span className="font-bold text-xl">School:</span> Illishia Jamila Begum Hish School
            </p>
            <ul className="list-disc ml-5 space-y-2 ">
                <li className="text-[#303F9F] text-[14px] mt-2">
                SSC in Science  
                </li>
                <li className="text-[#01579B] text-[14px]">
                GPA: 4.83 / 5.00
                </li>
                <li className="text-[#01579B] text-[14px]">
                Completed in 2023
                </li>
            </ul>
            </VerticalTimelineElement>

            
        </VerticalTimeline>


        </div>
    );
    };

    export default Education;