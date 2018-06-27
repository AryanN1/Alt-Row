"use strict";

function hasClass(obj) {
    var result = false;
    if (obj.getAttributeNode("class") != null) {
        result = obj.getAttributeNode("class").value;
    }
    return result;
}

(function($) {

    $.fn.tableColour = function() {
        var even = false;
        var table = document.getElementById("important");
        var tag = document.getElementsByTagName("table");

        for (var j = 0; j < tag.length; j++) {

            var trs = table.getElementsByTagName("tr");
            for (var i = 0; i < trs.length; i++) {
                if (!hasClass(trs[i]) && !trs[i].style.backgroundColor) {

                    var ths = trs[i].getElementsByTagName("th");

                    for (var j = 0; j < ths.length; j++) {
                        var myth = ths[j];
                        myth.className = "header";
                    }
                    var tds = trs[i].getElementsByTagName("td");
                    for (var j = 0; j < tds.length; j++) {
                        var mytd = tds[j];
                        if (!hasClass(mytd) && !mytd.style.backgroundColor) {
                            mytd.style.backgroundColor = even ? mytd.className = "even" : mytd.className = "odd";
                        }
                    }
                }
                even = !even;
            }
        }
    }
}(jQuery));