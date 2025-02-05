<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["project"];
    $message = $_POST["message"];

    $to = "marcus.mineiro2016@gmail.com";
    $subject = "Nova mensagem de contato";
    $body = "Nome: $name\nEmail: $email\nProjeto: $project\nMensagem: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
}
?>