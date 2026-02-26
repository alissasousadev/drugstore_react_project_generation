import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

// Função principal do componente Footer
function Footer() {

    // Pega o ano atual automaticamente
    const data = new Date().getFullYear()

    return (

        // Container principal do Footer
        <div className="flex justify-center bg-[#BB2ED7] text-white">

            {/* Container interno */}
            <div className="container flex flex-col items-center py-4">

                {/* Nome do sistema + copyright */}
                <p className="text-xl font-bold">
                    Projeto FarmaGen | Copyright: {data}
                </p>

                {/* Texto secundário */}
                <p className="text-lg">
                    Acesse nossas redes sociais
                </p>

                {/* Container dos ícones */}
                <div className="flex gap-3 mt-2">

                    {/* Linkedin */}
                    <a 
                        href="https://www.linkedin.com/in/alissasousa/" 
                        target="_blank">
                        <LinkedinLogoIcon size={32} weight="bold" />
                    </a>

                    {/* Instagram */}
                    <a 
                        href="https://www.instagram.com/eualissasousa" 
                        target="_blank">
                        <InstagramLogoIcon size={32} weight="bold" />
                    </a>

                    {/* Github */}
                    <a 
                        href="https://github.com/alissasousadev" 
                        target="_blank">
                        <GithubLogoIcon size={32} weight="bold" />
                    </a>

                </div>

            </div>

        </div>

    )
}

export default Footer