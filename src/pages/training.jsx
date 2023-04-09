import Layout from "../components/layout"
import Information from "../components/information";
import Description from "../components/card";
import { Pen } from "@phosphor-icons/react";
import { Diego } from "../assets"

export default function Training() {
    return (
        <Layout>
            <article className="bg-white w-[400px] h-full flex flex-col items-center m-auto p-5">
                <section>
                    <Information
                        user={Diego}
                        name={"Diego Cruz, 20"}
                        address={"Freguesia do Ó, São Paulo"}
                    />
                </section>

                <section className="py-5 border-t border-t-gray-light">
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Descrição do perfil <Pen size={25} className="inline" />
                    </div>
                    <Description
                        text={"Desenvolvedor back-end, habilidades em resolução de problemas, Cursando Sistemas para internet na FIAP."}
                    />
                </section>

                <section>
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Formação <Pen size={25} className="inline" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <Description
                            title={"Superior"}
                            subtitle={"Sistemas para Internet"}
                            office={"Faculdade de Administração e Informática..."}
                            city={"São Paulo"}
                            start={"2022 -"}
                            end={"Cursando"}
                            style={true}
                        />

                        <Description
                            title={"Técnico"}
                            subtitle={"Técnico em Eletrônica"}
                            office={"Etec"}
                            city={"São Paulo"}
                            start={"22019 -"}
                            end={"2021"}
                            style={false}
                        />
                    </div>
                </section>
            </article>
        </Layout>
    )
}