import { useState, type ChangeEvent } from "react"
import { ClipLoader } from "react-spinners"
import type Categoria from "../../../models/Categoria"

function FormCategoria() {

    // estado da categoria
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    // estado de loading
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // função para atualizar estado conforme digita
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

    }

    // função submit
    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault()

        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)

    }


    return (

        // container principal
        <div className="flex justify-center items-center min-h-screen bg-white">

            {/* caixa do formulário */}
            <div className="flex flex-col items-center w-96">

                {/* titulo */}
                <h1 className="text-3xl font-bold text-bold mb-8">
                    Cadastrar Categoria
                </h1>


                {/* formulario */}
                <form
                    className="flex flex-col gap-6 w-full"
                    onSubmit={gerarNovoCategoria}
                >

                    {/* campo nome */}
                    <div className="flex flex-col gap-1">

                        <label className="text-[#BB2ED7] font-semibold text-sm mb-1">
                            Nome:
                        </label>

                        <input

                            type="text"

                            name="nome"

                            placeholder="Digite o nome da nova categoria"

                            className="border-2 border-[#BB2ED7] rounded p-2 outline-none "

                            value={categoria.nome}

                            onChange={atualizarEstado}

                        />

                    </div>


                    {/* campo descricao */}
                    <div className="flex flex-col gap-1">

                        <label className="text-[#BB2ED7] font-semibold text-sm mb-1">
                            Descrição:
                        </label>

                        <input

                            type="text"

                            name="descricao"

                            placeholder="Digite a descrição da nova categoria"

                            className="border-2 border-[#BB2ED7] rounded p-2 outline-none"

                            value={categoria.descricao}

                            onChange={atualizarEstado}

                        />

                    </div>


                    {/* botão */}
                    <button

                        type="submit"

                        className="
                        bg-[#BB2ED7]
                        hover:bg-[#BB2ED7]
                        text-white
                        font-bold
                        py-2
                        rounded
                        w-48
                        mx-auto
                        flex
                        justify-center
                        "

                    >

                        {isLoading ?

                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />

                            :

                            "CADASTRAR"

                        }

                    </button>


                </form>

            </div>

        </div>

    )

}

export default FormCategoria
