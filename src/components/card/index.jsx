export default function Description(props) {
    return (
        <div className="block w-[350px] p-5 bg-white border border-gray-200 rounded-lg shadow">
            <div className="text-lg font-medium tracking-tight text-red" dangerouslySetInnerHTML={{ __html: props.title }} />
            <div className="py-2 text-lg font-medium tracking-tight text-blue-dark" dangerouslySetInnerHTML={{ __html: props.subtitle }} />
            <div className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.text }} />
            <div className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.city }} />
            <div className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.office }} />
            <div className="flex">
                <div className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.start }} />
                <div className={`font-normal text-blue-dark pl-1 ${props.style ? 'text-green font-semibold' : ''}`} dangerouslySetInnerHTML={{ __html: props.end }} />
            </div>
        </div>
    )
}