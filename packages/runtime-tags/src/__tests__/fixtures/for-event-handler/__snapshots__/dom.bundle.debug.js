// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$num($scope._, $scope._.num + 1);
}));
const $for_content__setup = ($scope) => {
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$for_content__setup__script($scope);
};
const $for = /* @__PURE__ */ _for_to("#text/0", "<button> </button>", " D l", $for_content__setup);
const $num = /* @__PURE__ */ _let("num/1", ($scope) => $for($scope, [
	$scope.num,
	0,
	1
]));
function $setup($scope) {
	$num($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
