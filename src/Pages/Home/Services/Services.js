import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'dasc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [isAsc, search]);

    // handleSearch
    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };


    return (
        <div>
            <div className='text-center mb-4 w-3/4 mx-auto'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <input ref={searchRef} className='input input-bordered input-sm mr-2' type="text" /><button onClick={handleSearch} className='hover:text-red-600'>Search</button>
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