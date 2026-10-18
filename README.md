# Gerador de senhas

Uma página simples para gerar senhas diretamente no navegador. Você pode escolher o tamanho da senha e quais tipos de caracteres incluir.

## Funcionalidades

- Senhas de 8 a 64 caracteres.
- Letras maiúsculas, letras minúsculas, números e caracteres especiais selecionáveis.
- Geração aleatória usando a API criptográfica do navegador (`crypto.getRandomValues`).
- Cópia da senha para a área de transferência.
- Layout responsivo, sem dependências ou instalação.

## Como usar

Como o projeto usa módulos JavaScript, execute a página por um servidor local (por exemplo, a extensão Live Server do VS Code) ou publique-a no GitHub Pages. Abrir `index.html` diretamente como arquivo pode impedir o navegador de carregar os módulos.

Clique em **Gerar senha segura** para criar outra senha e no botão ao lado da senha para copiá-la.

## Testes

Os testes automatizados usam o executor nativo do Node.js, sem bibliotecas externas. Com Node.js instalado, execute na pasta do projeto:

```bash
npm test
```

## Tecnologias e dependências

- HTML, CSS e JavaScript (ES modules).
- Node.js para executar os testes.
- O projeto não usa dependências de terceiros.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a branch `main`.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
5. Aguarde a publicação e acesse o endereço informado pelo GitHub.

## Segurança e privacidade

A senha é gerada no próprio navegador e não é enviada a um servidor por esta página. Evite compartilhar senhas geradas e verifique se está usando uma cópia confiável do projeto. A cópia para a área de transferência pode depender das permissões do navegador.

## Estrutura

```text
.
├── index.html
├── script.js
├── password.js
├── password.test.js
├── package.json
├── README.md
└── .gitignore
```

## Licença

Nenhuma licença foi definida. Se quiser permitir que outras pessoas usem, modifiquem ou distribuam o projeto, escolha e adicione uma licença ao repositório.
