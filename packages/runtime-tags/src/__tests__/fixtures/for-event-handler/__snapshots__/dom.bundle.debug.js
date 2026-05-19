// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__num__script = _script("__tests__/template.marko_1_num", ($scope) => _on($scope["#button/0"], "click", function() {
	$num($scope._, $scope._.num + 1);
}));
const $for_content__num = /* @__PURE__ */ _for_closure("#text/0", $for_content__num__script);
const $for_content__setup = ($scope) => {
	$for_content__num._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for = /* @__PURE__ */ _for_to("#text/0", "<button> </button>", " D l", $for_content__setup);
const $num = /* @__PURE__ */ _let("num/1", ($scope) => {
	$for($scope, [
		$scope.num,
		0,
		1
	]);
	$for_content__num($scope);
});
function $setup($scope) {
	$num($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
