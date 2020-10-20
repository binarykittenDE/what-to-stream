import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Home = () => {
    return(
        <div className="home">
            <Sidebar title={"Home"} subtitle={"ja home"}/>
            <div>Home</div>
            <Footer />
        </div>
    )
}

export default Home