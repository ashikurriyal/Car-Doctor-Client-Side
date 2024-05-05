import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/servicesCollection')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-28">
            <div className="text-center space-y-5">
                <h3 className="text-xl font-bold text-orange-600">Service</h3>
                <h3 className="text-3xl font-bold">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which donot look even slightly believable. </p>
            </div>

            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mt-12 mb-12">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;