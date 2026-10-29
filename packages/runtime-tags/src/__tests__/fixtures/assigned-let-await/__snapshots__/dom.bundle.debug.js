// template.marko
const $template = "<button>set</button><!><!>";
const $walks = " b%c";
const $await_content__input_w = /*@__PURE__*/ _closure_get("input_w/7", ($scope) => _text($scope["#text/1"], $scope._.input_w), 0, "__tests__/template.marko_1_input_w#0:5/subscribe");
const $await_content__setup = $await_content__input_w;
const $await_content__r = ($scope, r) => _text($scope["#text/0"], r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<p><!> <!></p>", "D%c%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $x = /*@__PURE__*/ _let("x/6", ($scope) => $await_promise($scope, Promise.resolve($scope.x)));
const $input_v = $x;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, "z");
}));
function $setup($scope) {
	$await_content($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($await_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
