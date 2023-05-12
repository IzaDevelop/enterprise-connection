import { WarningCircle, CheckCircle } from "@phosphor-icons/react"

export default function FeedbackForm(props) {
    return (
        <div
            className={`${props.visible
                ? "flex items-center justify-center bg-black bg-opacity-50 fixed z-10 top-0 w-full h-full"
                : "hidden"
                }`}
        >
            <div className="bg-white w-[300px] rounded-2xl text-center px-10">
                <div className="pt-12">
                    {props.error
                        ? <WarningCircle size={70} weight="light" color="#DD1212" className="inline" /> : <CheckCircle size={70} weight="light" color="#75C666" className="inline" />
                    }
                </div>
                <div className="py-7">
                    <div className="text-principal text-lg font-semibold" dangerouslySetInnerHTML={{ __html: props.message }} />

                    <div className="text-cinza text-md" dangerouslySetInnerHTML={{ __html: props.observation }} />
                    <p className="text-cinza text-md pt-2"></p>
                </div>
                <div className="pb-12">
                    <button
                        onClick={() => props.hidden()}
                        className="text-white text-md font-medium bg-red w-36 h-12 rounded-md"
                    >
                        {props.button}
                    </button>
                </div>
            </div>
        </div>
    )
}