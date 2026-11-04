// template.marko
const $template = "<p>picked <!></p><div class=from></div><div class=step></div>";
const $walks = "Db%l b b";
const $for_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$picked($scope._, $scope["#LoopKey"]);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__setup__script($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$picked($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__setup__script($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $picked = _let("picked/6", ($scope) => _text($scope["#text/0"], $scope.picked));
function $setup($scope) {
	$picked($scope, -1);
}
const $for = /*@__PURE__*/ _for_to_unkeyed("#div/1", "<button> </button>", " D ", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_until_unkeyed("#div/2", "<button> </button>", " D ", $for_content2__setup);
const $input_n = ($scope, input_n) => {
	$for($scope, [
		input_n,
		1,
		2
	]);
	$for2($scope, [
		input_n,
		0,
		3
	]);
};
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
