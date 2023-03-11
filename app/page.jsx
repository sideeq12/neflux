import Movie from "./movie";

// main function
export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json()
  console.log( res)
    return (
    <main>
      <h2 className='text-lg py-6 font-mono font-extrabold lg:text-2xl ml-8'>Flee <span className="text-sky-400 
      	text-decoration-line: overline decoration-pink-900">Video</span></h2>
      <div className="grid gap-16 sm:grid-cols-fluid"> {res.results.map(
        data => <Movie 
        key={data.id}
        id={data.id}
        title={data.title}
        release_date={data.release_date}
        poster_path={data.poster_path} />
      )} </div>
    </main>
  )
}
