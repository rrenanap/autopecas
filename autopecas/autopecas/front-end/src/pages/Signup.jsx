import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      setSucesso("");
      return;
    }

    const userData = {
      nome,
      email,
      senha,
    };

    try {
      const response = await fetch("http://localhost:8081/api/usuario/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setSucesso("Cadastro bem-sucedido! Você pode fazer login agora.");
        setErro("");
        setUser(data);

        window.location.href = "/login"; 
      } else {
        const errorData = await response.json();
        setErro(errorData.message || "Erro ao cadastrar. Tente novamente.");
        setSucesso("");
      }
    } catch (error) {
      setErro("Ocorreu um erro ao tentar cadastrar.");
      setSucesso("");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Crie sua conta</h1>
        {erro && <div className="error-message">{erro}</div>}
        {sucesso && <div className="success-message">{sucesso}</div>}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="signup-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Digite seu email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="signup-input password-input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="signup-input"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
          <button className="signup-button" type="submit">
            Cadastrar
          </button>
        </form>
        <div className="signup-footer">
          <p>Já tem uma conta?</p>
          <a href="/login" className="login-link">
            Entre aqui
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
