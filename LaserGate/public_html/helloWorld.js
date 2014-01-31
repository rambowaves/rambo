/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    //Enable swiping...
    $("div.box").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount) {
            $('#hello').text("You swiped " + direction + " for " + distance + " pixels");
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0
    });
});

function draw(width, height, cols, rows) {
    var y = height/rows;
    var x = width/cols;
    var i=y;
   
}
