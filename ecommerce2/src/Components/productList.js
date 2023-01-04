
import { Link } from "react-router-dom";
import { NewReleases } from "../data";
import { StaffPicks } from "../data";
import { MusicInfluence } from "../data";
import ProductScreen from "./Screens/ProductScreen";




export const NewReleasesProducts = NewReleases.map((NewReleases) =>
<div key={NewReleases.id}>
 <Link to={`products/${NewReleases.id}`} style={{textDecoration: 'none'}}>  
    <div className='Product'> 
      <img className='product img' src={NewReleases.img} />
      <h1 className='Title'>{NewReleases.title}</h1>
      <p className='Description'>{NewReleases.description}</p>
    </div>
 </Link>    
</div>);


export const MusicInfluenceProducts = MusicInfluence.map((MusicInfluence) =>
<div key={MusicInfluence.id}>
<div className="Product">
    <img className="product img" src={MusicInfluence.img}/>
    <h1 className="Title">{MusicInfluence.title}</h1>
    <p className="Description">{MusicInfluence.description}</p>
</div>
</div>);




export const StaffPicksProducts = StaffPicks.map((StaffPicks)=> 
<div key={StaffPicks.id}>
    <div className="Product">
        <img className="product img" src={StaffPicks.img} />
        <h1 className="Title">{StaffPicks.title}</h1>
        <p className="Description">{StaffPicks.description}</p>
    </div>
</div>
);

