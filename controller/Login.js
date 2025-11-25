import { pool } from "../DataBase/Conexion.js";

export async function Login(req, res) {

  const { Email, Contrasena } = req.body;

  try {

    // Buscar usuario
    const sql = await pool.query(
      "SELECT * FROM usuarios WHERE Email = ?",
      [Email]
    );


    console.log(Email)
    // Si no existe el usuario
    if (typeof sql[0][0] != 'object') {
      return res.status(400).json({ mensaje: "Usuario no registrado." });
    }

    const usuario = sql[0][0];

    // Validar contraseña
    if (usuario.Contrasena != Contrasena) {
      return res.status(401).json({ mensaje: "Usuario o contraseña incorrectos." });
    }

    // Eliminar contraseña antes de enviarla al frontend
    delete usuario.Contrasena;

    return res.status(200).json({
      mensaje: "Inicio de sesión exitoso",
      usuario
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Ha ocurrido un error inesperado" });
  }

}
