# rech-swagger-dist

Projeto que expõe a pasta dist da implementação do Swagger personalizada pela Rech Informática. Inclui tudo o que é necessário para servir o Swagger em uma aplicação server-side.

## Guia de utilização

1. Copiar a pasta rech-swagger-dist para a pasta destinada a servir arquivos estáticos.
2. Copiar o arquivo `api.json` contendo as especificações da documentação da API para dentro da pasta rech-swagger-ui.
3. Configurar a aplicação para servir o conteúdo da pasta rech-swagger-dist de forma estática.

Em aplicações que utilizam o gerenciador de pacotes NPM também é possível instalar esta distribuição no node modules. **Antes de instalar a biblioteca é necessário ter configurado o proxy interno do NPM. Caso ainda não esteja configurado verifique a [wiki](http://intranet/wiki/index.php/Proxy_NPM).**
A instalação pode ser feita com o comando:

    npm install rech-swagger-dist

Para recuperar o caminho absoluto do diretório onde os arquivos estáticos estão sendo servidos, usar o método `getAbsoluteFSPath`:
```javascript
const rechSwaggerDistPath = require("rech-swagger-dist").getAbsoluteFSPath();
```

#### Arquivos que devem ser fornecidos pela aplicação

A aplicação que utilizar esta distribuição  deve fornecer os ícones exibidos na guia do navegador e na barra superior da página. Os arquivos devem ser colocados em uma pasta de acesso público na aplicação.
- **Ícones**
    Adicionar dois arquivos de imagem no formato `.png`. Um arquivo deve ser tamanho 16x16 e outro 32x32. Os arquivos devem ser nomeados  `favicon-16x16.png` e `favicon-32x32.png` respectivamente.
- **Logo da barra superior**
    Adicionar um arquivo `.svg` nas dimensões 140x40 nomeado `api-docs-logo.svg`.

### Javascript e CSS personalizados

É posssível adicionar arquivos com javascript e CSS personalizados. Os arquivos são opcionais e caso utilizados devem ser colocados em uma pasta com acesso público. Os arquivos devem ter os seguintes nomes: `custom-api-docs.css` e `custom-api-docs.js`.

#### Campos dos esquemas com propriedades personalizadas

É possível adicionar propriedades personalizadas, como cor, tamanho, entre outras, aos campos dos esquemas. Com isso, podemos personalizar e destacar os campos que quisermos facilmente.

Basta informar nos campos a propriedade `customClass`. Detalhe: A classe informada deve existir em `custom-api-docs.css`.
