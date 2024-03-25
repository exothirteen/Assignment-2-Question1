$(document).ready(function() {
    $(".resizable-box").resizable();
    $(".draggable-box").draggable({
        containment: ".container",
        grid: [10, 10],
        stop: function(event, ui) {
            var maxTop = $(".container").height() - $(this).height();
            var maxLeft = $(".container").width() - $(this).width();
            ui.position.top = Math.min(Math.max(ui.position.top, 0), maxTop);
            ui.position.left = Math.min(Math.max(ui.position.left, 0), maxLeft);
        }
    });
    $(".droppable").droppable({
        over: function(event, ui) {
            $(this).addClass("droppable-over");
        },
        out: function(event, ui) {
            $(this).removeClass("droppable-over");
        },
        drop: function(event, ui) {
            $(this).removeClass("droppable-over").addClass("droppable-dropped").find("p").html("Dropped!");
            ui.draggable.detach().appendTo($(this));
        }
    });
    $("#autocomplete").autocomplete({
        source: ["Apple", "Banana", "Orange", "Mango", "Pineapple"]
    });
    $("#datepicker").datepicker();
    $("#slider").slider({
        min: 0,
        max: 10,
        value: 5,
        slide: function(event, ui) {
            $(".container").css("backdrop-filter", "blur(" + ui.value + "px)");
        }
    });
    $("#selectable").selectable({
        selected: function(event, ui) {
            $(ui.selected).addClass("selected-item");
        },
        unselected: function(event, ui) {
            $(ui.unselected).removeClass("selected-item");
        }
    });
    $("#accordion").accordion({
        activate: function(event, ui) {
            console.log("Accordion activated!");
            console.log(ui.newHeader);
        }
    });
    $("#show-hide").click(function() {
        $(".new-box").toggle("fold");
    });
    $("#explode").click(function() {
        $(".new-box").effect("explode");
    });
    $("#fade-in").click(function() {
        $(".new-box").fadeIn();
    });
    $("#fade-out").click(function() {
        $(".new-box").fadeOut();
    });
    $("#color-animation").click(function() {
        $(".new-box").animate({ backgroundColor: "#ff6347" }, 1000);
    });
});
