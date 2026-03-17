import { Link } from "react-router-dom"
import  heroLandScape from "../../../assets/images/heroLandScape.png"

 export const Hero = () => {
  return (
    
        <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center bg-white dark:bg-gray-900  my-20 justify-between items-center mx-auto max-w-screen-xl">
            <div className="text my-3">
                <h1 className="text-5xl font-bold">Your One-Stop Phone Destination</h1>
                <p className="text-2xl my-7 px-1 dark:text-slate-300">Discover the latest smartphones from top brands, compare features, and shop the perfect device at the best prices—all in one place.</p>
                <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore DeviceX
                </Link>
            </div>
            <div className="visual my-3 lg:max-w-xl">
                <img className="rounded-lg max-h-full" src={heroLandScape} alt="DeviceX Hero Section" />
            </div>
        </section>

   
  )
}

  

