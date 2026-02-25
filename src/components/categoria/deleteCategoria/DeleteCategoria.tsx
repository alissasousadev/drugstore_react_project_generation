import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"

import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"

function DeletarCategoria() {

    const navigate = useNavigate()

    // estado da categoria
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    // estado loading
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // pega id da url
    const { id } = useParams<{ id: string }>()


    // buscar categoria pelo id
    async function buscarPorId(id: string) {

        try {

            await buscar(`/categorias/${id}`, setCategoria)

        } catch (error) {

            console.log(error)

        }

    }


    // executa quando abrir tela
    useEffect(() => {

        if (id !== undefined) {

            buscarPorId(id)

        }

    }, [id])



    // deletar categoria
    async function deletarCategoria() {

        setIsLoading(true)

        try {

            await deletar(`/categorias/${id}`)

        } catch (error) {

            console.log(error)

        }

        setIsLoading(false)

        retornar()

    }


    // voltar para lista
    function retornar() {

        navigate("/categorias")

    }



    return (

        // fundo 
        <div className="flex justify-center items-center min-h-screen bg-white">


            <div className="flex flex-col items-center gap-6">


                {/* titulo */}
                <h1 className="text-3xl font-bold mb-8">

                    Apagar Categoria

                </h1>



                {/* texto confirmação */}
                <p className="text-xl font-bold text-center mb-8">

                    Tem certeza de que deseja apagar a Categoria:

                    <br />

                    <span className="text-[#BB2ED7] font-bold">

                        {" "}{categoria.nome}

                    </span>

                </p>



                {/* botões */}
                <div className="flex gap-6 mt-4">



                    {/* cancelar */}
                    <button

                        onClick={retornar}

                        className="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-6  rounded border-2 border-black"

                    >

                        Cancelar

                    </button>



                    {/* apagar */}
                    <button

                        onClick={deletarCategoria}

                        className="bg-[#BB2ED7] hover:bg-[#9c22b3] text-white font-bold py-2 px-6 rounded border-2 border-black "

                    >

                        {isLoading ?

                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />

                            :

                            "Apagar"

                        }

                    </button>


                </div>


            </div>


        </div>

    )

}

export default DeletarCategoria