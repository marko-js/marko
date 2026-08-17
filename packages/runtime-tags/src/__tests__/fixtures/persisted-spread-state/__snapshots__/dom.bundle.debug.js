// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_attrs__OR__on__script = _script("__tests__/template.marko_1_input_attrs#5_on#6", ($scope) => _attrs_script($scope, "#a/0"));
const $if_content__input_attrs__OR__on = /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_attrs", /*@__PURE__*/ _init_join("__tests__/template.marko_1_input_attrs#5/init", /*@__PURE__*/ _or(1, ($scope) => {
	_attrs($scope, "#a/0", {
		...$scope._.input_attrs,
		class: $scope._.on ? "on" : "off"
	});
	$if_content__input_attrs__OR__on__script($scope);
})), "#text/0", 0);
const $if_content__input_attrs = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_attrs__OR__on);
const $if_content__setup = ($scope) => {
	$if_content__input_attrs._($scope);
	$if_content__on._($scope);
};
const $if_content__on = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_on#6/init", "#text/0", 0, $if_content__input_attrs__OR__on);
const $on = /*@__PURE__*/ _let("on/6", $if_content__on);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<a>go</a>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_attrs($scope, input.attrs);
};
const $input_attrs = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_attrs", $if_content__input_attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
