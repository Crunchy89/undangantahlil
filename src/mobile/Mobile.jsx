import React from 'react';
import mobile from "../../src/image/mobilebg.webp"
import bismillah from "../../src/image/bismillah.png"


const Mobile = () => {
    return (
        <div className="d-md-none" style={{backgroundImage:`url(${mobile})`,height:"100vh",backgroundSize:"cover",width:"100%"}}>
            <div className='d-flex flex-column justify-content-around align-items-center' style={{height:"100%",width:"100%",backgroundColor:`rgba(255,255,255,.3)`}}>
            <img src={bismillah} width="60%" alt="Bismillah" />
            <h1 className="text-center">Hello World</h1>
            <h1 className="text-center">Hello World</h1>
            </div>
        </div>
    );
};

export default Mobile;