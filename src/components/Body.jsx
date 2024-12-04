import Card from "./card";

const Body =()=>{
    return(
        <div> 
            <div className="flex mt-3 p-2 text-xl  float-right mr-52 relative">
            <ul className="flex ">
            <li>Home</li>
            <li className="ml-3">New</li>
            <li className="ml-3">Popular</li>
            <li className="ml-3">Trending</li>
            <li className="ml-3">Categories</li>
            </ul>
           </div>
           <h1 className="text-5xl font-bold ml-36 mt-3">W.</h1>
           <div className="flex w-[1000px] h-[500px]  ml-[25vh]">
            <div className="h-[500px] w-[700px] bg-white block">
                <div className="w-[700px] h-[250px]">
                    <img src="https://www.shutterstock.com/shutterstock/photos/2327110403/display_1500/stock-vector-vector-illustration-of-beautiful-forest-background-2327110403.jpg" alt="" className="h-[240px] w-[690px]"/>

                </div>
                <div className="w-[700px] h-[250px] flex">
                    <div className="h-[250px] w-[350px] ">
                        <h1 className="text-wrap text-[50px] font-bold">The Bright Furture of Web 3.0?</h1>
                    </div>
                    <div className="h-[250px] w-[340px] mr-[10px]  ">
                        <p className="text-red-400 text-wrap">we dive into the next evolution of the wev that claims to put the power 
                            of the platforms back into the hands of the people but is it really fulfilling its promise.
                        </p>
                        <button className="bg-red-500 p-2 mt-5 text-3xl font-bold">Read more</button>
                    </div>
                </div>
            </div>
            <div className="w-[400px]  bg-slate-500">
                <h1 className="ml-6 font-bold text-3xl text-yellow-400 mt-9">New</h1>
          
                <div className="block justify-center ml-6 mt-6 mr-6">
                <h2 className="text-white text-xl">Hydrogen Vs Electic Cars<br />
                
                </h2>
                <span className="text-slate-400">will Hydrogen fueilled cars ever catchup to EVS.</span>
               
                <hr className="mt-5"/> 
                <div></div>
                
                </div>
                <div className="block justify-center ml-6 mt-6 mr-6">
                <h2 className="text-white text-xl">Hydrogen Vs Electic Cars<br />
                
                </h2>
                <span className="text-slate-400">will Hydrogen fueilled cars ever catchup to EVS.</span>
               
                <hr className="mt-6"/> 
                
                </div>
                <div className="block justify-center ml-6 mt-6 mr-6">
                <h2 className="text-white text-xl">Hydrogen Vs Electic Cars<br />
                
                </h2>
                <span className="text-slate-400">will Hydrogen fueilled cars ever catchup to EVS.</span>
               
    
                
                </div>
                
                
            </div>
           </div>
           <div className=" w-[1000px] flex flex-wrap  ml-[25vh]">
            <Card/>
            <Card/>
            <Card/>
    
           </div>

        </div>
         


    )
}
export default Body;