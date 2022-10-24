var wins = 0;
var loses = 0;
var randomnum = 0;
var clientpoint = 0;


function randommaker() {

    var a = Math.floor(Math.random() * (150 - 20 + 1)) + 20;
    randomnum = a
    $(".randompoint").html(randomnum)
}

function randommakerforbtn() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    $(".red").attr("value", array[Math.floor(Math.random() * array.length)]);
    $(".blue").attr("value", array[Math.floor(Math.random() * array.length)]);
    $(".yellow").attr("value", array[Math.floor(Math.random() * array.length)]);
    $(".green").attr("value", array[Math.floor(Math.random() * array.length)]);


}


function startGame() {
    randommaker()
    randommakerforbtn()
    clientpoint=0
    $(".yourpoint").html(clientpoint)
}


$(".btn").on("click", function (e) {

    clientpoint += parseInt(e.target.getAttribute("value"))
    $(".yourpoint").html(clientpoint)
    if (clientpoint === randomnum) {
        alert("you win")
        wins++
        $(".wins").html(wins)
        startGame()


    } else if (clientpoint > randomnum) {
        alert("you lost")
        loses++
        $(".loses").html(loses)
        startGame()


    }
})



startGame()