// template.marko
const $template = "<div>content</div>";
const $walks = " b";
const $setup = () => {};
const $input_x__OR__input_fallback = /*@__PURE__*/ _or(7, /*@__PURE__*/ _render(($scope) => _attr($scope["#div/0"], "lang", $scope.input_x ? "en" : $scope.input_fallback)));
const $input_x__render = /*@__PURE__*/ _render(($scope) => {
	_attr($scope["#div/0"], "title", $scope.input_x ? "active" : "idle");
	_attr_class($scope["#div/0"], $scope.input_x ? "on" : "off");
	_attr($scope["#div/0"], "data-and-dyn", $scope.input_x && "on");
	_attr($scope["#div/0"], "data-or", $scope.input_x || "fallback");
});
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => {
	$input_x__render($scope);
	$input_x__OR__input_fallback($scope);
});
const $input_y__OR__input_s = /*@__PURE__*/ _or(10, /*@__PURE__*/ _render(($scope) => _attr_style($scope["#div/0"], $scope.input_y ? "color:red" : $scope.input_s)));
const $input_y__render = /*@__PURE__*/ _render(($scope) => _attr($scope["#div/0"], "data-n", $scope.input_y ? 1 : 2));
const $input_y = /*@__PURE__*/ _const("input_y", ($scope) => {
	$input_y__render($scope);
	$input_y__OR__input_s($scope);
});
const $input_z__OR__input_fallback = /*@__PURE__*/ _or(8, /*@__PURE__*/ _render(($scope) => _attr($scope["#div/0"], "data-and-expr", $scope.input_z && $scope.input_fallback)));
const $input_z__render = /*@__PURE__*/ _render(($scope) => {
	_attr($scope["#div/0"], "aria-hidden", $scope.input_z ? true : null);
	_attr($scope["#div/0"], "data-and", $scope.input_z && "true");
	_attr($scope["#div/0"], "data-or-dyn", $scope.input_z || "q");
	_attr($scope["#div/0"], "data-nullish-dyn", $scope.input_z ?? "q");
});
const $input_z = /*@__PURE__*/ _const("input_z", ($scope) => {
	$input_z__render($scope);
	$input_z__OR__input_fallback($scope);
});
const $input_fallback = /*@__PURE__*/ _const("input_fallback", ($scope) => {
	$input_x__OR__input_fallback($scope);
	$input_z__OR__input_fallback($scope);
});
const $input_s__render = /*@__PURE__*/ _render(($scope) => _attr($scope["#div/0"], "data-nullish", $scope.input_s ?? "none"));
const $input_s = /*@__PURE__*/ _const("input_s", ($scope) => {
	$input_s__render($scope);
	$input_y__OR__input_s($scope);
});
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
	$input_z($scope, input.z);
	$input_fallback($scope, input.fallback);
	$input_s($scope, input.s);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
