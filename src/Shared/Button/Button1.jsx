import { useState } from "react";


const Button1 = ({normalText="Lets Connect", HoverText="Contact With Us"}) => {
    const [isHoverd, setIsHoverd] = useState(false)
    return (
        <div>
            <button className="font-roboto bg-Primary text-white btn btn-wide   my-8 relative transition-colors before:absolute before:left-0 before:bottom-0 before:z-10 before:h-full before:w-full before:origin-bottom-left before:scale-y-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-100 "
                        
                        onMouseEnter={()=>setIsHoverd(true)}
                        onMouseLeave={()=> setIsHoverd(false)}
                        
                        
                        ><span className="z-50">
                            {isHoverd? normalText : HoverText}
                        </span></button>
        </div>
    );
};

export default Button1;