# Onde Tem

[![Build Status](https://dev.azure.com/apgomes88/Onde%20Tem/_apis/build/status/anapaulagomes.onde-tem?branchName=master)](https://dev.azure.com/apgomes88/Onde%20Tem/_build/latest?definitionId=5&branchName=master)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1bea608d-170b-4713-aebc-4c7c2f5bad4c/deploy-status)](https://app.netlify.com/sites/ondetem/deploys)

Para atualizar esse site você precisa ter o [Hugo](https://gohugo.io/getting-started/quick-start/) instalado.
Depois de ter o ambiente preparado, siga as instruções para [configuração do tema](https://gohugo.io/themes/installing-and-using-themes/#install-a-single-theme). Nós estamos usando o [hugo-creative-portfolio-theme](https://themes.gohugo.io/hugo-creative-portfolio-theme/).

### Como adicionar um novo produto

Dentro da pasta do site, execute:

```
hugo new produtos/tapioca.md
```

Agora basta editar o arquivo `content/produtos/tapioca.md` (perceba que todos os posts serão criados dentro da pasta `content`).

O que mais você precisa saber:

Por padrão, o conteúdo do seu arquivo terá essa cara:

```
---
title: "Tapioca"
date: 2019-06-29T09:25:06+02:00
draft: true
---
```

O seu recém criado post será um rascunho por padrão.

Para adicionar uma imagem, mostrar apenas ela ou mudar a ordem que ela aparece no site, adicione as seguintes configurações:

```
image: "img/produtos/tapioca.jpg"
showonlyimage: false
weight: 0
```

Repare que a imagem `tapioca.jpg` deverá existir na pasta `static/img/produtos/`.

### Rodando o servidor

```
hugo server
```

Para rodar o servidor mostrando os rascunhos execute:
 

```
hugo server -D
```

Divirta-se: http://localhost:1313

### Visualizando a página 404.html localmente

Acesse: http://localhost:1313/404.html

## Bônus

Sugestão de editores para markdown:

* Typora
* VS Code
