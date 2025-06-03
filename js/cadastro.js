document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnCadastro').addEventListener('click', function () {
        const senha = document.getElementById('txtSenha').value;
        const confirmacao = document.getElementById('txtConfirmacaoSenha').value;
        if (!senha || !confirmacao) {
            alert('Preencha os campos de senha.');
            return;
        }
        if (senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        if (senha !== confirmacao) {
            alert('As senhas não coincidem.');
            return;
        }
        window.location.href = 'confirmcadastrosenha.html?sucesso=1';
    });

    const senhaInput = document.getElementById('txtSenha');
    const confirmInput = document.getElementById('txtConfirmacaoSenha');
    const toggleSenha = document.getElementById('toggleSenha');
    const toggleConfirmacao = document.getElementById('toggleConfirmacao');

    function togglePassword(input, btn) {
        if (input.type === 'password') {
            input.type = 'text';
            btn.querySelector('i').classList.remove('bi-eye');
            btn.querySelector('i').classList.add('bi-eye-slash');
        } else {
            input.type = 'password';
            btn.querySelector('i').classList.remove('bi-eye-slash');
            btn.querySelector('i').classList.add('bi-eye');
        }
    }
    toggleSenha.addEventListener('click', function () {
        togglePassword(senhaInput, toggleSenha);
    });
    toggleConfirmacao.addEventListener('click', function () {
        togglePassword(confirmInput, toggleConfirmacao);
    });
});
