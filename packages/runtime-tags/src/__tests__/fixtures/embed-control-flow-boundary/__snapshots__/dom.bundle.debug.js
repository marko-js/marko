// template.marko
const $template = "<button id=toggle>Toggle</button><button id=cleanup>Cleanup</button><!><!>";
const $walks = " b b%c";
const $if = /*@__PURE__*/ _if("#text/2", "<div>Hello</div>", "b");
const $hide__script = _script("__tests__/template.marko_0_hide", ($scope) => _on($scope["#button/0"], "click", function() {
	$hide($scope, !$scope.hide);
}));
const $hide = /*@__PURE__*/ _let("hide/3", ($scope) => {
	$if($scope, !$scope.hide ? 0 : 1);
	$hide__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	$signal($scope, 0).onabort = () => {
		console.log("cleaned up");
	};
	_on($scope["#button/1"], "click", function() {
		document.body.innerHTML = "";
	});
});
function $setup($scope) {
	$signalReset($scope, 0);
	$hide($scope, undefined);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
