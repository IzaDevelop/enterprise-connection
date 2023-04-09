import { useState } from "react";
import Layout from "../components/layout"
import Information from "../components/information";
import Description from "../components/card";
import Data from "../components/data";
import { Pen } from "@phosphor-icons/react";
import { Pedro } from "../assets"

export default function AboutYou() {
    const [cep, setCep] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

    function handleSearch(valor) {

        var cep = valor.replace(/\D/g, '');

        if (cep !== "") {
            var validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {
                setRua("...")
                setBairro("...")
                setCidade("...")
                setEstado("...")

                let url = `https://viacep.com.br/ws/${cep}/json/`;

                fetch(url)
                    .then(resposta => resposta.json())
                    .then(dados => {
                        if ("erro" in dados) {
                            alert("CEP não encontrado!")
                            handleClear();
                        } else {
                            setRua(dados.logradouro)
                            setBairro(dados.bairro)
                            setCidade(dados.localidade)
                            setEstado(dados.uf)
                        }
                    });
            } else {
                handleClear()
                alert("Formato de CEP inválido.")
            }
        } else {
            handleClear()
            alert("Formato de CEP inválido.")
        }
    }

    function handleClear() {
        setRua("")
        setBairro("")
        setCidade("")
        setEstado("")
    }

    return (
        <Layout>
            <article className="bg-white w-[400px] h-full flex flex-col items-center m-auto p-5">
                <section>
                    <Information
                        user={Pedro}
                        name={"Pedro Soares, 19"}
                        address={"Osasco, São Paulo"}
                    />
                </section>

                <section className="py-5 border-t border-t-gray-light">
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Descrição do perfil <Pen size={25} className="inline" />
                    </div>
                    <Description
                        text={"Estudante da área de T.I cursando o segundo ano do Tecnólogo em Sistemas Para Internet na FIAP, com habilidades em..."}
                    />
                </section>

                <section className="pb-5">
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Sobre você <Pen size={25} className="inline" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <Data
                            name={"Pedro Soares"}
                            age={"19 anos"}
                            address={"Rua 5 de junho, Osasco"}
                            gender={"Masculino"}
                        />
                    </div>
                </section>

                <section>
                    <div className="w-full flex justify-between items-center mb-2 text-xl font-medium tracking-tight text-blue-dark">
                        Endereço <Pen size={25} className="inline" />
                    </div>
                    <form action="" className="w-[350px]">

                        <div className="mb-4">
                            <label htmlFor="cep" className="mb-2 text-sm font-medium text-zinc-700 sr-only">CEP</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input 
                                    type="search" 
                                    name="cep"
                                    id="cep" 
                                    className="block w-full p-4 pl-10 text-zinc-700 border border-zinc-4 rounded-sm" 
                                    placeholder="Digite seu CEP" 
                                    value={cep}
                                    maxLength="9"
                                    onChange={(e) => setCep(e.target.value)}
                                    required/>
                            
                            <button onClick={() => handleSearch(cep)} type="button" className="text-white absolute right-2.5 bottom-2.5 bg-red focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ">Pesquisar</button>
                        </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="rua" className="block mb-2">
                                Rua
                            </label>
                            <input
                                type="text"
                                name="rua"
                                id="rua"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                                className={`text-zinc-700 border border-zinc-40 rounded-sm p-2 h-[40px] w-full`}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="bairro" className="block mb-2">
                                Bairro
                            </label>
                            <input
                                type="text"
                                name="bairro"
                                id="bairro"
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                                className={`text-zinc-700 border border-zinc-40 rounded-sm p-2 h-[40px] w-full`}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cidade" className="block mb-2">
                                Cidade
                            </label>
                            <input
                                type="text"
                                name="cidade"
                                id="cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                className={`text-zinc-700 border border-zinc-40 rounded-sm p-2 h-[40px] w-full`}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="estado" className="block mb-2">
                                Estado
                            </label>
                            <input
                                type="text"
                                name="estado"
                                id="estado"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                className={`text-zinc-700 border border-zinc-40 rounded-sm p-2 h-[40px] w-full`}
                            />
                        </div>

                        
                    </form>
                </section>
            </article>
        </Layout>
    )
}