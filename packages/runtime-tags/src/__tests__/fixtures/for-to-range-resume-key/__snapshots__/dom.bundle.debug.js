// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__end__script = _script("__tests__/template.marko_1_end", ($scope) => _on($scope["#button/0"], "click", function() {
	$end($scope._, $scope._.end + 1);
}));
const $for_content__end = /* @__PURE__ */ _for_closure("#text/0", $for_content__end__script);
const $for_content__setup = ($scope) => {
	$for_content__end._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for = /* @__PURE__ */ _for_to("#text/0", "<button>n=<!></button>", " Db%l", $for_content__setup);
const $end = /* @__PURE__ */ _let("end/1", ($scope) => {
	$for($scope, [
		$scope.end,
		2,
		1
	]);
	$for_content__end($scope);
});
function $setup($scope) {
	$end($scope, 4);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
