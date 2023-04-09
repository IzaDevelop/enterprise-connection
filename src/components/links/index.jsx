import { Link, useLocation } from "react-router-dom";

export default function Links(props) {
    const location = useLocation();
    const pathname = location.pathname

    function formatterName(name) {
        const formatted = name
            ?.replace(/[^a-zA-Z ]/g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[0-9]/g, "")
            .replace(/-/gi, "")
            .trim()
            .replace(/\s+/g, "-")
            .toLocaleLowerCase();
        return formatted;
    }

    return (
        <Link
            to={props.path}
            className={`p-2 border-b-2 block border-transparent ${pathname.replace("/", "") === formatterName(props.label) ||
                (pathname === "/" && props.label === "Home")
                ? " border-transparent"
                :''
                }`}
        >
            {props.label}
        </Link>
    );
}