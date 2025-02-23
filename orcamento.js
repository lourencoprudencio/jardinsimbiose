document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orcamentoForm'); // Seleciona o formulário pelo ID

    if (!form) {
        console.error('Erro: Formulário não encontrado. Verifica o ID "orcamentoForm" no HTML.');
        return;
    }

    console.log('Form Element:', form); // Depuração: Mostra o elemento do formulário no console

    // Continua com o resto do código apenas se o formulário existir
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/.netlify/functions/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formObject)
            });
            
            const text = await response.text(); // Lê a resposta como texto para debug
            console.log("Resposta da API:", text);
            
            const result = JSON.parse(text); // Converte para JSON APENAS se for válido
            
            if (response.ok) {
                console.log('SUCCESS!', result.message);
                document.getElementById("confirmationMessage").style.display = "block"; 
                form.reset();
            } else {
                throw new Error(result.error || "Erro desconhecido na API");
            }

        } catch (error) {
            console.error('FAILED...', error);
            alert('Erro ao enviar o orçamento: ' + error.message);
        }
    });
});