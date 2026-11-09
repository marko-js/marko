// template.marko
const $template = "<button class=h0>h0</button><button class=e>e</button><button class=h3>h3</button><div> </div>";
const $walks = " b b bD l";
const $data = /*@__PURE__*/ _let("data/4", ($scope) => $todo($scope, $scope.data.todo));
const $todo__script = _script("__tests__/template.marko_0_todo#5", ($scope) => _on($scope["#button/1"], "click", $scope.todo ? () => {
	$log($scope, String($scope.data.flag));
} : undefined));
const $todo = /*@__PURE__*/ _const("todo", $todo__script);
const $log = /*@__PURE__*/ _let("log/6", ($scope) => _text($scope["#text/3"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$log($scope, JSON.stringify($scope.data));
	});
	_on($scope["#button/2"], "click", function() {
		$log($scope, String($scope.data.todo.id));
	});
});
function $setup($scope) {
	$data($scope, {
		flag: 1,
		todo: { id: 1 }
	});
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
