var CODE = "QWERTYUIOPASDFGHJKLZXCVBNM";
var codeArray = [];

//建立隨機字母
function createCode() {
    var index = parseInt(Math.random() * 26);
    return CODE.charAt(index);
};

//建立顯示label方法
function createLabel(code) {
    var label = document.createElement("label");
    label.className = "label";
    label.style.top = "50px";
    label.innerHTML = code;
    label.code = code;

    var html = document.documentElement;

    var labelX = parseInt(html.clientWidth);

    label.style.left = labelX + "px";

    return label;
}

window.onload = function () {
    document.getElementById("startBtn").disabled = false;

    //註冊鍵盤事件
    document.documentElement.onkeydown = function (event) {
        var keyCode = event.keyCode; //獲取按下的嗎
        var code = String.fromCharCode(keyCode);//A-Z
        var label = codeArray[0];
        if (label.code == code) {
            clearInterval(label.interval_id);
            label.parentNode.removeChild(label);
            codeArray.splice(0, 1);
        }
    };
};

document.addEventListener('keydown', logkey);

setInterval("addRandomChar()", "1000");//一秒跑一次
function logkey() {
    //setInterval("addRandomChar()", "1000");//一秒跑一次
    document.clearInterval();
}

function addRandomChar() {
    var word = Math.random() * 2.5;//一次創造幾個字
    for (var i = 0; i < word; i++) {
        var code = createCode();
        var label = createLabel(code);
        document.body.insertAdjacentElement("afterend", label);//輸出
        codeArray.push(label);
    }
}

function startGame() {
    var head = document.getElementById("title");
    head.textContent = "開始遊戲";//改title
}

function stopGame() {
    var head = document.getElementById("title");
    head.textContent = "遊戲結束";//改title
    for (var i = 0; i < codeArray.length; i++) {
        clearInterval(codeArray[i].interval_id);//清空
        codeArray[i].parentNode.removeChild(codeArray[i]);
    }
    codeArray = [];
    document.getElementById("startBtn").disabled = false;
}
