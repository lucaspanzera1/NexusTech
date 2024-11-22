<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Entre em contato! | Nexus Tech</title>
  <link rel='shortcut icon' href="../img/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="../resources/contato.css?v=<?= time() ?>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
  <link rel='shortcut icon' href="../img/favicon.png" type="image/x-icon">
</head>
</head>
<body>
<header id="sessao0">
    <a href="../index.HTML"><img src="../img/LOGO.png" alt=""></a>
    <div><a href="../index.HTML#sessao3">SERVIÇOS</a></div>
    <div><a href="quemsomos.html">EMPRESA</a></div>
    <div><a href="colaboradores.html">COLABORADORES</a></div>
</header>

<section>
  <form action="../controller/processar_contato.php" method="POST">
    <div id="quads">
      <div>
        <footer>
          <h1>Entre em contato</h1>
          <h2>Este formulário destina-se a estabelecer contato direto com nossa empresa. Estamos prontos para responder às suas perguntas, ouvir seus comentários e oferecer assistência conforme necessário. Aguardamos sua mensagem e ficamos à disposição para ajudar.</h2>
        </footer>   
      </div>
      <div id="quad2" class="inputs">
        <input type="text" name="nome" placeholder="Nome" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="text" id="telefone" name="telefone" placeholder="Telefone" maxlength="15">
      </div>
    </div>
    <div id="forms" class="inputs">
      <input type="text" name="assunto" placeholder="Assunto">
      <input type="text" id="msg" name="mensagem" placeholder="Mensagem" required>
      <button type="submit">Enviar!</button>
    </div>
  </form>
</section>

<script src="../resources/contato.js"></script>  
</body>
</html>