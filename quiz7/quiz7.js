var stationName = ['八里', '三芝', '土城', '大安福州山', '坪林'];
var stationNo = ['C0AD1', 'C0AD0', 'C0AD4', '318', '01A17'];
var recTime = ['202204271600', '202204271600', '202204271600', '202204271602', '201911130140'];
var rain = ['0', '0', '0', '0', '0'];

function myFunction() {
    var y, m, d, h, mi;
    y = recTime[0] / 100000000 | 0;
    m = recTime[0] % 100000000 / 1000000 | 0;
    d = recTime[0] % 1000000 / 10000 | 0;
    h = recTime[0] % 10000 / 100 | 0;
    mi = recTime[0] % 100 | 0;
    document.getElementById('contain').innerHTML = stationName[0] + ' (' + stationNo[0] + ') ';
    document.getElementById('contain2').innerHTML = y + '年' + m + '月' + d + '日' + h + '點' + mi + '分';
    document.getElementById('contain3').innerHTML = '及時雨量' + rain[0];
}
