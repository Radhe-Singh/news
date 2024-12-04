const Card=()=>{
    return (
        <div className="w-[300px] h-[100px] mt-3  ml-8 flex">
            <div className="h-[100px] w-[100px] bg-white">
                <img src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1536x864.webp" className="h-[100%] w-[100%]" alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-red-600 ml-2 mt-[-10px] ">01</h1>
                <p className="ml-2 font-bold text-2xl">Top 10 laptop </p>
                <p className="ml-2 mt-3 text-red-400 text-wrap" >what happen when old pc are upgraded</p>
            </div>


        </div>
    )
}
export default Card;