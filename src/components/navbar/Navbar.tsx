import { Link } from "react-router-dom";

// Função principal do componente Navbar
function Navbar() {

    return (
        // Container principal da Navbar
        <div className="w-full flex justify-center py-4 bg-purple-800 text-white">
            <div className="container flex justify-between text-lg">

                {/* Nome do sistema */}
                <Link 
                    to="/home" 
                    className="text-2xl font-bold">Projeto FarmaGen
                </Link>

                {/* Área de navegação */}
                <div className="flex gap-4">

                    {/* Listar Categorias */}
                    <Link 
                        to="/categorias" 
                        className="hover:underline"
                    >
                        Lista Categorias
                    </Link>

                    {/* Cadastrar Categoria */}
                    <Link 
                        to="/cadastrarCategoria" 
                        className="hover:underline"
                    >
                        Cadastrar Categoria
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Navbar;