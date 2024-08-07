export default function NombreApellidos() {
  return (
    <>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" id="nombre" maxlength="50" />
      <label for="apellidos">Apellidos:</label>
      <input type="text" name="apellidos" id="apellidos" maxlength="50" />
    </>
  );
}
