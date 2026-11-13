// template.marko
const $template = "<div data-kind=pick></div><b></b><s></s><em></em>";
const $walks = " b b b b";
const $Two_content__input_title = /*@__PURE__*/ _closure_get("input_title/12", ($scope) => _text($scope["#text/0"], $scope._.input_title), 0, "__tests__/template.marko_2_input_title#0:6/subscribe");
const $Two_content__setup = $Two_content__input_title;
const $Two_content = _content_resume("__tests__/template.marko_2*content", "<strong>two <!></strong>", "Db%", $Two_content__setup);
const $One_content__input_title = /*@__PURE__*/ _closure_get("input_title/12", ($scope) => _text($scope["#text/0"], $scope._.input_title), 0, "__tests__/template.marko_1_input_title#0:6/subscribe");
const $One_content__setup = $One_content__input_title;
const $One_content = _content_resume("__tests__/template.marko_1*content", "<em>one <!></em>", "Db%", $One_content__setup);
const $input_which__OR__One__OR__Two = /*@__PURE__*/ _or(11, ($scope) => _attr_content($scope, "#div/0", $scope.input_which ? $scope.One : $scope.Two), 2);
const $One = /*@__PURE__*/ _const("One", $input_which__OR__One__OR__Two);
const $Two = /*@__PURE__*/ _const("Two", $input_which__OR__One__OR__Two);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attrs_script($scope, "#s/2");
	_attrs_script($scope, "#em/3");
});
function $setup($scope) {
	_attrs_content($scope, "#s/2", {
		__proto__: null,
		id: "proto"
	});
	_attrs_content($scope, "#em/3", { get id() {
		return "getter";
	} });
	$One($scope, { content: $One_content($scope) });
	$Two($scope, { content: $Two_content($scope) });
	$setup__script($scope);
}
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__One__OR__Two);
const $input_key__script = _script("__tests__/template.marko_0_input_key#8", ($scope) => _attrs_script($scope, "#b/1"));
const $input_key = /*@__PURE__*/ _const("input_key", ($scope) => {
	_attrs_content($scope, "#b/1", { [$scope.input_key]: "computed" });
	$input_key__script($scope);
});
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_which($scope, input.which);
	$input_key($scope, input.key);
};
const $input_title__closure = /*@__PURE__*/ _closure($One_content__input_title, $Two_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
