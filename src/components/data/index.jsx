import { IdentificationBadge, Cake, Buildings, GenderIntersex } from "@phosphor-icons/react"

export default function Data(props) {
    return (
        <div className="flex flex-col gap-3">
            <div className="block w-[350px] p-5 bg-white border border-gray-200 rounded-lg shadow">
                <IdentificationBadge size={30} className="inline text-gray-dark" /> <span className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.name }}/>
            </div>
            <div className="block w-[350px] p-5 bg-white border border-gray-200 rounded-lg shadow">
                <Cake size={30}  className="inline text-gray-dark" /> <span className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.age }}/>
            </div>
            <div className="block w-[350px] p-5 bg-white border border-gray-200 rounded-lg shadow">
                <Buildings size={30}  className="inline text-gray-dark"  /> <span className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.address }}/>
            </div>
            <div className="block w-[350px] p-5 bg-white border border-gray-200 rounded-lg shadow">
                <GenderIntersex size={30}  className="inline text-gray-dark" /> <span className="font-normal text-blue-dark" dangerouslySetInnerHTML={{ __html: props.gender }}/>
            </div>
        </div>
    )
}