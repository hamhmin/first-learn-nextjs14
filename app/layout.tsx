import Navigation from "./components/navigation"



export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading..."
  },
  description: 'The best movies on the best framework',
}
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        (Navigation을 Layout에 넣어 모든 페이지에 적용됨. ubms의 common/nav 같은 느낌)
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
