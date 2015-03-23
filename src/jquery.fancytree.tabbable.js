/*!
 * jquery.fancytree.tabbable.js
 *
 * Add the parent span as tabbable.
 * (Extension module for jquery.fancytree.js: https://github.com/mar10/fancytree/)
 *
 * Copyright (c) 2015, Terra Whitmeyer for Vibrant Software
 *
 * Released under the MIT license
 * https://github.com/mar10/fancytree/wiki/LicenseInfo
 *
 * @version 1.0.0
 * @date March 23 2015
 */

;(function($, undefined) {
	"use strict";
	/* extension */
	$.ui.fancytree.registerExtension({
		name: "nodetabbable",
		version: "1.0.0",
		treeInit: function(ctx){
			var tree = this, // same as ctx.tree,
				opts = ctx.options,
				extOpts = ctx.options.nodetabbable;
			this._superApply(arguments);
		},
		nodeRenderTitle: function(ctx, title) {
			var node = ctx.node,
				extOpts = ctx.options.nodetabbable;
			this._superApply(arguments);
			if(extOpts){
				$(node.span).attr("tabindex","0");
			}
		}
	});
}(jQuery));
			