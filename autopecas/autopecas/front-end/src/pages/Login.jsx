import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      senha,
    };

    try {
      const response = await fetch("http://localhost:8081/api/usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        setSucesso("Login bem-sucedido!");
        setErro("");
        localStorage.setItem("usuario", JSON.stringify(data));

        window.location.href = "/";
      } else {
        const errorData = await response.json();
        setErro(errorData.message || "Credenciais inválidas. Tente novamente.");
        setSucesso("");
      }
    } catch (error) {
      setErro("Ocorreu um erro ao tentar fazer login.");
      setSucesso("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Bem-vindo!</h1>
        {erro && <div className="error-message">{erro}</div>}
        {sucesso && <div className="success-message">{sucesso}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="login-input password-input"
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
          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
        <div className="login-footer">
          <p>Não tem uma conta?</p>
          <a href="/signup" className="register-link">
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
