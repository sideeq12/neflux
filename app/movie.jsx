import Link from "next/link"
import Image from "next/image"

export default function Movie({title, release_date, poster_path}){
    const movie_path = "https://image.tmdb.org/t/p/original"
    return(
        <div>
            <h1>{title}</h1>
            <h2> {release_date}</h2>
            <Link href={`/asd`}>
                <Image src={movie_path+poster_path }
                width={400}
                height={400}
                 alt="The movie image" />
            </Link>
        </div>
    )
}