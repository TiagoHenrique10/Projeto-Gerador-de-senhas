export default function Input(props) {
    
    return (
        <input 
        type="number" 
        id="passwordSize" 
        placeholder='Digite o tamanho da senha'
        min={1}
        value={props.passwordSize}
        onChange={(ev) => props.setPasswordSize(+ev.target.value)}
      />
    )
}
