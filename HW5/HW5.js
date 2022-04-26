$(document).ready(function () {
    $('.btn').on('click', function () {
        // 1.簡單測試抓到資料功能
        /*$.ajax({
            url: 'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON',
            success: function (response) {
                $('.info').html('抓到資料囉!');
            },
            error: function (xhr) {
                alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
            }
        });*/

        //2.顯示json 在網頁上

        var i = 1;
        let newCode = document.createElement("img");
        newCode.src = "down.png";

        $.ajax({
            type: 'GET',
            url: 'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=420&%24format=JSON',
            dataType: 'json',
            success: function (response) {
                $.each(response, function (index, element) {
                    if (index % 21 == 0) {
                        $('.info').append(
                            $('<li>',
                                {
                                    text: [i] + '. ' + element.OriginStationName.Zh_tw
                                }),
                            $('<li>',
                                {
                                    text: ' ⇩ 耗時 : ' + element.TravelTime + '分鐘 , 票價 : ' + element.Fares[0].Price + '元'
                                }),
                            $('<li>',
                                {
                                    text: element.DestinationStationName.Zh_tw
                                }),
                            $('<p>')
                        );
                        i++;
                        console.log(index);//debug 用
                    }
                });
            },
            error: function (xhr) {
                alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
            }
        });

    });
});
