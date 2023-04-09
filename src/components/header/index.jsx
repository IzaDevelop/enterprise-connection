import { useState, useEffect } from "react";
import { List, Bell } from "@phosphor-icons/react";
import Links from "../links";

export default function Header() {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setMenu(windowDimensions.width > 768 ? false : menu);
    }, [windowDimensions]);

    return (
        <header className="absolute top-10 w-[400px] z-10">
            <nav className="text-blue-dark font-medium">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setMenu(!menu)}
                        type="button"
                        className="inline-flex items-center text-sm rounded-lg"
                    >
                        <List size={40} weight="bold" color="#32325D" />
                    </button>

                    <button>
                     <Bell size={35} color="#32325D" />
                    </button>
                </div>

                <div className={`p-2 ${menu ? "visible absolute top-[30px] left-0 w-full" : "hidden"}`}>
                    <div className="bg-back border-2 border-white rounded-lg flex flex-col">
                        <Links path={"/"} label={"Sobre você"} />
                        <Links path={"/training"} label={"Formação"} />
                        <Links path={"/experience"} label={"Experiência"} />
                        <Links path={"/hobbies"} label={"Hobbies"} />
                    </div>
                </div>
            </nav>
        </header >
    )
}