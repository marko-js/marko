// template.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $content_content__uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/1"], "id", uid);
};
const $content_content__setup = ($scope) => $content_content__uid($scope, _id($scope));
const $content_content = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<label>attr</label><input>", " b ", $content_content__setup);
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Wrap_content__content__OR__Tag = /*@__PURE__*/ _or_resume("__tests__/template.marko_3_content#4_Tag#5/init", 6, ($scope) => $Wrap_content__dynamicTag($scope, $scope.Tag, ($_) => ({ content: $scope.content })));
const $Wrap_content__Tag = /*@__PURE__*/ _const("Tag", $Wrap_content__content__OR__Tag);
const $Wrap_content__on = ($scope, on) => $Wrap_content__Tag($scope, on ? "p" : "div");
const $Wrap_content__content = /*@__PURE__*/ _const("content", $Wrap_content__content__OR__Tag);
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__$temp($scope, $params2[0]);
const $Wrap_content__$temp = ($scope, $temp) => {
	$Wrap_content__on($scope, $temp.on);
	$Wrap_content__content($scope, $temp.content);
};
const $for_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2", 0, 0, 1);
const $for_content__Body__OR__Tag = /*@__PURE__*/ _or_resume("__tests__/template.marko_2_Body#0:4_Tag#6/init", 7, ($scope) => $for_content__dynamicTag2($scope, $scope.Tag, ($_) => [{ content: $scope._.Body }]));
const $for_content__Body = /*@__PURE__*/ _for_closure("#text/0", ($scope) => {
	$Wrap_content__content($scope["#childScope/1"], $scope._.Body);
	$for_content__Body__OR__Tag($scope);
});
const $for_content__setup = $for_content__Body;
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__Tag = /*@__PURE__*/ _const("Tag", ($scope) => {
	$for_content__dynamicTag($scope, $scope.Tag, ($_) => ({ content: attrTag({ content: $content_content($scope) }) }));
	$for_content__Body__OR__Tag($scope);
});
const $for_content__item_on = ($scope, item_on) => {
	$for_content__Tag($scope, item_on ? "p" : "div");
	$Wrap_content__on($scope["#childScope/1"], item_on);
};
const $for_content__$params = ($scope, $params3) => $for_content__item_on($scope, $params3[0]?.on);
const $Body_content__uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/1"], "id", uid);
};
const $Body_content__setup = ($scope) => $Body_content__uid($scope, _id($scope));
const $Body_content = _content("__tests__/template.marko_1*content", "<label>body</label><input>", " b ", $Body_content__setup);
const $Body = /*@__PURE__*/ _const("Body");
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($Wrap_content__template), /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($Wrap_content__walks), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
