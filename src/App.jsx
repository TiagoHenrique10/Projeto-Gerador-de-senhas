import { useState } from 'react'
import Input from './components/Input'

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState()
  const [showInput, setshowInput] = useState(false)
  
  const passwordSize = showInput ? customSize : 8

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    } 
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
       <div className="app">
          <h1>Gerador de Senhas</h1>
          
          <div>
            <label htmlFor="showInput">Customisar tamanho:</label>
            <input 
            type="checkbox" 
            id="showInput"
            value={showInput}
            onChange={() => setshowInput(currentState => !currentState)} />
          </div>
          
          {showInput ? (
            <div>
              <label htmlFor="passwordSize">Tamanho:</label>
              <Input passwordSize={customSize} setPasswordSize={setCustomSize}/> 
            </div>
          ): null}

          <button onClick={generate}> Gerar senha de {passwordSize} caracteres </button>
          <button onClick={copyToClipboard}> {copyText} </button>
          <div> {password} </div>
      </div>    
  )
}

export default App
