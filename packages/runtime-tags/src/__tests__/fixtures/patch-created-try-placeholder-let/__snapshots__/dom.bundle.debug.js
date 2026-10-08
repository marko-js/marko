// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading");
const $try_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/2", ($scope) => _text($scope["#text/1"], $scope.open ? "close" : "open"));
const $try_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$try_content__open($scope, !$scope.open);
}));
const $try_content__setup = ($scope) => {
	$try_content__setup__script($scope);
	$try_content__open($scope, false);
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<button> </button>", " D ", $try_content__setup, $placeholder_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
