import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

// Define o tipo das props que o componente vai receber
interface CardCategoriaProps {

    categoria: Categoria

}


// Função principal do componente
function CardCategoria({ categoria }: CardCategoriaProps) {

    return (

        // Container do card
        <div className="border-4 border-[#BB2ED7] rounded-xl p-4 flex flex-col items-center justify-center p-6 gap-3 shadow-lg bg-white">

            
            {/* Parte de texto */}
            <div>

                {/* Nome da categoria */}
                <h2 className="text-xl font-bold text-[#BB2ED7] text-center">

                    {categoria.nome}

                </h2>


                {/* Descrição */}
                <p className="text-gray-700 text-center">

                    {categoria.descricao}

                </p>

            </div>


            {/* Área dos botões */}
            <div className="flex gap-4 mt-4">


                {/* Botão Editar */}
                <Link
                    to={`/editarCategoria/${categoria.id}`}
                    className="bg-sky-400 hover:bg-sky-600 text-black font-bold px-5 py-1 rounded border-2 border-black"
                >

                    Editar

                </Link>


                {/* Botão Deletar */}
                <Link
                    to={`/deletarCategoria/${categoria.id}`}
                    className="bg-pink-500 hover:bg-pink-600 text-black font-bold px-5 py-1 rounded border-2 border-black"
                >

                    Deletar

                </Link>


            </div>

        </div>

    );

}

export default CardCategoria;