import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAsc ? 'asc' : 'dasc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [isAsc]);


    return (
        <div>
            <div className='text-center mb-4 w-3/4 mx-auto'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-ghost' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'dasc' : 'asc'}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;