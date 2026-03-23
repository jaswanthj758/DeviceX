import { useTitle } from "../../Hooks/useTitle.js"
import { useLocation, } from "react-router-dom";
import { ProductCard } from "../../components"
import {useFilter} from '../../context'
import { FilterBar } from "./components/FilterBar.js"
import {useState, useEffect} from "react"
export const ProductsList = () => { 
  const { products, initialProductList } = useFilter();
  const [show, setShow] = useState(false);
  useTitle("All eBooks")
 
  const search = useLocation().search;
  console.log(search)  
  const searchTerm = new URLSearchParams(search).get("q"); 
  console.log(searchTerm)
    // eslint-disable-next-line
    useEffect(()=>{ 
      async function featureProducts(){
        const response = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${searchTerm ? searchTerm : ""}`);
        const data = await response.json();
          
        initialProductList(data);
  
      }
      featureProducts();
    },[searchTerm])// eslint-disable-line
  return (
    <main>
        <section className="my-20 bg-white dark:bg-gray-900">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5 mt-16 p-2">All DeviceX presence {products.length}</span>
            <span>
              <button id="dropdownMenuIconButton"  onClick={()=>{setShow(!show)}} data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium mt-16 text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </button>
            </span>            
          </div>    

          <div className="grid grid-cols-1 md:grid-cols-3  max-w-[1250px] mx-auto">
             {
              products.map((product)=>(
                  <ProductCard key={product.id} product={product}/>
              ))
            }
          
         </div>  
        </section>

        {show ? <FilterBar setShow={ setShow }/> :null}

      </main> 
  )
}
