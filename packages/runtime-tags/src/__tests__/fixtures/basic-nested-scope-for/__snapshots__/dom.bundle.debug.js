// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__selected__OR__num = /* @__PURE__ */ _or(4, ($scope) => {
	_attr($scope["#button/0"], "data-selected", $scope._.selected === $scope.num);
	_attr($scope["#button/0"], "data-multiple", $scope.num % $scope._.selected === 0);
});
const $for_content__selected = /* @__PURE__ */ _for_closure("#text/0", $for_content__selected__OR__num);
const $for_content__setup = $for_content__selected;
const $for_content__num__script = _script("__tests__/template.marko_1_num", ($scope) => _on($scope["#button/0"], "click", function() {
	$selected($scope._, $scope.num);
}));
const $for_content__num = /* @__PURE__ */ _const("num", ($scope) => {
	_text($scope["#text/1"], $scope.num);
	$for_content__selected__OR__num($scope);
	$for_content__num__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__num($scope, $params2[0]);
const $selected = /* @__PURE__ */ _let("selected/1", $for_content__selected);
const $for = /* @__PURE__ */ _for_of("#text/0", "<button> </button>", " D l", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$selected($scope, 0);
	$for($scope, [[
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	]]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
