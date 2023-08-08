import "./login.css"

function Login() {
  return (
    <body id="body">
      <div class="formContainer">
        <h2 id="titulo">Login</h2>
        <form>
          <div class="form-group">
            <label for="username" id="email">Email: </label>
            <input type="text" id="emailInput" name="username" required />
          </div>
          <div class="formgGroup">
            <label for="password">Senha</label>
            <input type="password" id="passwordInput" name="password" required />
          </div>
          <div id="botaoDiv">
            <button type="submit" id="botao">Enviar</button>
          </div>
        </form>
        <div class="forgot-password">
          <a href="#">Esqueceu a senha</a>
        </div>
        <div class="create-account">
          <a href="/criarconta">Criar conta</a>
        </div>
      </div>
    </body>
  );
}
export default Login;