# rech-swagger-dist
Projeto que expõe a pasta dist da implementação do Swagger personalizada pela Rech Informática. Inclui tudo o que é necessário para servir o Swagger em uma aplicação server-side.

## Guia de utilização
1. Copiar a pasta rech-swagger-dist para a pasta destinada a servir arquivos estáticos.
2. Copiar o arquivo `api.json` contendo as especificações da documentação da API para dentro da pasta rech-swagger-ui.
3. Configurar a aplicação para servir o conteúdo da pasta rech-swagger-dist de forma estática.

Para recuperar o caminho absoluto do diretório onde os arquivos estáticos estão sendo servidos, usar o método `getAbsoluteFSPath`:
```javascript
const rechSwaggerDistPath = require("rech-swagger-dist").getAbsoluteFSPath();
```

### Arquivos personalizados
É possível personalizar o ícone da página, o logo exibido na barra superior e também adicionar arquivos com javascript e css personalizados. Para isso é necessário criar uma pasta que seja acessível através da url `/public` onde os arquivos serão salvos. Os ícones exibidos na guia e o ícone exibido na barras superior devem são de fornecimento **obrigatório** da aplicação.
- **Ícones**
    Adicionar dois arquivos de ícones `.png` na pasta `/public`. Um arquivo deve ser tamanho 16x16 e outro 32x32. Os arquivos devem ser nomeados  `favicon-16x16.png` e `favicon-32x32.png` respectivamente.
- **Logo da barra superior**
    Na pasta `/public` deve ser adicionado umarquivo `.svg` nas dimensões 140x40 nomeado `api-docs-logo.svg`.
- **Javascript e CSS personalizados**
    Na pasta `/public` adicionar os arquivos `custom-api-docs.js` e `custom-api-docs.css`.
