import React,{useState} from "react";
import product_list from "./data/product_data";

const Search = () => {
    const [filter, setfilter] = useState('')
    const searchText = (event) =>{
        setfilter(event.target.value);
    }
    let dataSearch = product_list.filter(item=>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })

  return (
    <section>
     <div className="main_page">
          <div className="Search">
                <label className="form-label">Search </label>
                <input type="text" className="form-control" value={filter} 
                onChange={searchText.bind(this)}></input>
              </div>
        {dataSearch.map((item, index) => {
          return (
            <div className="card" key={item.id}>
            <div className="card_img">
              <img src={item.image.src} />
            </div>
            <div className="card_header">
              <h2>{item.title}</h2>
              <p className="price">{item.price}</p>
              <div className="btn">Add To Cart</div>
            </div>
          </div>
        
          );
        })}
      </div>
    </section>
  );
};

export default Search;
