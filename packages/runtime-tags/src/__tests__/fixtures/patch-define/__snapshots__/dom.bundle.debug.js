// template.marko
const $thing_content__walks = "D%c%l", $thing_content__template = "<em><!> <!></em>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>x</div>`)($thing_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($thing_content__walks);
const $thing_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/1"], $scope._.input_title));
const $thing_content__setup = /*@__PURE__*/ _child_setup($thing_content__input_title);
const $thing_content__attrs_x = ($scope, attrs_x) => _text($scope["#text/0"], attrs_x);
const $thing_content__$params = ($scope, $params2) => $thing_content__attrs($scope, $params2[0]);
const $thing_content__attrs = ($scope, attrs) => $thing_content__attrs_x($scope, attrs.x);
function $setup($scope) {
	$thing_content__setup._($scope["#childScope/0"], $scope);
}
const $input_n = ($scope, input_n) => $thing_content__attrs_x($scope["#childScope/0"], input_n);
const $input_cls__OR__input_on = /*@__PURE__*/ _or(8, ($scope) => _attr_class($scope["#div/1"], [$scope.input_cls, { on: $scope.input_on }]));
const $input_cls = /*@__PURE__*/ _const("input_cls", $input_cls__OR__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_cls__OR__input_on);
const $input_color = ($scope, input_color) => _attr_style_item($scope["#div/1"], "color", input_color);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_n($scope, input.n);
	$input_cls($scope, input.cls);
	$input_on($scope, input.on);
	$input_color($scope, input.color);
};
const $input_title__closure = /*@__PURE__*/ _closure($thing_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
