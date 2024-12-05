import { useState } from "react";
import location1 from "../../../assets/location-1.png";
import location2 from "../../../assets/location-2.png";
import location3 from "../../../assets/location-3.png";
import location4 from "../../../assets/location-4.png";
import location5 from "../../../assets/location-5.png";

const Section_AreaProperty = () => {
    const [mouseHover, setMouseHover] = useState(false)
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 p-12">


            <div className="relative"><img width={400} height={300} className="h-[300px] w-full rounded-lg bg-gray-600 object-cover" src={location1} />

            </div>

            <img width={400} height={300} className="h-[300px] w-full rounded-lg bg-gray-600 object-cover" src={location2} />

            <img width={400} height={300} className="h-[300px] w-full rounded-lg bg-gray-600 object-cover" src={location3} />

            <img width={400} height={300} className="h-[300px] w-full rounded-lg bg-gray-600 object-cover" src={location4} />


            <img width={400} height={300} className="h-[300px] col-span-2 w-full rounded-lg bg-gray-600 object-cover" src={location5} />

           <div >
           </div>

        </div>
    );
};

export default Section_AreaProperty;