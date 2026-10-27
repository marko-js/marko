// template.marko
const $template = "<a id=go href=/next>go</a><p>pending <!></p><span> </span>";
const $walks = " bDb%lD l";
const $go__script = _script("__tests__/template.marko_0_go#6", ($scope) => _on($scope["#a/0"], "click", $scope.go));
const $go = _fill_resume("__tests__/template.marko_fill0", _action("go/6", "__tests__/template.marko_0_go#6/action", ($scope) => {
	$go_pending($scope, $scope.go?.pending);
	$go__script($scope);
}));
const $go_pending = /*@__PURE__*/ _const("go_pending", ($scope) => _text($scope["#text/1"], $scope.go_pending));
function $setup($scope) {
	$go($scope, void 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
