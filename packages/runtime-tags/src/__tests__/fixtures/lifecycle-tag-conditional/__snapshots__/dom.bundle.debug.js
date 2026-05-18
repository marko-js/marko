// template.marko
const $template = "<!><!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
const $walks = "b%c b b";
const $if_content__x__script = _script("__tests__/template.marko_1_x", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mount " + $scope._.x;
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = "Update " + $scope._.x;
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "Destroy";
	}
}));
const $if_content__x = /* @__PURE__ */ _if_closure("#text/0", 0, $if_content__x__script);
const $if_content__setup = $if_content__x;
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	$if_content__x($scope);
	$x__script($scope);
});
const $if = /* @__PURE__ */ _if("#text/0", 0, 0, $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/4", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$x($scope, 0);
	$show($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
