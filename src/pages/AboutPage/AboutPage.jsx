import Header from '../../components/staticcomponents/Header/Header'
import Navbar from '../../components/staticcomponents/Navbar/Navbar'

function AboutPage(){
    return(
        <div>
            <Header />
            <Navbar />
            <h2>Sobre o projeto</h2>
            <p>Este projeto foi desenvolvido na disciplina de Programação Frontend da UNIVAS para praticar conceitos de React, como componentes, props, state e consumo de APIs, utilizando dados do universo de Harry Potter.</p>
        </div>
    )
}
export default AboutPage