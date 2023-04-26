import React, { useEffect } from "react";
import busquedaUsuario from "./apis/busquedaUsuario";

const fetchData = async () => {
  try {
    const respuesta = await busquedaUsuario.get("/");
    console.log(respuesta);
  } catch (err) {
    console.log(err);
  }
};

// const enviarDatos = async (event) => {
//   event.preventDefault(); // Evita que la página se recargue automáticamente

//   try {
//     const nombre = localStorage.getItem("nombreUsuario");
//     const contrasena = localStorage.getItem("contrasenaUsuario");
//     const respuesta2 = await busquedaUsuario.get("/", {
//       nombre,
//       contrasena,
//     });

//     console.log("Datos enviados correctamente");
//     console.log(respuesta2.data.mensaje);
//     if (respuesta2.data.mensaje === "Usuario encontrado") {
//       //alert("Usuario encontrado");
//     } else {
//       //alert("Usuario no encontrado");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const App = () => {
  useEffect(() => {
    fetchData();
  },[]);

  // useEffect(() => {
  //   window.addEventListener("enviarDatos", enviarDatos);
  //   return () => {
  //     window.removeEventListener("enviarDatos", enviarDatos);
  //   };
  // }, []);

  return (
    <div>
      {/* <form onSubmit={(event) => window.dispatchEvent(new Event("enviarDatos"))}>
        <input type="text" name="nombre" placeholder="Nombre de usuario" />
        <input type="password" name="contrasena" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form> */}
    </div>
  );
};

export default App;
