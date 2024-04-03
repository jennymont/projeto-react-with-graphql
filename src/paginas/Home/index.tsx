import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import Banner from "../../componentes/Banner"
import LivrosDestaque from "../../componentes/LivrosDestaque"
import Newsletter from "../../componentes/Newsletter"
import TagsCategorias from "../../componentes/TagsCategorias"
import Titulo from "../../componentes/Titulo"

import './Home.css'
import { gql, useQuery } from "@apollo/client"

const OBTERTER_DESTAQUES = gql`
  query ObterDestaques {
    destaques {
        lancamentos {
            id
            slug
            titulo
            imagemCapa
            opcoesCompra {
                id
                preco
                    }
        }
        maisVendidos {
            id
            slug
            titulo
            imagemCapa
            opcoesCompra {
                id
                preco
                    }
        }
    }
  }
`;

const Home = () => {
    const [busca, setBusca] = useState("")

    const { data } = useQuery(OBTERTER_DESTAQUES)

    return (<section className="home">
        <Banner subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!" titulo="Já sabe por onde começar?">
            <form className="buscar">
                <AbCampoTexto 
                    placeholder="Qual será sua próxima leitura?"
                    value={busca}
                    onChange={setBusca}
                    darkmode={true}
                    placeholderAlign="center"
                />
            </form>
        </Banner>
        <Titulo texto="ÚLTIMOS LANÇAMENTOS"/>
        <LivrosDestaque livros={data?.destaques?.lancamentos ?? []}/>
        <Titulo texto="MAIS VENDIDOS"/>
        <LivrosDestaque livros={data?.destaques?.maisVendidos ?? []}/>
        <TagsCategorias />
        <Newsletter />
    </section>)
}

export default Home