# 📄 Tradutor Base64

Um aplicativo web moderno para converter entre arquivos e Base64 de forma fácil e segura. Funciona 100% no navegador, sem enviar dados para servidores.

## ✨ Funcionalidades

- ✅ **Decodificar**: Base64 → Arquivo (baixar automaticamente)
- ✅ **Codificar**: Arquivo → Base64 (copiar ou salvar)
- ✅ Interface amigável e responsiva com abas
- ✅ Suporta qualquer tipo de arquivo (imagens, PDFs, documentos, etc)
- ✅ Processamento 100% no navegador (seguro e rápido)
- ✅ Limite de 10MB de arquivo
- ✅ Drag & drop para selecionar arquivos
- ✅ Copiar Base64 para área de transferência
- ✅ Contador de caracteres em tempo real
- ✅ Design moderno com gradientes e animações
- ✅ Totalmente responsivo (funciona em mobile)

## 🚀 Como Usar

### 🔽 Abas: Decodificar (Base64 → Arquivo)

1. **Clique na aba "Decodificar"**
2. **Cole o código Base64** no campo de texto
3. **(Opcional) Defina o nome do arquivo** a ser baixado
4. **Clique em "Converter e Baixar"**
5. O arquivo será decodificado e baixado automaticamente

### 🔼 Abas: Codificar (Arquivo → Base64)

1. **Clique na aba "Codificar"**
2. **Selecione um arquivo** (clique ou arraste e solte)
3. **Copie o Base64** para área de transferência
4. **Ou salve como .txt** para guardar o código

## 📁 Arquivos do Projeto

```
leitorBase64/
├── index.html      # Página principal com abas (Decodificar/Codificar)
├── styles.css      # Estilos (CSS) - design responsivo com abas
├── script.js       # Lógica da aplicação (JavaScript puro)
└── README.md       # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design responsivo com gradientes e animações suaves
- **JavaScript**: Conversão Base64 nativa do navegador, sem dependências

## 💡 Como Funciona

### Decodificar (Base64 → Arquivo)
1. O usuário cola o código Base64 no textbox
2. O JavaScript decodifica a string Base64 usando a função `atob()`
3. Os caracteres são convertidos em bytes (Uint8Array)
4. Um Blob é criado com os dados binários
5. Uma URL temporária é gerada para o Blob
6. Um link de download é acionado automaticamente
7. O navegador abre a caixa de diálogo de download
8. A URL temporária é removida da memória

### Codificar (Arquivo → Base64)
1. O usuário seleciona um arquivo (clique ou drag & drop)
2. O FileReader lê o arquivo como ArrayBuffer
3. Converte para string binária
4. Encoda usando a função `btoa()` para gerar Base64
5. Exibe o Base64 no textbox
6. Usuário pode copiar ou salvar como .txt

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

- Limite de 10MB de texto Base64 (~10.000.000 caracteres)
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
- ✓ O limite automático de 10MB foi acionado
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
