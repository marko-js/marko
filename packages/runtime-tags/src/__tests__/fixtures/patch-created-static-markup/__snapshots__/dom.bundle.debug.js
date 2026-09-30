// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_show = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => _text($scope["#text/2"], $scope._.input_show));
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li>static</li>");
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__for($scope, [[1, 2]]);
};
const $if = /*@__PURE__*/ _if("#main/0", "<ul></ul><div> </div><p> </p>", " bD lD ", $if_content__setup);
const $input_show = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if_content__input_show($scope);
	$if($scope, $scope.input_show ? 0 : 1);
});
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
