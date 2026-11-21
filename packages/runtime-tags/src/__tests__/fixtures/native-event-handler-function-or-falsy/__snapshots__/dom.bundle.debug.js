// template.marko
const $template = "<button>one</button><button>two</button><button>three</button><button>four</button><button>five</button>";
const $walks = " b b b b b";
const $setup = ($_) => {};
const $input_x__OR__input_onClick__script = _script("__tests__/template.marko_0_input_x#7_input_onClick#9", ($scope) => _on($scope["#button/4"], "click", $scope.input_x ? $scope.input_onClick : "noop"));
const $input_x__OR__input_onClick = /*@__PURE__*/ _or(10, $input_x__OR__input_onClick__script);
const $input_x__script = _script("__tests__/template.marko_0_input_x#7", ($scope) => {
	_on($scope["#button/0"], "click", $scope.input_x ? () => {} : null);
	_on($scope["#button/1"], "click", $scope.input_x ? false : null);
	_on($scope["#button/2"], "click", $scope.input_x ? "" : undefined);
});
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => {
	$input_x__OR__input_onClick($scope);
	$input_x__script($scope);
});
const $input_count__script = _script("__tests__/template.marko_0_input_count#8", ($scope) => _on($scope["#button/3"], "click", $scope.input_count - $scope.input_count));
const $input_count = /*@__PURE__*/ _const("input_count", $input_count__script);
const $input_onClick = /*@__PURE__*/ _const("input_onClick", $input_x__OR__input_onClick);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_count($scope, input.count);
	$input_onClick($scope, input.onClick);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
