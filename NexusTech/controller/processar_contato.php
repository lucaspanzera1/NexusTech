<?php
include '../model/conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    $sql = "INSERT INTO contatos (nome, email, telefone, assunto, mensagem) VALUES ('$nome', '$email', '$telefone', '$assunto', '$mensagem')";

    if ($conn->query($sql) === TRUE) {
        echo "<script type=\"text/javascript\">alert(\"Mensagem enviada!\");</script>";
        header("refresh: 0.5; url=../view/contato.php");
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
