// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $await_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/5", ($scope) => _text($scope["#text/1"], $scope.open ? "close" : "open"));
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__open($scope, !$scope.open);
}));
const $await_content__setup = ($scope) => {
	$await_content__setup__script($scope);
	$await_content__open($scope, false);
};
const $await_content__v = ($scope, v) => _text($scope["#text/2"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button><!> <!></button>", " D%c%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_value = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_value));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$await_content($scope);
};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $input_value = /*@__PURE__*/ _const("input_value", $if_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
