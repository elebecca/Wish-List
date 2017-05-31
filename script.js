/* Wish list */
function addToList(item) {

$('#items').append( "<li>"+"build a website" + "<span class='label pending'>Pending</span>"+"</li>")


}

$(document).on('click', '#add-to-list', function() {
addToList($("#item").val())
});

$(document).on('click', '.pending', function() {
	var li_node = $(this).parent(); 
	$(li_node).append("<span class='label success'>"+"Done!"+"</span>")
	$(this).remove()

});