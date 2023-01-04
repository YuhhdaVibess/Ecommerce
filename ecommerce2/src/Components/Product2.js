import './product.css';
import './products-container2.css';
import { Catagories } from '../data';

const link2 = < a href='google.com' style={{marginTop: 120, display: 'block', color: 'black'}}Shop Kids></a>

const CatagoriesSection = Catagories.map((Catagories, index) =>
<div key={Catagories.name + index}>

  <div className='Product3'>
  <img src={Catagories.img}></img>
  <a className='linkStyle' href={Catagories.link}>{Catagories.title}</a>
  </div>

</div>)

export default CatagoriesSection;