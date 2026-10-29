// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $for_content__uid__OR__item = _resumed["__tests__/template.marko_1_uid#0:7_item#2/patch"] = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "item", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope._.uid + "-" + $scope.item)));
const $for_content__uid = _resumed["__tests__/template.marko_1_uid#0:7/patch"] = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_uid#0:7/init", /*@__PURE__*/ _for_closure("#text/0", $for_content__uid__OR__item));
const $for_content__setup = $for_content__uid;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__uid__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $uid = /*@__PURE__*/ _let("uid/7", $for_content__uid);
const $input_id = $uid;
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
