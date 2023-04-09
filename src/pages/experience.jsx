import Layout from "../components/layout"
import Information from "../components/information";
import Description from "../components/card";
import { Pen } from "@phosphor-icons/react";
import { Izabelle } from "../assets"

export default function Experience() {
    return (
        <Layout>
            <article className="bg-white w-[400px] h-full flex flex-col items-center m-auto p-5">
                <section>
                    <Information
                        user={Izabelle}
                        name={"Izabelle Santos, 19"}
                        address={"Vila Matilde, São Paulo"}
                    />
                </section>

                <section className="py-5 border-t border-t-gray-light">
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Descrição do perfil <Pen size={25} className="inline" />
                    </div>
                    <Description
                        text={"Cursando Tecnólogo em Sistemas Para Internet  na FIAP, com conhecimentos em React Js, Frameworks e Rest Api."}
                    />
                </section>

                <section>
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Experiência <Pen size={25} className="inline" />
                    </div>
                    <Description
                        title={"Ateliê de propaganda"}
                        subtitle={"Desenvolvedor Front-End"}
                        office={"Junior"}
                        city={"São Paulo"}
                        start={"2022 -"}
                        end={"Trabalhando atualmente"}
                        style={true}
                    />
                </section>
            </article>
        </Layout>
    )
}