// template.marko
const $template = "<a href=/next>go <!></a>";
const $walks = " Db%l";
const $go__script = _script("__tests__/template.marko_0_go#2", ($scope) => _on($scope["#a/0"], "click", $scope.go));
const $go = _action("go/2", "__tests__/template.marko_0_go#2/action", ($scope) => {
	$go_pending($scope, $scope.go?.pending);
	$go__script($scope);
});
const $go_pending = /*@__PURE__*/ _const("go_pending", ($scope) => _text($scope["#text/1"], $scope.go_pending));
function $setup($scope) {
	$go($scope, void 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
