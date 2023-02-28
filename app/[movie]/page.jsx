import Image from "next/image";

export default async function MovieData({params}){

    const data = await fetch(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`);
    const movie_path = "https://image.tmdb.org/t/p/original"
    const res = await data.json();
    console.log(res)
    return (
        <div>
            <h2 className="text-2xl">{res.title}</h2>
            <h2 className="text-lg">{res.release_date}</h2>
            <h2 className="text-lg"> Runtime : {res.runtime} minutes</h2>
            <h2 className=" text-sm bg-green-600 py-2 px-2 my-2 rounded-md inline-block">{res.status} </h2>

            <Image className="my-12 w-full"
             src={movie_path+ res.backdrop_path}
             width={1000}
             height={1000}
             priority />

             <p>{res.overview}</p>
        </div>
    )
}