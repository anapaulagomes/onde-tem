---
title: "Sugira um Produto"
date: 2019-08-05T13:02:53+02:00
draft: false
image: "img/sugira-um-produto.png"
showonlyimage: true
weight: 0
---

<!--more-->

<h4>Sentindo falta de algo? Então conta pra gente.</h4>

<form id="contact-form" class="contact-form form" method="post" action="https://formspree.io/queroesseproduto@ondetem.de">
    <div class="controls">
        <div class="form-group">
            <label for="name">Produto *</label>
            <input type="text" name="product" id="product" placeholder="Qual produto você gostaria de ver aqui?" required="required" class="form-control">
        </div>
        <div class="form-group">
            <label for="message">Sugestões, dúvidas ou elogios?</label>
            <textarea rows="4" name="message" id="message" required="required" class="form-control"></textarea>
        </div>
        <div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Caso queira receber uma resposta nossa" class="form-control">
        </div>
        <input type="submit" value="Send" class="btn btn-ghost">
        </div>
    </div>
</form>
