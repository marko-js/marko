// template.marko
const $template = "<main><h1> </h1><p>Last <!></p><!></main>";
const $walks = "E lDb%l%l";
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko0", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__handler = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__count($scope, 0, $scope._.handler));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, $scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__handler._($scope);
	$if_content__setup__script($scope);
};
const $last = /*@__PURE__*/ _let("last/7", ($scope) => _text($scope["#text/1"], $scope.last));
const $handler2 = /*@__PURE__*/ _let("handler/8");
function $setup($scope) {
	$last($scope, 0);
	$handler2($scope, $handler($scope));
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/2", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
function $handler($scope) {
	return (next) => {
		$last($scope, next);
	};
}
_resume("__tests__/template.marko_0/handler", $handler);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
