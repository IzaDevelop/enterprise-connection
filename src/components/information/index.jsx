import { Medal } from "@phosphor-icons/react"

export default function Information(props) {
    return (
        <div className="w-[350px] flex flex-col justify-center items-center pt-10">
            <div className="absolute -top-[80px] w-36 h-36 overflow-hidden bg-gray-100 rounded-full">
                <img src={props.user} alt="" />
            </div>

            <div className="w-full flex justify-between items-center text-center py-5">
                <div className="font-normal text-lg text-blue-light">
                    <span className="font-bold">3</span> <br /> Prêmios
                </div>
                <div className="font-normal text-lg text-blue-light">
                    <span className="font-bold">10</span> <br /> Realizações
                </div>
                <div className="font-normal text-lg text-blue-light">
                    <span className="font-bold">3</span> <br /> Temporadas
                </div>
            </div>

            <div className="w-full flex flex-col justify-between items-center gap-4 pb-3">
                <div className="w-full flex justify-between items-center">
                    <span className="font-bold">50 p</span>
                    <div className="w-[70%] bg-gray-dark rounded-full h-2.54">
                        <div className="bg-red h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <span className="font-bold">100 p</span>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <Medal size={40} className="text-red" />
                    <span className="font-bold">3</span>
                </div>
            </div>

            <div className="w-full flex flex-col gap-2 pb-5 text-center">
                <div className="font-bold text-3xl text-blue-dark" dangerouslySetInnerHTML={{ __html: props.name }} />
                <div className="font-light text-2xl text-blue-dark" dangerouslySetInnerHTML={{ __html: props.address }} />
            </div>
        </div>
    )
}