import Link from "next/link"
import Image from "next/image"

// movie component

export default function Movie({title, id, release_date, poster_path}){
    const movie_path = "https://image.tmdb.org/t/p/original"
    return(

        <div  className="mx-8 sm:mx-0">
            <h1>{title}</h1>
            <h2> {release_date}</h2>

            <Link href={`/${id}`}>
                <Image src={movie_path+poster_path }
                width={400}
                height={400}
                 alt="The movie image here " />
            </Link>

        </div>

    )
}