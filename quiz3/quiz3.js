const log = document.getElementById('log');

document.addEventListener('keydown',logkey);
function logkey(e){
    if(65 <= e.keyCode && e.keyCode <= 122)
    {
        log.textContent += ` ${e.key} `;
    }
}
