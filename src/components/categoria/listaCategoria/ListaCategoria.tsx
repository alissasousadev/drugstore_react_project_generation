import { useEffect, useState } from "react";
import CardCategoria from "../cardCategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";


// Função principal
function ListaCategoria() {

    // State para armazenar as categorias
    const [categorias, setCategorias] = useState<Categoria[]>([]);


    // Função para buscar categorias
    async function buscarCategorias() {

        try {

            await buscar("/categorias", setCategorias);

        } catch (error) {

            console.log(error);

        }

    }

    // executa automaticamente quando o componente carrega
    useEffect(() => {

        buscarCategorias();

    }, []);


    return (

        // Container principal
        <div className="flex justify-center w-full my-4">

            <div className="container flex flex-col">

                {/* Grid de cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">


                    {/* Percorre todas categorias */}
                    {categorias.map((categoria) => (

                        <CardCategoria

                            key={categoria.id}

                            categoria={categoria}

                        />

                    ))}


                </div>

            </div>

        </div>

    );

}

export default ListaCategoria;