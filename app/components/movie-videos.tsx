import { API_URL } from "../constants";
import styles from "../styles/movie-video.module.css"

async function getVideos(id: string) {
    // console.log(`Fetching video: ${Date.now()}`)
    // await new Promise((resolve)=>setTimeout(resolve, 3000))
    // throw new Error("lol something broke...");
    const response = await fetch(`${API_URL}/${id}}/videos`);
    return response.json();
}
export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id);
    // return <h6>video : {JSON.stringify(videos)}</h6>
    return <div className={styles.container}>
        {videos.map(video => (
        <iframe 
        key={video.key} 
        src={`https://youtube.com/embed/${video.key}`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; pictuer-in-picture"
        allowFullScreen={true}
        title={video.name}
        />
        ))}
    </div>

}