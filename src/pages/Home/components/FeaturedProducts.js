import { ProductCard } from "../../../components"
import { useEffect, useState } from "react"
export const FeaturedProducts = () => {
  const [products, setProducts ] = useState([]);
  useEffect(()=>{
    async function featureProducts(){
      const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);
      const data = await response.json();
      setProducts(data);

    }
    featureProducts();
  },[])
  return (
   <main> 
    <section className="bg-white dark:bg-gray-900  justify-between items-center mx-auto max-w-screen-xl ">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="grid grid-cols-1 md:grid-cols-3  max-w-[1250px] mx-auto">
            {
              products.map((product)=>(
                  <ProductCard product={product}/>
              ))
            }
        
        </div>
    </section>
   </main>
  )
}


 