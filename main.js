//Rating with circles
var ratingNumber;
$(".circle").click(function() {
    if ($("div.circle.chosen").length > 0) {
        //There is a rating already chosen
        if ($(this).hasClass("chosen")) {
            $(this).removeClass("chosen");
            ratingNumber = 0;
        } else {
            $("div.circle.chosen").removeClass("chosen");
            $(this).addClass("chosen")
            ratingNumber = $(this).text();
        }
    } else {
        //No rating chosen yet
        $("button").removeClass("error");
        $("button").text("SUBMIT");
        ratingNumber = $(this).text();
        $(this).addClass("chosen");
    }
});
//Submitting
$("button").click(function() {
    if (ratingNumber > 0) {
        $("div.rating").addClass("hide");
        $("div.thank_you").removeClass("hide");
        $("p.output").text("You selected "+ ratingNumber +" of 5")
    } else {
        $("button").addClass("error");
        $("button").text("Please rate!");
    }
});