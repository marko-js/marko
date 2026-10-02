// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $p__script = _script("__tests__/template.marko_0_p#4", ($scope) => _attrs_script($scope, "#div/0"));
const $p = ($scope) => {
	_attrs_content($scope, "#div/0", $scope.o);
	$p__script($scope);
};
const $o = /*@__PURE__*/ _const("o", $p);
const $input_attrs = $o;
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
