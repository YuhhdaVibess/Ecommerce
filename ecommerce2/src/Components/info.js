import './info.css';
import { Info } from "../data";


const InfoSection = Info.map((Info, index) =>
<div key={Info.name + index}>
<div className='info-container2'>
   <img className="info-img" src={Info.img} />
   <h1 className="info-h1">{Info.title}</h1>
   <p className="info-p">{Info.description}</p>
   <a className='info-link' href={Info.link}>{Info.linkTitle}</a>
   </div>


</div>
);


export default InfoSection;


