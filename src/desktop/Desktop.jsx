import React from 'react';
import deskBg from "../../src/image/web.webp"
import bismillah from "../../src/image/bismillah.png"


const Desktop = () => {
    return (
        <div className="d-none d-md-block" style={{backgroundImage:`url(${deskBg})`,height:"100vh",backgroundSize:"cover",width:"100%"}}>
            <div className='d-flex flex-column justify-content-around align-items-center' style={{height:"100%",width:"100%",backgroundColor:`rgba(255,255,255,.3)`}}>
            <img src={bismillah} alt="Bismillah" />
            <h1 className="text-center">Hello World</h1>
            <h1 className="text-center">Hello World</h1>
            </div>
        </div>
    );
};

export default Desktop;