import React from 'react'
import { FaList } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbMapSearch } from "react-icons/tb";
import { MdBarChart } from "react-icons/md";
import { PiNewspaperFill } from "react-icons/pi";
import { FcIdea } from "react-icons/fc";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import '../about/aboutCard.css';

const About_Card = () => {
  return (
    <div className='div-services'>
    <div className='service_Container'>
        <div className='div-box'>
            <div className='icon-div'>
                <FaList className='icon' />
            </div>
            <div>
                <h2 className='title'>
                    Property Listing
                </h2>
                <p className='div-servicesd_par'>
                    We assists property owners in listing their properties for sale or rent on various platforms, ensuring maximum exposure to potential buyers or tenants.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <MdOutlineSupportAgent className='icon' />
            </div>
            <div>
                <h2>
                    Mortgage Finding Support
                </h2>
                <p className='div-servicesd_par'>
                    We help you find suitable mortgage options, navigating the complex process of securing financing for your property.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <HiOutlineSpeakerphone className='icon' />
            </div>
            <div>
                <h2 className='title'>
                    Property Marketing
                </h2>
                <p className='div-servicesd_par'>
                    Our team creates effective marketing strategies to promote properties, including professional photography, virtual tours, and online advertising.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <TbMapSearch className='icon' />
            </div>
            <div>
                <h2 className='title'>
                 Buyer/Tenant Representation
                </h2>
                <p className='div-servicesd_par'>
                We help buyers and tenants find the perfect properties based on their preferences, budget, and requirements, supporting them throughout the search and negotiation process.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <FaPeopleGroup className='icon' />
            </div>
            <div>
                <h2 className='title'>
                    Seller/Landlord Representation
                </h2>
                <p className='div-servicesd_par'>
                    We work with sellers and landlords to accurately price properties, negotiate offers, and manage the sales or rental process.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <MdBarChart className='icon' />
            </div>
            <div>
                <h2 className='title'>
                    Property Valuation
                </h2>
                <p className='div-servicesd_par'>
                    We offer expert property valuation services, determining the market value based on factors such as location, condition, and comparable sales.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <PiNewspaperFill className='icon' />
            </div>
            <div>
                <h2 className='title'>
                    Paperwork and Documentation
                </h2>
                <p className='div-servicesd_par'>
                    We handle the intricate paperwork involved in real estate transactions, ensuring all legal and regulatory requirements are met seamlessly.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <FcIdea className='icon' />
            </div>
            <div>
                <h2 className='title'>
                    Investment Advice
                </h2>
                <p className='div-servicesd_par'>
                    Our expert team offers valuable guidance on real estate investment strategies, identifying potential opportunities tailored to your goals.
                </p>
            </div>
        </div>
        <div className='div-box'>
            <div className='icon-div'>
                <FaRegHandshake  className='icon' />
            </div>
            <div>
                <h2 className='title'>
                    Negotiation
                </h2>
                <p className='div-servicesd_par'>
                    Our team acts as intermediaries during negotiations, ensuring favorable terms for clients, whether you're a buyer, seller, landlord, or tenant.
                </p>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default About_Card
