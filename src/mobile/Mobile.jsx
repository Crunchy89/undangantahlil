import React from 'react';
import mobile from "../../src/image/mobilebg.webp"
import bismillah from "../../src/image/bismillah.png"
import assalamualaikum from "../../src/image/assalamualikum.png"


const Mobile = () => {
    return (
        <div className="d-md-none" style={{backgroundImage:`url(${mobile})`,height:"100vh",backgroundSize:"cover",width:"100%"}}>
            <div className='d-flex flex-column justify-content-around align-items-center' style={{height:"100%",width:"100%",backgroundColor:`rgba(255,255,255,.3)`}}>
                <div className='d-flex flex-column align-items-center justify-content-center' width="100%">
                    <img src={bismillah} width="60%" alt="Bismillahirohmanirrohim" />
                    <img src={assalamualaikum} width="40%" alt="assalamualaikum" />
                </div>
            <h1 className="text-center">Hello World</h1>
            <h1 className="text-center">Hello World</h1>
            </div>
        </div>
    );
};

export default Mobile;