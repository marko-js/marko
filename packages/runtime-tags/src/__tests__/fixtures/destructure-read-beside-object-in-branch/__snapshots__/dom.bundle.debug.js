// template.marko
const $template = "<!><!><button>x</button>";
const $walks = "b%b b";
const $if_content__todo = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.todo?.id + JSON.stringify($scope._.todo)));
const $if_content__setup = $if_content__todo;
const $todo = /*@__PURE__*/ _let("todo/5", $if_content__todo);
const $input_todo = $todo;
const $if = /*@__PURE__*/ _if("#text/0", "<div> </div>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$todo($scope, null);
	$show($scope, false);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_todo($scope, input.todo);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
