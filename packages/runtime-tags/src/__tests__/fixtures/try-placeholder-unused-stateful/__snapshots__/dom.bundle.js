// template.marko
const $placeholder_content = /*@__PURE__*/ _content("a1", " loading", 0, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("placeholder mounted");
	},
	onDestroy: function() {
		console.log("placeholder destroyed");
	}
})));
pendingEnabled && (_resumed.a1 = $placeholder_content);
