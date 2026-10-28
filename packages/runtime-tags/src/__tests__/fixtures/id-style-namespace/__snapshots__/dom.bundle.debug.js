// template.marko
const $template = "<label>field</label><input><!><!>";
const $walks = " b b%c";
const $for_content__input_color = /*@__PURE__*/ _for_closure("#text/2", ($scope) => _style_rule_item($scope["#style/0"], "--idspackages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bid-19style-19namespace-1btemplate-1amarko_0", $scope._.input_color));
const $for_content__setup = ($scope) => {
	$for_content__input_color._($scope);
	_style_shell($scope, "#style/0");
};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/1"], "id", uid);
	_attr_class($scope["#input/1"], uid);
};
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/2", "<style></style>", " ", $for_content__setup);
function $setup($scope) {
	$uid($scope, _id($scope));
	$for($scope, [
		360,
		0,
		1
	]);
}
const $input = ($scope, input) => $input_color($scope, input.color);
const $input_color = /*@__PURE__*/ _const("input_color", $for_content__input_color);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:template.marko.css
var v_template_marko_default = "input { color: var(--idspackages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bid-19style-19namespace-1btemplate-1amarko_0); }";
