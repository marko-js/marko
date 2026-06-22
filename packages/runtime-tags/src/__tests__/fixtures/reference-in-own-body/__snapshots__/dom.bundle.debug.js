// template.marko
const $Tag_content__walks = "b%c", $Tag_content__template = "<!><!><!>";
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Tag_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b0${_w0}&b`)($Tag_content__walks);
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $Tag_content2__name__script = _script("__tests__/template.marko_2_name", ($scope) => console.log(_assert_init($scope._, "name")));
const $Tag_content2__name = /* @__PURE__ */ _closure_get("name", $Tag_content2__name__script);
const $Tag_content2__setup = $Tag_content2__name;
const $Tag_content2 = /* @__PURE__ */ _content("__tests__/template.marko_2_content", 0, 0, $Tag_content2__setup);
const $Tag_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $Tag_content__input_content = ($scope, input_content) => $Tag_content__dynamicTag($scope, input_content);
const $Tag_content__setup = /* @__PURE__ */ _child_setup(($scope) => _return($scope, "A"));
const $Tag_content__$params = ($scope, $params2) => $Tag_content__input($scope, $params2[0]);
const $Tag_content__input = ($scope, input) => $Tag_content__input_content($scope, input.content);
const $name = /* @__PURE__ */ _const("name");
function $setup($scope) {
	_var($scope, "#childScope/0", $name);
	$Tag_content__setup._($scope["#childScope/0"], $scope);
	$input_content_direct($scope["#childScope/0"], $Tag_content2($scope));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
