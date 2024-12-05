import wwa from "../../../assets/wwa.png"
import icon1 from "../../../assets/icon1.svg"
import icon2 from "../../../assets/icon2.svg"
import CountUp from "react-countup";
import Button1 from "../../../Shared/Button/Button1";


const Section_WhoWeAre = () => {

    

    return (

        <div className="max-w-screen-xl mx-auto ">
            <div className="flex justify-center p-4">
                <div className="flex-1 items-center"> <div className="flex justify-center gap-1 md:gap-4">
                    <img src={wwa} alt="" />
                </div></div>
                <div className="flex-1 items-center p-4">
                    <p className="text-Primary font-roboto font-semibold">WHO WE ARE</p>
                    {/* wwa title */}
                    <h1 className="text-slate-800 font-bold font-ubuntu text-4xl my-4 leading-16">We are Offering The Best
                        Real Estate Property For All</h1>
                    {/* Description */}
                    <p className=" font-roboto text-lg my-2 text-black/70">Make a type specimen book. It has survived not only five centuries,

                        but also the leap into electronic typesetting, remaining essentially

                        electronic typesettings pecimen book</p>
                    {/* Counter */}
                    <div className="flex my-8 justify-around ">
                        {/* Counter 1 */}
                        <div className=" flex items-center">
                            <img src={icon1} className="mr-2" alt="" />
                            <div className="flex flex-col items-center ">
                                <h1 className="font-bold text-5xl font-ubuntu"> 
                                <CountUp start={0} end={55} delay={0} duration={2.75}></CountUp>K</h1>
                                <p className="font-roboto ">Satisfied People</p>
                            </div>
                        </div>
                        <div className="divider divider-horizontal divider-success"></div>
                        {/* Counter 2 */}
                        <div>
                            <div className=" flex items-center">
                                <img src={icon2} className="mr-2" alt="" />
                                <div className="flex flex-col items-center ">
                                    <h1 className="font-bold text-5xl font-ubuntu"><CountUp start={0} end={11} duration={2.75} delay={0}></CountUp>K</h1>
                                    <p className="font-roboto ">Verified Property</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Counter End */}
                    <p className=" font-roboto text-lg my-2 text-black/70">Make a type specimen book. It has survived not only five centuries,

                        but also the leap into electronic typesetting, remaining essentially

                        electronic typesettings pecimen book</p>
                        {/* button */}
                        <Button1
                        
                        ></Button1>
                </div>

            </div>
        </div>
    );
};

export default Section_WhoWeAre;