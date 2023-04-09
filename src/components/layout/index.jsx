import { Background } from "../../assets"
import Header from "../header"

export default function Layout(props) {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <img src={Background} className="w-[450px]" />
            <Header />
            <main className="absolute top-40">
                {props.children}
            </main>
        </div>
    )
}