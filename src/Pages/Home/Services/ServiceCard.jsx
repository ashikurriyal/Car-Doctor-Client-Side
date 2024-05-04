import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {

    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="px-10 py-4 flex flex-col">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex items-center justify-between">
                    <p className="text-xl text-orange-600 font-bold">${price}</p>
                    <FaArrowRight className="text-orange-600" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.node
}