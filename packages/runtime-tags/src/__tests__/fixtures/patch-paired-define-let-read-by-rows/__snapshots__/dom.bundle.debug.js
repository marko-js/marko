// template.marko
const $Picker_content__walks = "b%c";
const $Picker_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($Picker_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)($Picker_content__walks);
const $for_content__sel__OR__item = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_sel#1:1_item#4/setup", 5, ($scope) => _text($scope["#text/1"], $scope.item === $scope._.sel ? "*" : ""));
const $for_content__sel = /*@__PURE__*/ _for_closure("#text/0", $for_content__sel__OR__item, 2);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Picker_content__sel($scope._, $scope.item);
}));
const $for_content__setup = ($scope) => {
	$for_content__sel._($scope);
	$for_content__setup__script($scope);
};
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	$for_content__sel__OR__item($scope);
	_text($scope["#text/2"], $scope.item);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $Picker_content__sel = _let("sel/1", $for_content__sel);
const $Picker_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button><!><!></button>", " D%b%", $for_content__setup, $for_content__$params);
const $Picker_content__setup = ($scope) => {
	$Picker_content__sel($scope, 1);
	$Picker_content__for($scope, [[1, 2]]);
};
function $setup($scope) {
	$Picker_content__setup($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
