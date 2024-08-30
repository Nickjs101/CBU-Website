import React from 'react';
import depofagri from '../assets/Clients/Gov/depofagri.jpg'
import dswd from '../assets/Clients/Gov/dswd.png'

import dauagri from '../assets/Clients/Hardware/dauagri.jpg'
import flowriteenterprise from '../assets/Clients/Hardware/flowriteenterprise.png'
import inanama from '../assets/Clients/Hardware/inanama.jpg'
import motionhardware from '../assets/Clients/Hardware/motionhardware.png'
import nasajetmaticcenter from '../assets/Clients/Hardware/nasajetmaticcenter.jpg'
import ncrconstructionsupply from '../assets/Clients/Hardware/ncrconstructionsupply.jpg'
import newagoo from '../assets/Clients/Hardware/newagoo.jpg'
import smagrimac from '../assets/Clients/Hardware/smagrimac.jpg'
import superlakastrading from '../assets/Clients/Hardware/superlakastrading.jpg'
import talico from '../assets/Clients/Hardware/talico.jpg'
import twsteel from '../assets/Clients/Hardware/twsteel.jpg'
import viganfortune from '../assets/Clients/Hardware/viganfortune.png'

import palmacabanas from '../assets/Clients/Resort/palmcabanas.jpg'
import poracayresort from '../assets/Clients/Resort/poracayresort.jpg'
import villamartresort from '../assets/Clients/Resort/villamartresort.jpg'
import wildorchid from '../assets/Clients/Resort/wildorchid.jpg'

import deehwaliong from '../assets/Clients/School/deewhaliong.png'
import dramandogarciamedcenter from '../assets/Clients/School/dramandogarciamedcenter.jpg'
import obmontessoricenter from '../assets/Clients/School/obmontessoricenter.jpg'
import stcatherine from '../assets/Clients/School/stcatherine.jpg'


  const HardwareClients = [
    { img: dauagri, name: 'Dau Agri Industrial Sales' },
    { img: flowriteenterprise, name: 'Flow Rite Enterprise' },
    { img: inanama, name: 'Inanama Realty Development Incorporated' },
    { img: motionhardware, name: 'Motion Hardware' },
    { img: nasajetmaticcenter, name: 'Nasa Jetmatic Center & General Services' },
    { img: newagoo, name: 'New Agoo' },
    { img: ncrconstructionsupply, name: 'NCR Construction Supply' },
    { img: smagrimac, name: 'SM Agri-Mac' },
    { img: superlakastrading, name: 'Super Lakas Trading' },
    { img: talico, name: 'Talico' },
    { img: twsteel, name: 'TW Steel' },
    { img: viganfortune, name: 'Vigan Fortune Lumber & Hardware' },
  ];
  const Government = [
    { img: depofagri, name: 'Department of Agriculture' },
    { img: dswd, name: 'DSWD' },
  ];

  const Resort = [
    { img: palmacabanas, name: 'Palm Cabanas' },
    { img: poracayresort, name: 'Poracay Resort' },
    { img: villamartresort, name: 'Villa Mart Resort' },
    { img: wildorchid, name: 'Wild Orchid Resort' },
  ];

  const School = [
    { img: deehwaliong, name: 'Dee Hwa Liong College Foundation' },
    { img: obmontessoricenter, name: 'O.B. Montessori Center' },
    { img: dramandogarciamedcenter, name: 'Dr. Amando L Garcia Medical Center Inc.' },
    { img: stcatherine, name: 'St. Catherine of Alexandria Foundation and Medical Center' },
  ];

const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="article-h font-bold mb-4 text-center md:text-left">Our Clients</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 bg-gray-800 pl-4 text-white">Hardware & Construction Supply</h3>
            <div className='bg-transparent text-gray-900 max-w-[1200px] grid grid-cols-3 place-items-center md:flex md:flex-wrap md:items-center relative z-10'>
              {
                HardwareClients.map((hwclient) => (
                  <div key={hwclient.name} className='flex flex-col items-center m-4 sm:my-0 w-[70px] md:w-[100px]'>
                    <div className='w-full h-[100px] flex items-center justify-center'>
                      <img src={hwclient.img} alt={hwclient.name} className='w-full' />
                    </div>
                    <p className='mt-2 text-xs text-gray-400 font-medium font-sans text-center'>{hwclient.name}</p>
                  </div>
                ))
              }
            </div>
            
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 bg-blue-800 pl-4 text-white">Villas & Resorts</h3>
            <div className='bg-transparent text-gray-900 max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:flex-wrap md:items-center relative z-10'>
            {
              Resort.map((resortclient) => (
                <div key={resortclient.name} className='flex flex-col items-center m-4 sm:my-0 w-[70px] md:w-[100px]'>
                  <div className='w-full h-[100px] flex items-center justify-center'>
                    <img src={resortclient.img} alt={resortclient.name} className='max-h-full' />
                  </div>
                  <p className='mt-2 text-xs text-gray-400 font-medium font-sans text-center'>{resortclient.name}</p>
                </div>
              ))
            }
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 bg-red-800 pl-4 text-white">Government Facilities</h3>
            <div className='bg-transparent text-gray-900 max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:flex-wrap md:items-center relative z-10'>
              {
                Government.map((govclient) => (
                  <div key={govclient.name} className='flex flex-col items-center m-4 sm:my-0 w-[70px] md:w-[100px]'>
                    <div className='w-full h-[100px] flex items-center justify-center'>
                      <img src={govclient.img} alt={govclient.name} className='w-full' />
                    </div>
                    <p className='mt-2 text-xs text-gray-400 font-medium font-sans text-center'>{govclient.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 bg-green-800 pl-4 text-white">Medical & Schools</h3>
            <div className='bg-transparent text-gray-900 max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:flex-wrap md:items-center relative z-10'>
              {
                School.map((schoolclient) => (
                  <div key={schoolclient.name} className='flex flex-col items-center m-4 sm:my-0 w-[70px] md:w-[100px]'>
                    <div className='w-full h-[100px] flex items-center justify-center'>
                      <img src={schoolclient.img} alt={schoolclient.name} className='w-full' />
                    </div>
                    <p className='mt-2 text-xs text-gray-400 font-medium font-sans text-center'>{schoolclient.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
