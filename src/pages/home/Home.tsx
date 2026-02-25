import farmaciaImg from '../../assets/farmacia.png'

// Função principal do componente Home
function Home() {

  return (
    <>

      {/* Seção principal */}
      <div className="bg-purple-800 flex justify-center">

        {/* Container principal */}
        <div className="container grid grid-cols-2 text-white">

          
          {/* COLUNA ESQUERDA — TEXTO */}
          <div className="flex flex-col gap-4 items-center justify-center py-4">

            {/* Título principal */}
            <h2 className="text-5xl font-bold">

              FarmaGen

            </h2>

            {/* Texto secundário */}
            <p className="text-xl">

              Se até seu deploy precisa de saúde, imagine você.

            </p>

          </div>


          {/* COLUNA DIREITA — IMAGEM */}
          <div className="flex justify-center">

            <img
              src={farmaciaImg}
              alt="Imagem Farmácia"
              className="w-2/3"
            />

          </div>

        </div>

      </div>

    </>
  )

}

export default Home