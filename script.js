// DOM Elements - Decode Tab
const base64Input = document.getElementById('base64Input');
const fileName = document.getElementById('fileName');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const message = document.getElementById('message');
const charCount = document.getElementById('charCount');

// DOM Elements - Encode Tab
const fileInput = document.getElementById('fileInput');
const fileDropZone = document.getElementById('fileDropZone');
const base64Output = document.getElementById('base64Output');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const message2 = document.getElementById('message2');
const outputCharCount = document.getElementById('outputCharCount');
const fileInfo = document.getElementById('fileInfo');

// DOM Elements - Tabs
const tabDecode = document.getElementById('tabDecode');
const tabEncode = document.getElementById('tabEncode');
const decodeTab = document.getElementById('decodeTab');
const encodeTab = document.getElementById('encodeTab');

// Tab switching
tabDecode.addEventListener('click', () => switchTab('decode'));
tabEncode.addEventListener('click', () => switchTab('encode'));

function switchTab(tab) {
    if (tab === 'decode') {
        decodeTab.classList.add('active');
        encodeTab.classList.remove('active');
        tabDecode.classList.add('active');
        tabEncode.classList.remove('active');
    } else {
        decodeTab.classList.remove('active');
        encodeTab.classList.add('active');
        tabDecode.classList.remove('active');
        tabEncode.classList.add('active');
    }
}

// ========== DECODE TAB EVENTS ==========
base64Input.addEventListener('input', updateCharCount);
convertBtn.addEventListener('click', handleConvert);
clearBtn.addEventListener('click', handleClear);

// Update character count
function updateCharCount() {
    const count = base64Input.value.length;
    charCount.textContent = count.toString();
    
    if (count > 10000000) {
        showMessage('Limite de 10.000.000 caracteres excedido', 'error');
        base64Input.value = base64Input.value.substring(0, 10000000);
        charCount.textContent = '10000000';
    }
}

// Clear form
function handleClear() {
    base64Input.value = '';
    fileName.value = '';
    charCount.textContent = '0';
    hideMessage();
}

// Convert and download
function handleConvert() {
    const base64String = base64Input.value.trim();

    // Validation
    if (!base64String) {
        showMessage('Por favor, insira um código Base64', 'error');
        return;
    }

    try {
        // Convert Base64 to binary
        const binaryString = atob(base64String);
        const bytes = new Uint8Array(binaryString.length);
        
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Create blob
        const blob = new Blob([bytes], { type: 'application/octet-stream' });

        // Generate filename
        let downloadFileName = fileName.value.trim();
        if (!downloadFileName) {
            downloadFileName = `arquivo_${new Date().getTime()}`;
        }

        // Download file
        downloadFile(blob, downloadFileName);
        showMessage(`✓ Arquivo "${downloadFileName}" baixado com sucesso!`, 'success');

    } catch (error) {
        showMessage('Erro ao decodificar Base64. Verifique se o código é válido.', 'error');
        console.error('Erro:', error);
    }
}

// Download file function
function downloadFile(blob, filename) {
    // Create temporary URL
    const url = window.URL.createObjectURL(blob);
    
    // Create temporary link
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

// Show message
function showMessage(text, type) {
    message.textContent = text;
    message.className = `message show ${type}`;
    
    // Auto-hide after 5 seconds
    setTimeout(hideMessage, 5000);
}

// Hide message
function hideMessage() {
    message.classList.remove('show');
}

// ========== ENCODE TAB EVENTS ==========

// File input events
fileInput.addEventListener('change', handleFileSelect);
fileDropZone.addEventListener('dragover', handleDragOver);
fileDropZone.addEventListener('dragleave', handleDragLeave);
fileDropZone.addEventListener('drop', handleDrop);
copyBtn.addEventListener('click', handleCopy);
downloadBtn.addEventListener('click', handleDownloadBase64);

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    fileDropZone.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    fileDropZone.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    fileDropZone.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
        handleFileSelect();
    }
}

function handleFileSelect() {
    const file = fileInput.files[0];
    
    if (!file) return;
    
    // Check file size (10MB = 10,485,760 bytes)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        showMessage2('Arquivo muito grande! Máximo 10MB', 'error');
        fileInput.value = '';
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const arrayBuffer = e.target.result;
            const bytes = new Uint8Array(arrayBuffer);
            const binaryString = String.fromCharCode.apply(null, bytes);
            const base64String = btoa(binaryString);
            
            base64Output.value = base64String;
            outputCharCount.textContent = base64String.length;
            fileInfo.textContent = `Arquivo: ${file.name} (${formatFileSize(file.size)})`;
            
            copyBtn.disabled = false;
            downloadBtn.disabled = false;
            
            showMessage2(`✓ "${file.name}" convertido para Base64!`, 'success');
        } catch (error) {
            showMessage2('Erro ao converter arquivo', 'error');
            console.error('Erro:', error);
        }
    };
    
    reader.onerror = () => {
        showMessage2('Erro ao ler o arquivo', 'error');
    };
    
    reader.readAsArrayBuffer(file);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function handleCopy() {
    const base64Text = base64Output.value;
    
    if (!base64Text) {
        showMessage2('Nada para copiar', 'error');
        return;
    }
    
    navigator.clipboard.writeText(base64Text).then(() => {
        showMessage2('✓ Base64 copiado para área de transferência!', 'success');
    }).catch(() => {
        showMessage2('Erro ao copiar', 'error');
    });
}

function handleDownloadBase64() {
    const base64Text = base64Output.value;
    
    if (!base64Text) {
        showMessage2('Nada para salvar', 'error');
        return;
    }
    
    const blob = new Blob([base64Text], { type: 'text/plain' });
    const fileName = `base64_${new Date().getTime()}.txt`;
    downloadFile(blob, fileName);
    showMessage2('✓ Arquivo salvo com sucesso!', 'success');
}

// Show message for encode tab
function showMessage2(text, type) {
    message2.textContent = text;
    message2.className = `message show ${type}`;
    
    setTimeout(() => {
        message2.classList.remove('show');
    }, 5000);
}
