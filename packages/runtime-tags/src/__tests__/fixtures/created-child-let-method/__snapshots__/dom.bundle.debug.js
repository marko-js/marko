// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__api._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__api = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_api($scope["#childScope/0"], $scope._.api));
const $api2 = /*@__PURE__*/ _const("api");
function $setup($scope) {
	$api2($scope, { wrap: $api });
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
function $api(v) {
	return "[" + v + "]";
}
_resumed["__tests__/template.marko_0/api"] = $api;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

// tags/outer.marko
const $template = "<button>plain</button><section> </section>";
const $walks = " bD l";
const $input_label__OR__a = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.a.wrap($scope.input_label)));
const $a = /*@__PURE__*/ _let("a/6", $input_label__OR__a);
const $input_api = $a;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, { wrap: (v) => v });
}));
const $setup = $setup__script;
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__a);
const $input = ($scope, input) => {
	$input_api($scope, input.api);
	$input_label($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
