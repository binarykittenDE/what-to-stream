import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Impressum = () => {
    return(
        <div className="impressum">
            <Sidebar title={"Impressum"}/>
            <div>Impressum</div>
            <Footer />
        </div>
    )
}

export default Impressum