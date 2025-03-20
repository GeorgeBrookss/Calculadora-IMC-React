import { useEffect, useState } from "react";

const Header = () => {

    
        const [botaoPress, setBotaoPress] = useState(false)

        const sistemaIniciado = () => {
            setBotaoPress(true);
            console.log('INICIANDO SISTEMA')

        }

        const [altura, setAltura] = useState(null)
        const [peso, setPeso] = useState(null)

    
        
        
        const [resultado, setResultado] = useState(false)

        
        
    
    return(
        
        <>
    <header>
        <h1>Calculadora IMC</h1>
        <button type="button" onClick={sistemaIniciado}>Iniciar</button>

        {botaoPress ?
        <>
        <form>
            <input type="number"  placeholder="Altura" onChange={(e) => setAltura(Number(e.target.value))}/>
            <input type="number" placeholder="peso" onChange={(e) => setPeso(Number(e.target.value))}/>
            <button type="button" onClick={() => {
                setResultado(true);
                
            }}>Calcular</button>
            
        </form> 
        <h3>Resultado</h3>
        <p>Seu IMC é de:</p>
        {resultado ? <p>{ (peso / (altura * altura)).toFixed(2) }</p> : <h2></h2>}

        </>
        : 
        <h2>Clique acima para inserir suas informações</h2> }
    </header>
    </>
    )
}

export default Header;