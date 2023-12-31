import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import './Register.css'
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {

    const[displayName, setDisplayName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const[error, setError] = useState("")

    const{createUser, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password,
           
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() =>{
        if(authError){
            setError(authError)
        }
    },[authError])
  return (
    <div className="register">
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} type="text" name="displayname" required placeholder="Nome do usuário"/>
            </label>

            <label>
                <span>E-mail:</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder="E-mail do usuário"/>
            </label>

            <label>
                <span>Senha:</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required placeholder="Senha do usuário"/>
            </label>

            <label>
                <span>Confirme sua senha:</span>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" required placeholder="Repita sua senha"/>
            </label>

            <label>
                <span>Telefone:</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" name="phone" required placeholder="Telefone" />
            </label>
            {!loading &&<button className="btn">Cadastrar</button>}
            {loading && <button className="btn" disable>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
            
            
        </form>
    </div>
  )
}

export default Register