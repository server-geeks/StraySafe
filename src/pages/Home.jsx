import React from 'react';
import Card_services from '../components/Services_home/Card_service';
import Crousel from '../components/Crousel/Crousel';
import DonateHome from '../components/Donations_home/Donate_home';
import BlogHome from '../components/Blogs_home/Blog_home';
import Contact from '../components/Contact/Contact';
const Home =() =>{
    return(
        <div className="flex-col">
            <Crousel />
            <Card_services/>
            <DonateHome />
            <BlogHome />
            <Contact /> 
            
        </div>
    )
}
export default Home;