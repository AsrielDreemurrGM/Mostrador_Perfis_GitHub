// Importando o CSS não informamos o Nome do Arquivo, somente o Caminho;
import './perfil.css'

// Podemos Exportar o "default" destas maneiras também:
// export default function() {
// export default () => {
// Para acessar atributos fornecemos um argumento, chamado "props";
// Formas de Desestruturação da Props;
// const Perfil = (props) => {
//     const { endereco, nome } = props;
const Perfil = ({ nomeUsuario }) => {
    return (
        <header>
            {/* Convertendo um Objeto em String */}
            {/* {JSON.stringify(props)} */}
            {/* Para utilizarmos classes do CSS usamos a Palavra Reservada "className" */}
            <img className='perfil-avatar' src={`https://github.com/${nomeUsuario}.png`} alt="Foto de Perfil" />
            <h1 className='perfil-titulo'>
                Usuário: {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;