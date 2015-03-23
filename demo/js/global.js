$(function(){
	$("#tree").fancytree({
		debugLevel: 0,
		checkbox: true,
		autoScroll: true,
		selectMode: 3,
		clickFolderMode: 2,
		generateIds: true,
		extensions: ["nodetabbable"], //my own extension to make the node span tabbable/enter key able
		nodetabbable: true,
		source: {
			url: "ajax-main.json"
		},
		init: function(event, data) {
			drawSelected(data); // catch any pre-selected nodes and draw on right
		},
		lazyLoad: function(event, data) {
			data.result = {url: "ajax-sub.json"}
		},
		select: function(event, data) {
			drawSelected(data); // redraw selected nodes on right
		},
		dblclick: function(event, data) {
			data.node.toggleSelected();
		},
		keydown: function(event, data) {
			if(event.which === 13 ) { //enter key
				if($(data.node.span).hasClass("fancytree-has-children")) {
					$("span.fancytree-expander", data.node.span).trigger("click"); //if this is a parent, trigger a click to open/close it
				} else {
					data.node.toggleSelected(); // if child only, toggle select (can space bar to toggle parent still)
				}
				return false;
			}
		}
	});
	$(document).on("click keydown", "#selected li", function() {
		var thisKey = $(this).data("nodekey");
		//change to get specific / performance issues traversing entire tree if very long? unsure
		$("#tree").fancytree("getTree").visit(function(node) {
			if(node.key === thisKey) {
				node.setSelected(false);
			}
		});
		return false;
	});
});
function drawSelected(data) {
	// Get a list of all selected nodes and create html to show on right
	var selKeys = $.map(data.tree.getSelectedNodes(), function(node){
		return "<li data-nodekey=\"" + node.key + "\" tabindex=\"0\"><span class=\"node-remove\"></span>" + node.title + "</li>";
	});
	$("#selected").html(selKeys);
}