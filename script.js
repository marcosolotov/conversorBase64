// DOM Elements
const base64Input = document.getElementById('base64Input');
const fileName = document.getElementById('fileName');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const message = document.getElementById('message');
const charCount = document.getElementById('charCount');

// Event Listeners
base64Input.addEventListener('input', updateCharCount);
convertBtn.addEventListener('click', handleConvert);
clearBtn.addEventListener('click', handleClear);

// Update character count
function updateCharCount() {
    const count = base64Input.value.length;
    charCount.textContent = count.toString();
    
    if (count > 100000) {
        showMessage('Limite de 100.000 caracteres excedido', 'error');
        base64Input.value = base64Input.value.substring(0, 100000);
        charCount.textContent = '100000';
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
