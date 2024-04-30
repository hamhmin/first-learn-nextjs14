
import { Metadata } from "next"
export const metadata : Metadata = {
    title : "Not found"
}

export default function NotFound(){
    return (
        <div>
            <h1>Not Found! 파일명을 not-found로 하게되면 없는 url로 접근시 해당 페이지로 이동됨</h1>
        </div>
    )
}