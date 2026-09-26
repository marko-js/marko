// template.marko
const $template = "<select><option value=a>A</option><!></select>";
const $walks = " Db%l";
const $await_content__v = ($scope, v) => {
	_attr($scope["#option/0"], "value", v);
	_text($scope["#text/1"], v);
};
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "<option value=b>placeholder b</option>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<option>async <!></option>", " Db%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("b", 1));
};
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	_attr_select_value_default($scope, "#select/0", "b");
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
