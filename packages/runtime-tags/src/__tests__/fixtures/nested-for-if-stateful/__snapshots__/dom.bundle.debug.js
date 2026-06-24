// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $else_content__count = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/1"], $scope._.count));
const $else_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__editing($scope._, true);
}));
const $else_content__setup = ($scope) => {
	$else_content__count._($scope);
	$else_content__setup__script($scope);
};
const $if_content__counts__OR__count__script = _script("__tests__/template.marko_2_counts_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$counts($scope._._, [
		...$scope._._.counts.slice(0, $scope._["#LoopKey"]),
		$scope._.count + 1,
		...$scope._._.counts.slice($scope._["#LoopKey"] + 1)
	]);
	$for_content__editing($scope._, false);
}));
const $if_content__counts__OR__count = /*@__PURE__*/ _or(2, $if_content__counts__OR__count__script);
const $if_content__counts = /*@__PURE__*/ _closure_get("counts", $if_content__counts__OR__count, ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__counts($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_text($scope["#text/1"], $scope._.count + 1);
	$if_content__counts__OR__count($scope);
});
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<button>Confirm <!></button>", " Db%l", $if_content__setup, "<button>Increment <!></button>", " Db%l", $else_content__setup);
const $for_content__editing = /*@__PURE__*/ _let("editing/4", ($scope) => $for_content__if($scope, $scope.editing ? 0 : 1));
const $for_content__setup = ($scope) => $for_content__editing($scope, false);
const $for_content__$params = ($scope, $params2) => $for_content__count($scope, $params2[0]);
const $for_content__count = /*@__PURE__*/ _const("count", ($scope) => {
	$if_content__count($scope);
	$else_content__count($scope);
});
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%c", $for_content__setup, $for_content__$params);
const $counts__closure = /*@__PURE__*/ _closure($if_content__counts);
const $counts = /*@__PURE__*/ _let("counts/1", ($scope) => {
	$for($scope, [$scope.counts]);
	$counts__closure($scope);
});
function $setup($scope) {
	$counts($scope, [
		0,
		0,
		0
	]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
