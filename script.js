$(document).ready(function() {
    // Make the "Resize me" box resizable
    $(".resizable-box").resizable();

    // Make the "Drag me" box draggable
    $(".draggable-box").draggable({
        containment: ".container", // Restrict dragging within the container
        // Adjust the grid to snap to the container edges
        grid: [10, 10], // Optional: adjust grid size if needed
        // Add a stop function to ensure the draggable is within bounds after dragging
        stop: function(event, ui) {
            // Calculate the maximum top and left position to keep the draggable within bounds
            var maxTop = $(".container").height() - $(this).height();
            var maxLeft = $(".container").width() - $(this).width();
            // Update the position if it exceeds the maximum values
            ui.position.top = Math.min(Math.max(ui.position.top, 0), maxTop);
            ui.position.left = Math.min(Math.max(ui.position.left, 0), maxLeft);
        }
    });

    // Make the "Drop here" area droppable
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

    // Initialize autocomplete for the search input
    $("#autocomplete").autocomplete({
        source: ["Apple", "Banana", "Orange", "Mango", "Pineapple"]
    });

    // Initialize datepicker for the date input
    $("#datepicker").datepicker();

    // Initialize slider for the slider element
    $("#slider").slider({
        min: 0,
        max: 10,
        value: 5,
        slide: function(event, ui) {
            $(".container").css("backdrop-filter", "blur(" + ui.value + "px)");
        }
    });

    // Make items selectable
    $("#selectable").selectable({
        selected: function(event, ui) {
            $(ui.selected).addClass("selected-item");
        },
        unselected: function(event, ui) {
            $(ui.unselected).removeClass("selected-item");
        }
    });

    // Initialize accordion
    $("#accordion").accordion({
        activate: function(event, ui) {
            console.log("Accordion activated!");
            console.log(ui.newHeader); // Log the newly activated header element
        }
    });

    // Add click event handlers for effects
     // Add click event handlers for effects
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
