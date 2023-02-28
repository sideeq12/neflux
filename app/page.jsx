
"https://api.themoviedb.org/3/movie/popular"


export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json()
  console.log(res)
    return (
    <main>
      <h2 className='text-lg py-6'>Hello world</h2>
      <div>We are texting theb layout </div>
    </main>
  )
}
