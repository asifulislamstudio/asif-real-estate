import React, { useEffect, useState } from 'react';

import Agents from './Agents';

const Expertiese = () => {
    const [AgentData, setAgentData] = useState([])
    useEffect(()=>{
         fetch('Agents.json')
         .then(res => res.json())
         .then(data => setAgentData(data))

    },[])

    return (
        <div className=''>
            <div className='text-center'>
                <p className="text-Primary font-roboto  uppercase">Expertise Is Here</p>
            <h1 className='text-4xl font-bold'>Our Exclusive Agents</h1>
            </div>
            {/* Main part Card */}
             <div className='grid grid-cols-4 gap-2 py-8'> 
                 {
                    AgentData.map(Agent => <Agents key={Agent.id} Agent={Agent}></Agents>)
                 }
             </div>
        </div>
    );
};

export default Expertiese;