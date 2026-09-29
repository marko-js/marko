// items.ts
function itemsFor(q) {
	return [
		1,
		2,
		3
	].map((id) => ({
		id,
		label: `${q}${id}`
	}));
}

// tags/row.marko
const $template$1 = "<p> <button> </button></p>";
const $walks$1 = "D b D m";
const $clicks = /*@__PURE__*/ _fill_let("__tests__/tags/row.marko0", "clicks/6", ($scope) => _text($scope["#text/2"], $scope.clicks));
const $setup__script = _script("__tests__/tags/row.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$clicks($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $for_content__item_label = ($scope, item_label) => $input_label($scope["#childScope/0"], item_label);
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $else_content__for = /*@__PURE__*/ _for_of("#div/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $else_content__items = ($scope, items) => $else_content__for($scope, [items, "id"]);
const $else_content__search_q = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => $else_content__items($scope, itemsFor($scope._.search_q)));
const $else_content__setup = $else_content__search_q;
const $pattern2 = ($scope, $pattern) => {
	$search_q($scope, $pattern[0]?.q);
	$issues($scope, $pattern[1]);
};
const $search_q = /*@__PURE__*/ _const("search_q", $else_content__search_q);
const $if = /*@__PURE__*/ _if("#text/0", "<p>invalid</p>", 0, 0, "<div></div>", " ", $else_content__setup);
const $issues = ($scope, issues) => $if($scope, issues ? 0 : 1);
const $global_search = /*@__PURE__*/ _global_join("search", "__tests__/template.marko_0_$global_search#5/global", ($scope, $global_search) => $pattern2($scope, $scope.$global.search));
function $setup($scope) {
	$global_search($scope, $scope.$global.search);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
