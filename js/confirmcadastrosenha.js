document.addEventListener('DOMContentLoaded', function () {
    let params = new URLSearchParams(window.location.search);
    if (params.get('sucesso') == '1') {
        let container = document.querySelector('.container');
        let msg = document.createElement('div');
        msg.className = 'alert alert-success';
        msg.textContent = 'Senha cadastrada com sucesso!';
        container.insertBefore(msg, container.firstChild);
    }
});
