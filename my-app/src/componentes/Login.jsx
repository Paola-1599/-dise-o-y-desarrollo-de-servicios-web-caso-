import estilos from "../estilos/Login.module.css";
import { useState } from "react";

function Login() {
  const [datos, SetDatos] = useState({});

  /* capturando datos de los inputs */
  function capturarData(e) {
    e.preventDefault();
    const { name, value } = e.target;
    SetDatos({ ...datos, [name]: value });
  }

  /* haciendo fectch al backend*/
 async function ingresar() {
   const resultado = await fetch("http://localhost:4000/login", 
      {
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify(datos)
      });

      if(!resultado.ok){
        return alert('usuario o clave incorrecta,respuesta desde el front')
      } else {
        const respuesta = await resultado.json();
        window.location.href='Logeado'
        alert('exitoso')
      }
  }

  /* ------------------------------------------------------- */
  return (
    <div className={estilos["login-container"]}>
      <form className={estilos["login-box"]}>
        <h2>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          required
          onChange={capturarData}
          name="Email"
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={capturarData}
          name="Contrasena"
          required
        />

        <button type="button" onClick={ingresar}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
