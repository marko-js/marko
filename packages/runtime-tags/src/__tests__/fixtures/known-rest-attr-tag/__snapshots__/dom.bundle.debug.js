// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__button = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.button));
const $if_content__setup = $if_content__button;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%c", $if_content__setup);
const $for_content__button = /*@__PURE__*/ _const("button", ($scope) => {
	$for_content__if($scope, $scope.button ? 0 : 1);
	$if_content__button($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__button($scope, $params2[0]);
const $htmlInput__script = _script("__tests__/tags/child.marko_0_htmlInput", ($scope) => _attrs_script($scope, "#div/0"));
const $htmlInput = /*@__PURE__*/ _const("htmlInput", ($scope) => {
	_attrs($scope, "#div/0", $scope.htmlInput);
	$htmlInput__script($scope);
});
const $for = /*@__PURE__*/ _for_of("#div/0", "<!><!><!>", "b%c", 0, $for_content__$params);
const $buttons = ($scope, buttons) => $for($scope, [buttons]);
const $input = ($scope, input) => {
	(({ button, ...htmlInput }) => $htmlInput($scope, htmlInput))(input);
	$buttons($scope, input.button);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $button_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "one", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$buttons($scope["#childScope/0"], attrTag({
		onClick: $onClick,
		content: $button_content($scope)
	}));
	$htmlInput($scope["#childScope/0"], {});
}
function $onClick() {}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
