import {FcGoogle} from "react-icons/fc"
const OAuth = () => {
  return (
    <button className="flex items-center justify-center bg-red-700 text-white px-7 py-3 w-full uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out rounder">
        <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
        Continue with google
    </button>
  )
}

export default OAuth;