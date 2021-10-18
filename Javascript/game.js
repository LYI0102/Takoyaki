var colorChange_1 = document.getElementById("mycircle1");
var colorChange_2 = document.getElementById("mycircle2");
var colorChange_3 = document.getElementById("mycircle3");
var colorChange_4 = document.getElementById("mycircle4");
var colorChange_5 = document.getElementById("mycircle5");
var colorChange_6 = document.getElementById("mycircle6");
var colorChange_7 = document.getElementById("mycircle7");
var colorChange_8 = document.getElementById("mycircle8");
var colorChange_9 = document.getElementById("mycircle9");

//倒數計時不隨著reload而重製
$(function() {
    var timer = sessionStorage.getItem('timerStation'); //讀取sessionStorage的資料
    if (!timer) {
        timer = 60 //設定需要秒數
    }
    var interval = setInterval(function() {
        timer--;
        console.log(timer);

        sessionStorage.setItem('timerStation', timer); //儲存的秒數的值
        $('#myplay').text(`剩餘秒數:${ timer } s`);
        if (timer === 0) {

            // alert('遊戲結束')
            clearInterval(interval); //停止setInterval
            sessionStorage.clear(); //刪除存取
            window.location.href = 'result.html'
        }
    }, 1000);
})


// $(function playGame() {
//     var sysTime = document.getElementById("play");
//     var gameMin = 60;
//     sysTime.innerHTML = gameMin;
//     var timer = null;
//     timer = setInterval(function() {
//         if (gameMin > 0) {
//             gameMin = gameMin - 1;
//             sysTime.innerHTML = gameMin;
//         } else {
//             clearInterval(timer);
//             alert("遊戲結束")
//         }
//     }, 1000);
// })


//設定1-9 onclick function
mycircle1.onclick = function() {
    colorChange1();
    setInterval(brown1, 5000);
    setInterval(addPicture1, 8000);
    playAudio();


}

function colorChange1() {

    // console.log(colorChange_1)
    colorChange_1.style.backgroundColor = "#efe4ac";
}
mycircle2.onclick = function() {
    colorChange2();
    setInterval(brown2, 5000);
    setInterval(addPicture2, 8000);
    playAudio();
}

function colorChange2() {

    // console.log(colorChange_2)
    colorChange_2.style.backgroundColor = "#efe4ac";
}
mycircle3.onclick = function() {
    colorChange3();
    setInterval(brown3, 5000);
    setInterval(addPicture3, 8000);
    playAudio();

}

function colorChange3() {

    // console.log(colorChange_3)
    colorChange_3.style.backgroundColor = "#efe4ac";
}
mycircle4.onclick = function() {
    colorChange4();
    setInterval(brown4, 5000);
    setInterval(addPicture4, 8000);
    playAudio();
}

function colorChange4() {

    // console.log(colorChange_4)
    colorChange_4.style.backgroundColor = "#efe4ac";
}
mycircle5.onclick = function() {
    colorChange5();
    setInterval(brown5, 5000);
    setInterval(addPicture5, 8000);
    playAudio();

}

function colorChange5() {

    // console.log(colorChange_5)
    colorChange_5.style.backgroundColor = "#efe4ac";
}
mycircle6.onclick = function() {
    colorChange6();
    setInterval(brown6, 5000);
    setInterval(addPicture6, 8000);
    playAudio();
}

function colorChange6() {

    // console.log(colorChange_6)
    colorChange_6.style.backgroundColor = "#efe4ac";
}
mycircle7.onclick = function() {
    colorChange7();
    setInterval(brown7, 5000);
    setInterval(addPicture7, 8000);
    playAudio();
}

function colorChange7() {

    // console.log(colorChange_7)
    colorChange_7.style.backgroundColor = "#efe4ac";
}
mycircle8.onclick = function() {
    colorChange8();
    setInterval(brown8, 5000);
    setInterval(addPicture8, 8000);
    playAudio();
}

function colorChange8() {

    // console.log(colorChange_8)
    colorChange_8.style.backgroundColor = "#efe4ac";
}
mycircle9.onclick = function() {
    colorChange9();
    setInterval(brown9, 5000);
    setInterval(addPicture9, 8000);
    playAudio();
}



function colorChange9() {
    // console.log(colorChange_9)
    colorChange_9.style.backgroundColor = "#efe4ac";

}



//改變顏色1-9
function brown1() {

    if (colorChange_1.style.backgroundColor = "#efe4ac") {
        colorChange_1.style.backgroundColor = "#d89621";
        // console.log(colorChange_1)
    }
}

function brown2() {

    if (colorChange_2.style.backgroundColor = "#efe4ac") {
        colorChange_2.style.backgroundColor = "#d89621";
        // console.log(colorChange_2)
    }
}

function brown3() {

    if (colorChange_3.style.backgroundColor = "#efe4ac") {
        colorChange_3.style.backgroundColor = "#d89621";
        // console.log(colorChange_3)
    }
}

function brown4() {

    if (colorChange_4.style.backgroundColor = "#efe4ac") {
        colorChange_4.style.backgroundColor = "#d89621";
        // console.log(colorChange_4)
    }
}

function brown5() {

    if (colorChange_5.style.backgroundColor = "#efe4ac") {
        colorChange_5.style.backgroundColor = "#d89621";
        // console.log(colorChange_5)
    }
}

function brown6() {

    if (colorChange_6.style.backgroundColor = "#efe4ac") {
        colorChange_6.style.backgroundColor = "#d89621";
        // console.log(colorChange_6)
    }
}

function brown7() {

    if (colorChange_7.style.backgroundColor = "#efe4ac") {
        colorChange_7.style.backgroundColor = "#d89621";
        // console.log(colorChange_7)
    }
}

function brown8() {

    if (colorChange_8.style.backgroundColor = "#efe4ac") {
        colorChange_8.style.backgroundColor = "#d89621";
        // console.log(colorChange_8)
    }
}

function brown9() {

    if (colorChange_9.style.backgroundColor = "#efe4ac") {
        colorChange_9.style.backgroundColor = "#d89621";
        // console.log(colorChange_9)
    }

}
//增加1-9圖片
function addPicture1() {
    colorChange_1.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture2() {
    colorChange_2.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture3() {
    colorChange_3.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture4() {
    colorChange_4.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture5() {
    colorChange_5.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture6() {
    colorChange_6.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture7() {
    colorChange_7.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture8() {
    colorChange_8.style.backgroundImage = 'url(../image/章魚燒001.png)';
}

function addPicture9() {
    colorChange_9.style.backgroundImage = 'url(../image/章魚燒001.png)';
    // console.log(colorChange_9.style.backgroundImage)
}
//增加音效
function playAudio() {
    var roast = new Audio('roast.mp3');
    roast.play();
    roast.volume = 0.3
}

function washAudio() {
    var wash = new Audio('wash.mp3');
    wash.play();
    wash.volume = 0.3
}



//拖曳設定參考JQuery範本
$(function dragAnddrop() {
    $(".myCircle").draggable({ // 1-9的圓圈 進行拖曳
        // helper: "clone",
    });

    $("#plate").droppable({ //設置盤子放置的地點
        accept: ".myCircle",
        drop: function(event, ui) { //給他一個事件
            // var newCircle = $(ui.helper).clone();
            // newCircle.draggable().fadeOut();
            // // console.log(newCircle.val() == 0)
            // $(this).append(newCircle);

            counterCircle(ui.draggable);


            // $(this).appendTo(newCircle);
        }
    })

});


//分數不隨著刷新而重製
function counterCircle($item) {
    let counter = parseInt(localStorage.getItem('myCounter'));

    if (!counter) {
        counter = 0; //當!counter counter = 0
    }
    $item.fadeOut(function() { //選取哪個拖曳物件進行加分
        counter = counter + 10;
        console.log(counter)
        localStorage.setItem('myCounter', JSON.stringify(counter));

        $('#score').text(` 分數:${counter}`); //顯示於html5上

    });
}



//洗清按鈕
function Reset() {
    // var a = $('#mycircle1').removeClass('myCircle');
    // a.addClass('myCircle')
    var wash = new Audio('wash.mp3');
    wash.play();
    wash.volume = 0.3
    parent.window.location.reload();
    console.log(wash)

}

// window.onbeforeunload = function() {
//     sessionStorage.getItem('myCounter') = counter
// }