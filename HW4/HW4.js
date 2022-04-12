var startTime;
var endTime;
var s = 0;

$(document).ready(function () {
    $("input").click(function () {
        startTime = new Date().getTime();// 毫秒
        createCode();
        setInterval("createCode()", "1000");
        document.addEventListener('keydown', deleteCode);
        document.setInterval(endGame, 1000);
    });
});

//建立隨機字母
function createCode() {
    let num = [];
    let word = gettime() * 1.5;
    for (s; s < word - s; s++) {
        for (let i = 0; i < 6; i++) {
            num[i] = Math.floor(Math.random() * 26);
        }
        for (let i = 0; i < 6; i++) {
            let newCode = document.createElement("img");
            newCode.src = "img/" + num[i] + ".jpg";
            $(".race")[i].append(newCode);
        }
    }
    moveCode();
};

function moveCode() {
    $(".race").find("img").animate({ left: "95%" }, 5000);
}

function gettime() {
    endTime = new Date().getTime();// 毫秒
    return (endTime - startTime) / 1000;// 秒
}

function deleteCode(key) {
    let del_code = document.createElement("img");
    del_code.src = "img/" + (key.keyCode - 65) + ".jpg";
    for (var i = 0; i < 6; i++) {
        var last = $(".race")[i].children[0];
        if (del_code.src == last.src) {
            $(".race")[i].removeChild(last);
            break;
        }
    }
    console.log(last);
}

function endGame(s) {
    if (s == true) {
        return true;
    }
    else {
        for (var j = 0; j < 6; j++) {
            var loc = $(".race")[j].children[0];
            if (loc.style.left >= "95%") {
                alert("你輸了");
                return true;
            }
        }
        return false;
    }
}
