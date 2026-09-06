// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__label = /*@__PURE__*/ _const("label", ($scope) => _text($scope["#text/0"], $scope.label));
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__label($scope, $scope._.input_title + "!"));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	document.querySelector("main").dataset.clicked = $scope.label;
}));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#main/0", "<p> </p><button>c</button>", "D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
