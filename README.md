# Gerador de senhas seguras

Aplicação web estática para criar senhas aleatórias no navegador. A pessoa escolhe o tamanho da senha e quais grupos de caracteres quer incluir.

## O que a aplicação faz

- Gera senhas de 8 a 64 caracteres.
- Permite incluir letras maiúsculas, letras minúsculas, números e símbolos.
- Garante pelo menos um caractere de cada grupo escolhido.
- Usa `crypto.getRandomValues` e rejeição de valores fora do intervalo para selecionar caracteres sem viés de módulo.
- Copia a senha para a área de transferência quando o navegador permite.
- Adapta o layout a telas menores.

## Executar em uma máquina limpa

A aplicação não precisa de Python, Node.js, npm, instalação de pacotes ou servidor de aplicação. Ela é feita em HTML, CSS e JavaScript e pode ser publicada como site estático no GitHub Pages.

### Abrir localmente

Como o JavaScript usa módulos ES, sirva os arquivos por HTTP em vez de abrir `index.html` diretamente. Com Python 3 instalado, o servidor HTTP que precisamos já vem na biblioteca padrão; não instale pacotes Python.

1. Baixe o repositório pelo botão **Code → Download ZIP** no GitHub ou clone-o:

   ```bash
   git clone https://github.com/Guilhermemrqsm/GERADOR-DE-SENHAS-CURSO-04.git
   ```

2. Abra o terminal na pasta do projeto.
3. Inicie o servidor local:

   **Windows:**

   ```powershell
   py -m http.server 8000
   ```

   Se o comando `py` não existir, tente `python -m http.server 8000`.

   **macOS ou Linux:**

   ```bash
   python3 -m http.server 8000
   ```

4. Abra [http://localhost:8000](http://localhost:8000) no navegador.
5. Para parar o servidor, volte ao terminal e pressione `Ctrl+C`.

Python serve apenas os arquivos estáticos durante o desenvolvimento; a aplicação e sua lógica continuam sendo JavaScript. Também é possível usar a extensão Live Server do VS Code ou abrir a versão publicada no GitHub Pages.

## Executar os testes

Testes são opcionais para usar o site. Para executá-los, instale uma versão LTS atual do [Node.js](https://nodejs.org/en/download/) (Node.js 22 ou superior) e, na pasta do projeto, rode:

```bash
npm test
```

Não é necessário executar `npm install`: os testes usam `node:test`, que faz parte do Node.js, e o projeto não possui dependências de terceiros. Os testes cobrem o tamanho permitido, a inclusão dos grupos escolhidos e entradas inválidas.

O GitHub Actions executa essa mesma suíte automaticamente em cada push para `main` e em pull requests direcionados à `main`.

## Tecnologias e dependências

- HTML5, CSS e JavaScript com módulos ES.
- Web Crypto API do navegador para gerar números aleatórios.
- Node.js 22 ou superior apenas para executar os testes.
- Python 3 é opcional e serve apenas como servidor HTTP local; nenhum módulo Python externo é necessário.
- Nenhuma biblioteca de terceiros é usada pelo site ou pelos testes.

## Como funciona a geração

Para cada grupo selecionado, a função escolhe primeiro um caractere daquele grupo. Depois completa o tamanho solicitado com caracteres dos grupos selecionados e embaralha a senha. A função usa `crypto.getRandomValues`; se a API não estiver disponível, informa que não pode gerar uma senha segura.

## Segurança, privacidade e limitações

- A senha é gerada no navegador e não é enviada a um servidor pelo código deste projeto.
- O projeto não salva senhas nem mede se uma senha é adequada para um serviço específico.
- A cópia pode depender das permissões do navegador e do contexto seguro da página. Se falhar, a senha pode ser selecionada e copiada manualmente.
- Use a aplicação publicada por uma fonte confiável. Não compartilhe a senha gerada em locais públicos.

## Uso de IA generativa

IA generativa foi usada como apoio à implementação, à criação de testes e à revisão da documentação. As alterações foram revistas no projeto e os testes automatizados foram executados localmente.

## Publicar no GitHub Pages

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
4. Aguarde a publicação e acesse o endereço informado pelo GitHub.

## Estrutura do projeto

```text
.
├── index.html         # Interface e estilos
├── script.js          # Eventos da página
├── password.js        # Regras de geração da senha
├── password.test.js   # Testes automatizados
├── package.json       # Comando e requisito dos testes
├── .github/workflows/ # Execução automática dos testes
├── README.md
├── LICENSE
└── .gitignore
```

## Licença

Este projeto usa a licença [MIT](LICENSE). Consulte o arquivo `LICENSE` para ver os termos completos. O texto segue o modelo publicado pela [Open Source Initiative](https://opensource.org/license/mit).
