import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer  >
      <div className="w-full  py-4 flex flex-col items-center gap-2  border-t border-gray-200 bottom-0  dark:bg-gray-900 border-t  dark:border-gray-700 justify-between items-center mx-auto max-w-screen-xl ">
        <p className="text-sm  text-gray-500 hover:text-gray-900 dark:hover:text-white"> 
          © 2026 <span className="font-semibold text-gray ">codeBook</span>. All Rights Reserved.
        </p>

        <div className="flex gap-6 ">
         <Link to='#'><span className="bi bi-instagram text-xl cursor-pointer hover:text-pink-500 transition-colors text-gray-500 hover:text-gray-900 dark:hover:text-white "></span></Link> 
          <Link to='#'><span className="bi bi-twitter text-xl cursor-pointer hover:text-sky-400 transition-colors text-gray-500 hover:text-gray-900 dark:hover:text-white"></span></Link>
         <Link to='#'> <span className="bi bi-github text-xl cursor-pointer hover:text-black transition-colors text-gray-500 hover:text-gray-900 dark:hover:text-white "></span></Link>
        </div>
    </div>

    </footer>
    
  )
}


