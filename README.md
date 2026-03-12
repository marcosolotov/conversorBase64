# 📄 Tradutor Base64

Um aplicativo web moderno para converter arquivos Base64 de volta ao seu formato original e fazer download automaticamente no navegador.

## ✨ Funcionalidades

- ✅ Interface amigável e responsiva
- ✅ Converte Base64 para arquivo binário
- ✅ Download automático do arquivo
- ✅ Suporta qualquer tipo de arquivo (imagens, PDFs, documentos, etc)
- ✅ Processamento 100% no navegador (seguro e rápido)
- ✅ Limite de 100.000 caracteres Base64
- ✅ Nomes de arquivo customizáveis
- ✅ Mensagens de feedback ao usuário
- ✅ Contador de caracteres em tempo real
- ✅ Design moderno com gradientes e animações
- ✅ Totalmente responsivo (funciona em mobile)

## 🚀 Como Usar

1. **Abra o arquivo `index.html` no navegador**
   - Duplo clique em `index.html` ou
   - Clique com botão direito → Abrir com → Navegador

2. **Cole o código Base64**
   - Copie o código Base64 de seu arquivo
   - Cole no campo "Cole seu código Base64 aqui"

3. **Defina o nome do arquivo (opcional)**
   - Se quiser, insira o nome desejado no campo "Nome do arquivo"
   - Exemplo: `imagem.png`, `documento.pdf`, `dados.zip`
   - Se não informar, um nome padrão será gerado automaticamente

4. **Clique em "Converter e Baixar"**
   - O arquivo será decodificado e baixado automaticamente
   - Você verá uma mensagem de sucesso

5. **Use "Limpar" para resetar os campos** (opcional)

## 📁 Arquivos do Projeto

```
leitorBase64/
├── index.html      # Página principal com a interface
├── styles.css      # Estilos (CSS) - design responsivo
├── script.js       # Lógica da aplicação (JavaScript puro)
└── README.md       # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com gradientes e animações suaves
- **JavaScript**: Conversão Base64 nativa do navegador, sem dependências

## 💡 Como Funciona

1. O usuário cola o código Base64 no textbox
2. O JavaScript decodifica a string Base64 usando a função `atob()`
3. Os caracteres são convertidos em bytes (Uint8Array)
4. Um Blob é criado com os dados binários
5. Uma URL temporária é gerada para o Blob
6. Um link de download é acionado automaticamente
7. O navegador abre a caixa de diálogo de download
8. A URL temporária é removida da memória

## 🔒 Segurança

- ✅ Processamento totalmente local (não envia dados para servidor)
- ✅ Sem cookies ou rastreamento
- ✅ Sem armazenamento de dados persistente
- ✅ Pode ser usado offline
- ✅ Sem dependências externas

## 📝 Exemplos de Uso

### Converter um PDF com "Hello World"
Cole o Base64 e defina o nome como: `hello_world.pdf`

### Converter uma imagem PNG
Cole o Base64 da imagem e defina o nome como: `imagem.png`

### Converter um arquivo ZIP
Cole o Base64 do arquivo e defina o nome como: `arquivos.zip`

## 🌐 Compatibilidade

Funciona em todos os navegadores modernos:
- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)

## 📦 Limitações

- Limite de 100.000 caracteres Base64 (proteção contra sobrecarga)
- O navegador pode ter limitações de tamanho de download dependendo das configurações
- Alguns navegadores podem pedir confirmação para download automático
- O tamanho final do arquivo é aproximadamente 75% do tamanho Base64

## 🐛 Troubleshooting

### "Erro ao decodificar Base64"
- ✓ Verifique se o código Base64 é válido
- ✓ Remova espaços em branco no início/fim
- ✓ O Base64 deve conter apenas: A-Z, a-z, 0-9, +, /, =
- ✓ Verifique se o código não foi cortado

### Arquivo não é baixado
- ✓ Verifique se o navegador permite downloads automáticos
- ✓ Desabilite bloqueadores de popup/download se houver
- ✓ Tente outro navegador
- ✓ Verifique as configurações de segurança do navegador

### Nome de arquivo contém caracteres especiais
- ✓ Use apenas caracteres alfanuméricos, hífens (-) e pontos (.)
- ✓ Inclua a extensão do arquivo (.pdf, .png, .txt, etc)
- ✓ Evite: / \ : * ? " < > |

### O contador mostra limite excedido
- ✓ O limite automático de 100.000 caracteres foi acionado
- ✓ Remova parte do código Base64 ou divida em múltiplos arquivos

## ℹ️ Informações Adicionais

- **Sem instalação**: Basta abrir o arquivo HTML
- **Sem servidor**: Funciona 100% offline
- **Rápido**: Processamento instantâneo no navegador
- **Leve**: Apenas 3 arquivos pequenos
- **Seguro**: Seus dados não saem do navegador

## 📄 Licença

Livre para uso pessoal e comercial.

## 👨‍💻 Desenvolvido com ❤️

Criado para facilitar a conversão de arquivos Base64 no navegador de forma simples e segura.
