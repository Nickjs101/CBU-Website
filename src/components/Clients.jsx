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

const clientGroups = [
  { title: 'Hardware & construction', items: HardwareClients },
  { title: 'Villas & resorts', items: Resort },
  { title: 'Government', items: Government },
  { title: 'Schools & medical facilities', items: School },
];

export default function Clients() {
  return (
    <section id="clients" className="section clients-section" aria-labelledby="clients-title">
      <div className="section-heading"><div><p className="eyebrow">05 / In good company</p><h2 id="clients-title">Supporting the places<br />our communities rely on.</h2></div><p>Working with businesses and institutions across hardware, hospitality, government, education, and healthcare.</p></div>
      <div className="client-groups">{clientGroups.map(group => <div className="client-group" key={group.title}><h3>{group.title}</h3><div className="client-grid">{group.items.map(client => <figure key={client.name}><div><img src={client.img} alt={client.name} width="140" height="100" loading="lazy" /></div><figcaption>{client.name}</figcaption></figure>)}</div></div>)}</div>
    </section>
  );
}
