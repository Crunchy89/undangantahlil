import React from 'react';
import deskBg from "../../src/image/web.webp"
import web2 from "../../src/image/web2.webp"
import bismillah from "../../src/image/bismillah.png"
import assalamualaikum from "../../src/image/assalamualikum.png"
import bapak from "../../src/image/bp.png"
import Card from '../components/Card';

const data=[
    {
        icon:"fa-solid fa-calendar-days",
        title:"Ahad",
        content:"06 Maret 2022"
    },
    {
        icon:"fa-solid fa-clock",
        title:"Waktu",
        content:"10:00 - selesai"
    },
    {
        icon:"fa-solid fa-location-dot",
        title:"Alamat",
        content:"Jl.montong Batu 1(Makam Ketak) Desa Muncan Kecamatan Kopang Lombok Tengah"
    },
]
const Desktop = () => {
    return (
        <>
        <div className="d-none d-md-block" style={{backgroundImage:`url(${deskBg})`,height:"100vh",backgroundSize:"cover",width:"100%"}}>
            <div className='d-flex flex-column justify-content-around align-items-center pt-3' style={{height:"100%",width:"100%",backgroundColor:`rgba(255,255,255,.3)`}}>
                <div className='d-flex flex-column align-items-center justify-content-center' width="100%">
                    <img src={bismillah} width="60%" alt="Bismillahirohmanirrohim" />
                    <img src={assalamualaikum} width="50%" alt="assalamualaikum" />
                </div>
            <img src={bapak} alt="Foto bapak" width="25%" />
            <div className='d-flex flex-column align-items-center justify-content-center' width="80%">
                <p align="center">Yth. Bapak/Ibu Saudara Saudari . Melalui Surat Ini Saya Atas Nama BAIQ DEVI ANDIKASARI</p>
            <div className="d-flex justify-content-center">
            <a href='https://www.instagram.com/kumpulan_aksaradev/' rel='noreferrer' target="_blank" className='btn btn-secondary m-1'><i className='fab fa-instagram'></i></a>
            <a href='https://www.facebook.com/baiq.devi.31' target="_blank" rel='noreferrer' className='btn btn-secondary m-1'><i className='fab fa-facebook-f'></i></a>
            </div>
            <p className="text-center p-2">Mengundang Bapak/Ibu Saudara/I Untuk Hadir Dalam Acara 100 hari Alm.Bapak Saya Lalu Manan ,Untuk Turut Ikut Mendoakan Semoga Di Tempat kan Di Sisi yang Terbaik Bersama Orang Orang Beriman Oleh Allah S.W.T. </p>
            </div>
            </div>
            
        </div>

        <div>
        
        </div>
        <div className="d-none d-md-block">
            <div className="d-flex justify-content-around align-items-center flex-column" style={{height:"800px",backgroundImage:`url(${web2})`,backgroundPosition:"center",backgroundSize:"cover"}}>
            {data.map((row,i)=>(
                <Card key={i} icon={row.icon} title={row.title} content={row.content} />
                ))}
            <a href={`https://www.google.com/maps/place/8%C2%B039'46.3%22S+116%C2%B019'30.9%22E/@-8.6628565,116.323055,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xddb482d605180398!8m2!3d-8.6628565!4d116.3252437?hl=en`} target="_blank" rel='noreferrer' className="btn btn-info"><i className="fa-solid fa-location-dot"></i> Cari Alamat</a>
            </div>
        </div>
            </>
    );
};

export default Desktop;