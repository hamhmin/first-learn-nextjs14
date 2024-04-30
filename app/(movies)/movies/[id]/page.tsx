import { Suspense } from "react";
import { API_URL } from "../../../(home)/page"
import MovieVideos from "../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../components/movie-info";

interface IParams{
    params: {id : string};
}

export async function generateMetadata({params:{id}} : IParams){
    const movie = await getMovie(id)
    return {
        title: movie.title,
    }
}
// export const metadata : Metadata  = {
//     title : "Movies",
// }
// async function getMovie(id:string){
//     console.log(`Fetching movies: ${Date.now()}`)
//     await new Promise((resolve)=>setTimeout(resolve, 2000))
//     const response = await fetch(`${API_URL}/${id}}`);
//     return response.json();
// }
// async function getVideos(id: string) {
//     console.log(`Fetching video: ${Date.now()}`)
//     await new Promise((resolve)=>setTimeout(resolve, 2000))
//     const response = await fetch(`${API_URL}/${id}}/videos`);
//     return response.json();
// }

export default async function MovieDetail ({
    params:{id},
}: IParams) {
    // const [movie,videos] = await Promise.all([getMovie(id) ,getVideos(id)]);
    // console.log(videos);
    // return <h1>{movie.title}</h1>
    return(
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )

}