import {FcGoogle} from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
const OAuth = () => {
    const navigate = use

    const googleSignIn = async() =>{
        try{
            const auth =getAuth();  
            const provider =new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            const user =result.user;

            //check for the user in db available or not 
            const docRef = doc(db , "users", user.uid);
            const docSnap = await getDoc(docRef);

            if(! docSnap.exists()){
                await setDoc(docRef , {
                    fullName: user.displayName,
                    email: user.email,
                    timestamp :serverTimestamp(),
                })
            }
        }catch(error){
            console.log(error);
        }
    }


  return (
    <button type ="button"  onClick={googleSignIn}className="flex items-center justify-center bg-red-700 text-white px-7 py-3 w-full uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out rounder">
        <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
        Continue with google
    </button>
  )
}

export default OAuth;