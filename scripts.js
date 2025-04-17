$(document).ready(function () {
    $("#theme-toggle").click(function () {
        $("body").toggleClass("dark-mode");
        $(this).text($("body").hasClass("dark-mode") ? " Light Mode" : " Dark Mode");
        $(".card").animate({ opacity: 0.5 }).animate({ opacity: 1 }, 4000);
    });

    $(".menu-item").hover(function () {
        $(this).css("color", "yellow");
    },
    function () {
        $(this).css("color", "white");
    });

    $(".card").click(function () {
        $(this).effect("bounce", { times: 3 }, 100);
    });

    $("#load-data").click(function () {
        $("#data-list").slideUp(300).empty();

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
            method: "GET",
            success: function (data) {
                
                $.each(data, function (index, item) {
                    $("#data-list").append("<li>" + item.title + "</li>");
                });
                $("#data-list").slideDown(5000);
            }
        });
    });

    $("#search").keyup(function () {
        var value = $(this).val().toLowerCase();
        $(".menu-item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    var menuItems = ["Home", "Tasks", "Notifications", "Settings"];
    $("#search").autocomplete({
        source: menuItems
    });

    $(".cards").sortable();
    $(".card").draggable();
    $(".card").resizable();
});
