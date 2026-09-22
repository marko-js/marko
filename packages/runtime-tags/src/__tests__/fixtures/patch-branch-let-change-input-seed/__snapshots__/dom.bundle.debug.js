// template.marko
const $template = "<main><p>last <!></p><!></main>";
const $walks = "Eb%l%l";
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko0", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__input_start = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__count($scope, $scope._.input_start, $valueChange($scope)));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_start._($scope);
	$if_content__setup__script($scope);
};
const $last = /*@__PURE__*/ _let("last/6", ($scope) => _text($scope["#text/0"], $scope.last));
function $setup($scope) {
	$last($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/1", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_start($scope, input.start);
	$input_show($scope, input.show);
};
const $input_start = /*@__PURE__*/ _const("input_start", $if_content__input_start);
const $valueChange = ($scope) => function(next) {
	$last($scope._, next);
};
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
