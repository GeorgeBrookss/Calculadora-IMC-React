import { useEffect, useState } from "react";

const Header = () => {

    
        const [botaoPress, setBotaoPress] = useState(false);

        const sistemaIniciado = () => {
            setBotaoPress(true);
            console.log('INICIANDO SISTEMA')

        }

        const [altura, setAltura] = useState(null)
        const [peso, setPeso] = useState(null)

    
        
        
        const [resultado, setResultado] = useState(null)


        const CalculoIMC = () => {

            if (peso && altura){
                const IMC = (peso / (altura * altura)).toFixed(2)
                return IMC;
            }
            return null;

        }

        
        const [abaixoPeso, setAbaixoPeso] = useState (false);
        const [medioPeso, setMedioPeso] = useState (false);
        const [acimaPeso, setAcimaPeso] = useState (false);
        const [obeso1Peso, setObeso1Peso] = useState (false);
        const [obeso2Peso, setObeso2Peso] = useState (false);
        const [obeso3Peso, setObeso3Peso] = useState (false);

        const MostrarIMC = () =>{
            const imc = CalculoIMC();
            setResultado(imc);
            if(imc <= 18.4){
                setAbaixoPeso(true)
                setMedioPeso(false)
                setAcimaPeso(false)
                setObeso1Peso(false)
                setObeso2Peso(false)
                setObeso3Peso(false)

            }else if(imc <= 24.9){
                setAbaixoPeso(false)
                setMedioPeso(true)
                setAcimaPeso(false)
                setObeso1Peso(false)
                setObeso2Peso(false)
                setObeso3Peso(false)
            }else if(imc <= 29.9){
                setAbaixoPeso(false)
                setMedioPeso(false)
                setAcimaPeso(true)
                setObeso1Peso(false)
                setObeso2Peso(false)
                setObeso3Peso(false)
            }else if(imc <= 34.9){
                setAbaixoPeso(false)
                setMedioPeso(false)
                setAcimaPeso(false)
                setObeso1Peso(true)
                setObeso2Peso(false)
                setObeso3Peso(false)
            }else if(imc <= 39.9){
                setAbaixoPeso(false)
                setMedioPeso(false)
                setAcimaPeso(false)
                setObeso1Peso(false)
                setObeso2Peso(true)
                setObeso3Peso(false)
            }
            else if(imc >= 40){
                setAbaixoPeso(false)
                setMedioPeso(false)
                setAcimaPeso(false)
                setObeso1Peso(false)
                setObeso2Peso(false)
                setObeso3Peso(true)
            }
            
        }




        
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
            <button type="button" onClick={() => {MostrarIMC();}}>Calcular</button>
            
        </form> 
        <h3>Resultado</h3>
        <p>Seu IMC é de:</p>
        {resultado !== null ? (
            <p>{resultado}</p>

            
        ): (<h2></h2>)}
        {abaixoPeso ? (
            <p>Abaixo do peso</p>
        ) : ''}
        {medioPeso ? (
            <p>média do peso</p>
        ) : ''}
        {acimaPeso ? (
            <p>acima do peso</p>
        ) : ''}
        {obeso1Peso ? (
            <p>obeso tipo 1</p>
        ) : ''}
        {obeso2Peso ? (
            <p>obeso tipo 2</p>
        ) : ''}
        {obeso3Peso ? (
            <p>obeso tipo 3</p>
        ) : ''}
        </>
        
    : <p>Clique acima Para calcular o IMC</p>} 
    </header>
    </>
    )
}

export default Header;