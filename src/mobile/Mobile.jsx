import React from 'react';
import mobile from "../../src/image/mobilebg.webp"
import bismillah from "../../src/image/bismillah.png"
import assalamualaikum from "../../src/image/assalamualikum.png"
import bapak from "../../src/image/bp.png"


const Mobile = () => {
    return (
        <div className="d-md-none" style={{backgroundImage:`url(${mobile})`,height:"920px",backgroundSize:"cover",width:"100%"}}>
            <div className='d-flex flex-column justify-content-around align-items-center' style={{height:"100%",width:"100%",backgroundColor:`rgba(255,255,255,.3)`}}>
                <div className='d-flex flex-column align-items-center justify-content-center' width="100%">
                    <img src={bismillah} width="80%" alt="Bismillahirohmanirrohim" />
                    <img src={assalamualaikum} width="60%" alt="assalamualaikum" />
                </div>
            <img src={bapak} alt="Foto bapak" width="50%" />
            <div className='d-flex flex-column align-items-center justify-content-center' width="80%">
                <p align="center">Yth. Bapak/Ibu Saudara Saudari . Melalui Surat Ini Saya Atas Nama BAIQ DEVI ANDIKASARI</p>
            <div className="d-flex justify-content-center">
            <a href='https://www.instagram.com/kumpulan_aksaradev/' rel='noreferrer' target="_blank" className='btn btn-secondary m-1'><i className='fab fa-instagram'></i></a>
            <a href='https://www.facebook.com/baiq.devi.31' target="_blank" rel='noreferrer' className='btn btn-secondary m-1'><i className='fab fa-facebook-f'></i></a>
            </div>
            <p className="text-center p-2">Mengundang Bapak/Ibu Saudara/I Untuk Hadir Dalam Acara 100 hari Alm.Bapak Saya Lalu Manan ,Untuk Turut Ikut Mendoakan Semoga Di Tempat kan Di Sisi yang Terbaik Bersama Orang Orang Beriman Oleh Allah S.W.T. </p>
            </div>
            <h1 className="text-center">Hello World</h1>
            <h1 className="text-center">Hello World</h1>
            </div>
        </div>
    );
};

export default Mobile;