# Gerador de senhas

Uma página simples para gerar senhas diretamente no navegador. Você pode escolher o tamanho da senha e quais tipos de caracteres incluir.

## Funcionalidades

- Senhas de 8 a 64 caracteres.
- Letras maiúsculas, letras minúsculas, números e caracteres especiais selecionáveis.
- Geração aleatória usando a API criptográfica do navegador (`crypto.getRandomValues`).
- Cópia da senha para a área de transferência.
- Layout responsivo, sem dependências ou instalação.

## Como usar

Abra o arquivo `index.html` em um navegador. Clique em **Gerar senha segura** para criar outra senha e no botão ao lado da senha para copiá-la.

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
├── README.md
└── .gitignore
```

## Licença

Nenhuma licença foi definida. Se quiser permitir que outras pessoas usem, modifiquem ou distribuam o projeto, escolha e adicione uma licença ao repositório.
