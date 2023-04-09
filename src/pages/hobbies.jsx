import Layout from "../components/layout"
import Information from "../components/information";
import Description from "../components/card";
import { Pen, Plus } from "@phosphor-icons/react";
import { Amanda } from "../assets"

export default function Hobbies() {
    return (
        <Layout>
            <article className="bg-white w-[400px] h-full flex flex-col items-center m-auto p-5">
                <section>
                    <Information
                        user={Amanda}
                        name={"Amanda Vieira, 20"}
                        address={"Diadema, São Paulo"}
                    />
                </section>

                <section className="py-5 border-t border-t-gray-light">
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Descrição do perfil <Pen size={25} className="inline" />
                    </div>
                    <Description
                        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr..."}
                    />
                </section>

                <section>
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Hobbies <Pen size={25} className="inline" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow">Tocar violão</div>
                        <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow">Pintura</div>
                        <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow">Desenhar</div>
                        <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow">Leitura</div>
                        <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow">Jogar Videogame</div>
                        <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow">Dirigir</div>
                        <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow"><Plus size={20} /></div>
                    </div>
                </section>
            </article>
        </Layout>
    )
}