import React, { useState } from "react";

function RegisterPage() {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState(0)
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
/*   const [confirmPassword, setConfirmPassword] = useState("") */

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor
    const newUser = {
      nombre,
      apellido,
      telefono,
      correo,
      password
    }
    console.log(newUser)
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-4">
                <h1>Regístrate</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa tus nombres"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      // Verificar si la entrada solo contiene caracteres
                      if (!inputValue || /^[A-Za-z\s]+$/.test(inputValue)) {
                        setNombre(inputValue);
                      }
                    }}
                    value={nombre}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa tus apellidos"
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      // Verificar si la entrada solo contiene caracteres
                      if (!inputValue || /^[A-Za-z\s]+$/.test(inputValue)) {
                        setApellido(inputValue);
                      }
                    }}
                    value={apellido}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="Ingresa un numero de telefono"
                    onChange={(e) => {
                      const validatedValue = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 11);
                      setTelefono(validatedValue);
                    }}
                    value={telefono}


                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Ingresa un correo"
                    onChange={(e) => {
                      setCorreo(e.target.value);
                    }}
                    value={correo}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                </div>
{/*                 <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                </div> */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Registrarse</button>
                </div>
              </form>
              <div className="text-center mt-3">
                <a href="/">Volver al Inicio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
