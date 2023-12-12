import Header from "../Header"
import Footer from "../Footer"

export default function LayoutPage({ children } :any) {
  return(
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}