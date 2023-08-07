function Login() {
    return ( 
        <div class="form-container">
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="username">Nome de Usuário</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
    <div class="forgot-password">
      <a href="#">Esqueceu a senha?</a>
    </div>
    <div class="create-account">
      <a href="#">Criar conta</a>
    </div>
  </div>
     );
}

export default Login;