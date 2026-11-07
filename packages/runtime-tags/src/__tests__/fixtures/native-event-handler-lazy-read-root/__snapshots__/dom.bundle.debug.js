// template.marko
const $template = "<button class=bump>bump</button><button class=show>show</button><div class=label> </div><div class=log> </div>";
const $walks = " b bD lD l";
const $todo = /*@__PURE__*/ _let("todo/4", ($scope) => $meta($scope, $scope.todo.meta));
const $meta = /*@__PURE__*/ _const("meta", ($scope) => $meta_label($scope, $scope.meta?.label));
const $meta_label = /*@__PURE__*/ _const("meta_label", ($scope) => _text($scope["#text/2"], $scope.meta_label));
const $log = /*@__PURE__*/ _let("log/11", ($scope) => _text($scope["#text/3"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$todo($scope, {
			...$scope.todo,
			id: $scope.todo.id + 1,
			info: { tag: $scope.todo.info.tag + "!" }
		});
	});
	_on($scope["#button/1"], "click", function() {
		$log($scope, `${$scope.log}[${$scope.todo.id}:${$scope.todo.info.tag}:${$scope.todo.title}:${JSON.stringify($scope.meta)}]`);
	});
});
function $setup($scope) {
	$todo($scope, {
		id: 1,
		info: { tag: "a" },
		meta: { label: "m" },
		title: "x"
	});
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
