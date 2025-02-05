<?php

    $name = addcslashes($_POST["name"]);
    $email = addcslashes($_POST["email"]);
    $project = addcslashes($_POST["project"]);
    $message = addcslashes($_POST["message"]);

    $to = "marcus.mineiro2016@gmail.com";
    $subject = "Nova mensagem de contato - Portfólio Marcos Mineiro";
    $body = "Nome: " . $name . "\nEmail: " . $email . "\nProject: " . $project . "\nMensagem: " . $message;
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo ("Mensagem enviada com sucesso!");
    } else {
        echo ("Erro ao enviar mensagem.");
    }

?>