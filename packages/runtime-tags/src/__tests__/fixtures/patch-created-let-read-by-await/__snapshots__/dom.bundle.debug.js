// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__count__OR__value = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_count#1:2_value#2/setup", 3, ($scope) => _text($scope["#text/0"], $scope._.count + $scope.value));
const $await_content__count = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_count#1:2/subscribe", "count/3", $await_content__count__OR__value);
const $await_content__setup = $await_content__count;
const $await_content__value = /*@__PURE__*/ _const("value", $await_content__count__OR__value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $if_content__count__closure = /*@__PURE__*/ _closure($await_content__count);
const $if_content__count = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_count#2/fill", "count/2", $if_content__count__closure);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<span> </span>", "D ", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__count($scope, 5);
}));
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter(1, 1));
	$if_content__setup__script($scope);
	$if_content__count($scope, 1);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button>set</button><!><!>", " b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
