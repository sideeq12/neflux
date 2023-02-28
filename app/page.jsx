import Movie from "./movie";


export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json()
    return (
    <main>
      <h2 className='text-lg py-6'>Hello world</h2>
      <div className="grid gap-16 grid-cols-fluid"> {res.results.map(
        data => <Movie 
        key={data.id}
        id={data.id}
        title={data.title}
        release_date={data.release_date}
        poster_path={data.poster_path}
        />
      )} </div>
    </main>
  )
}
