import './AboutPage.css'

function AboutPage(){
    return(
        <div className='about-page'>
            <div className='about-card'>
                <h2 className='about-title'>Sobre o Projeto</h2>
                <div className='about-divider' />
                <p className='about-text'>Este projeto foi desenvolvido na disciplina de Programação Frontend da UNIVAS para praticar conceitos de React, como componentes, props, state e consumo de APIs, utilizando dados do universo de Harry Potter.</p>
                <div className='about-footer'>
                    <span className='about-authors'>Guilherme Augusto &amp; João Pedro</span>
                    <span className='about-course'>Programação Frontend &mdash; UNIVAS</span>
                </div>
            </div>
        </div>
    )
}
export default AboutPage