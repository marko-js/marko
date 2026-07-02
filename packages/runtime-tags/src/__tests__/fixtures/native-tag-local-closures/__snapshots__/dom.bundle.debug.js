// template.marko
const $Child_content__walks = "b%c", $Child_content__template = "<!><!><!>";
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<button>Add</button>`)($Child_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}& b`)($Child_content__walks);
const $item_content = /* @__PURE__ */ _content_closures(_content_resume("__tests__/template.marko_3_content", " ", " b"), { i($scope) {
	_text($scope["#text/0"], $scope.i);
} });
const $for_content__item__script = _script("__tests__/template.marko_2_item", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content__item = /* @__PURE__ */ _const("item", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.item);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $Child_content__for = /* @__PURE__ */ _for_of("#text/0", "<div></div>", " b", 0, $for_content__$params);
const $Child_content__input_item = ($scope, input_item) => $Child_content__for($scope, [input_item]);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => $Child_content__input_item($scope, input.item);
const $size = /* @__PURE__ */ _let("size/2", ($scope) => {
	let $item;
	forUntil($scope.size, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content($scope, { i }) });
	});
	$Child_content__input_item($scope["#childScope/0"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$size($scope, $scope.size + 1);
}));
function $setup($scope) {
	$size($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
