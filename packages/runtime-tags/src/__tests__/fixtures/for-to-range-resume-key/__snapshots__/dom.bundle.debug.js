// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$end($scope._, $scope._.end + 1);
}));
const $for_content__setup = ($scope) => {
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$for_content__setup__script($scope);
};
const $for = /* @__PURE__ */ _for_to("#text/0", "<button>n=<!></button>", " Db%l", $for_content__setup);
const $end = /* @__PURE__ */ _let("end/1", ($scope) => $for($scope, [
	$scope.end,
	2,
	1
]));
function $setup($scope) {
	$end($scope, 4);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
