import { useLocation,useNavigate } from "react-router-dom"
const Headers = () => {

    const location =useLocation();
    const navigate = useNavigate();

    function pathMatchRouter(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
        <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
         alt="realtor-logo"
         className="h-5 cursor-pointer"
         onClick={() =>navigate('/')}
        />
        </div>
        <div>
            <ul className="flex space-x-10 ">
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRouter("/") && "text-black border-b-red-500"}`} onClick={()=>navigate('/')}>Home</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRouter("/offers") && "text-black border-b-red-500"}`} onClick={() =>navigate('/offers')}>Offers</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRouter("/sign-in") && "text-black border-b-red-500"}`} onClick={() =>navigate('/sign-in')}>SignIn</li> 
            </ul>
        </div>

    </header>
    </div>
  )
}

export default Headers