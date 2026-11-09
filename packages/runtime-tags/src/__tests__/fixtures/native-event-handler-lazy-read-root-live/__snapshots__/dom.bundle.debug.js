// template.marko
const $template = "<button class=show>show</button><div> </div>";
const $walks = " bD l";
const $todo__script = _script("__tests__/template.marko_0_todo#2", ($scope) => console.log(JSON.stringify($scope.todo)));
const $todo = /*@__PURE__*/ _let("todo/2", ($scope) => {
	$open($scope, $scope.todo.open);
	$todo__script($scope);
});
const $open__script = _script("__tests__/template.marko_0_open#4", ($scope) => _on($scope["#button/0"], "click", $scope.open ? () => {
	$log($scope, `${$scope.log}[${$scope.todo.id}]`);
} : undefined));
const $open = /*@__PURE__*/ _const("open", $open__script);
const $log = /*@__PURE__*/ _let("log/3", ($scope) => _text($scope["#text/1"], $scope.log));
function $setup($scope) {
	$todo($scope, {
		id: 1,
		open: true
	});
	$log($scope, "");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
