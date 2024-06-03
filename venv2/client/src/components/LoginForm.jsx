import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setShowAlert(true);
      return;
    }
    if (password.trim() === "") {
      setShowPasswordAlert(true);
      return;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <a href="/home">Volver al inicio</a>
                <h2 className="card-title text-center">Iniciar Sesión</h2>
                <form className="sign-in-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {showAlert && (
                      <div className="alert alert-danger mt-3" role="alert">
                        Por favor, ingresa un nombre de usuario.
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPasswordAlert && (
                      <div className="alert alert-danger mt-2" role="alert">
                        Por favor, ingresa una contraseña.
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Entrar
                  </button>
                </form>
                <p className="text-center mt-3">
                  O Iniciar sesión con redes sociales
                </p>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary" type="button">
                    <i className="fab fa-facebook-f me-1"></i> Facebook
                  </button>
                  <button className="btn btn-outline-info" type="button">
                    <i className="fab fa-twitter me-1"></i> Twitter
                  </button>
                  <button className="btn btn-outline-danger" type="button">
                    <i className="fab fa-google me-1"></i> Google
                  </button>
                  <button className="btn btn-outline-dark" type="button">
                    <i className="fab fa-linkedin-in me-1"></i> LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
