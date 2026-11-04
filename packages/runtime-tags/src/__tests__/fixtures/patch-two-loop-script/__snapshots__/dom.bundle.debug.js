// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $setup = ($_) => {};
const $for_content2__input_title = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_2_input_title#0:5/setup", "#text/1", ($scope) => _text($scope["#text/0"], $scope._.input_title), 8);
const $for_content2__setup = $for_content2__input_title;
const $for_content__input_title__script = _script_patch("__tests__/template.marko_1_input_title#0:5 >input_title", ($scope) => document.body.dataset.label = $scope._.input_title);
const $for_content__input_title = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_title#0:5/setup", "#text/0", $for_content__input_title__script, 7);
const $for_content__setup = $for_content__input_title;
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", 0, 0, $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<p> </p>", "D ", $for_content2__setup);
const $input_items2 = ($scope, input_items2) => $for2($scope, [input_items2]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_title($scope, input.title);
	$input_items2($scope, input.items2);
};
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$for_content__input_title($scope);
	$for_content2__input_title($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
