$(document).ready(function() {
    $("#dlg_hello").dialog({
        autoOpen: false,
        show: {
            effect: "explode",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 200
        }
    });

    $("#btn_hello").button().click(function () { $("#dlg_hello").dialog("open"); });

    $("#tabs").tabs();
})