// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content2__count = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_count#1:2/setup", "#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content2__setup = $if_content2__count;
const $if_content__if = /*@__PURE__*/ _if("#text/1", "<span> </span>", "D ", $if_content2__setup);
const $if_content__items_length = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.items_length ? 0 : 1));
const $if_content__count = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_count#2/fill", "count/2", $if_content2__count);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__count($scope, 5);
}));
const $if_content__setup = ($scope) => {
	$if_content__items_length._($scope);
	$if_content__setup__script($scope);
	$if_content__count($scope, 1);
};
const $items = ($scope, items) => $items_length($scope, items.length);
const $items_length = /*@__PURE__*/ _const("items_length");
function $setup($scope) {
	$items($scope, [1, 2]);
}
const $if = /*@__PURE__*/ _if("#text/0", "<button>set</button><!><!>", " b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
