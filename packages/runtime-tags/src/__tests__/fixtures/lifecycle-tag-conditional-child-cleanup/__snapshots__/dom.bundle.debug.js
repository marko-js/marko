// tags/child.marko
const $template$1 = "<p>child</p>";
const $walks$1 = "b";
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mounted";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "Destroyed";
	}
}));
const $setup$1 = $setup__script;
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b", $setup$1);

// template.marko
const $template = "<div id=ref>initial</div><button id=toggle>Toggle</button><!><!>";
const $walks = "b b%c";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#text/1", $template$1, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/2", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
