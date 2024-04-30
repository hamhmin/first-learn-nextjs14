// "use client";
import Link from "next/link";
import Movie from "../components/movie";
import styles from "../styles/home.module.css"
import { API_URL } from "../constants";
import { Metadata } from "next"

// import { useEffect, useState } from "react";

export const metadata : Metadata  = {
    title : "Home",
}


async function getMovies(){
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const reponse = await fetch(API_URL);
    const json = await reponse.json();
    return json;
}

export default async function  HomePage (){


    //  react 방식
    // const [isLoading, setIsLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    //     const response = await fetch(URL);
    //     const json = await response.json();
    //     setMovies(json);
    //     setIsLoading(false);
    // }
    // useEffect(()=>{
    //     getMovies();
    // },[])
    const movies = await getMovies();
    return (
    <div className={styles.container}>
        {/* {isLoading ? "Loading..." : JSON.stringify(movies)} react 방식 */}
        {/* {JSON.stringify(movies)} */}

        {/* {movies.map(movie => <li><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)} */}
        {movies.map(movie => (
            <Movie 
            key={movie.id} 
            id={movie.id} 
            poster_path={movie.poster_path} 
            title={movie.title}
            />
        ))}

        {/* <h1>1. next.js 가 components를 모아 html으로 변환하여 사용자에게 보여준다. (seo 검색 최적화가 되어있다는게 이부분인것같음)</h1>
        <h1>2. 사용자가 페이지 접속시 자바스크립트가 실행되면 next.js는 react가 적용될 수 있도록 스크립트를 실행함</h1>
        <h1>2.5 이때 use client 명령어를 가진 components만 hydrate(interative)됨</h1>
        <h1>3.</h1>
        <h1>use client 를 사용하는 이유 : </h1>
        <h1>
        1.react에게 이 components가 frontend에서  hydrate 되어야함을 알려줌 (useState 등 js 기능이 사용될 components라는걸 알려줌)
        </h1>
        <h1>
            2. 사용자가 방대한 js 파일을 다운로드 받지 않게하기 위함. use client를 지정한 부분만 js 파일로 받음</h1> */}

    </div>
    )
}