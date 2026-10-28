// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__Body__OR__Tag = /*@__PURE__*/ _or_resume("__tests__/template.marko_2_Body#0:4_Tag#4/init", 5, ($scope) => $for_content__dynamicTag($scope, $scope.Tag, ($_) => ({ content: $scope._.Body })));
const $for_content__Body = /*@__PURE__*/ _for_closure("#text/0", $for_content__Body__OR__Tag);
const $for_content__setup = $for_content__Body;
const $for_content__Tag = /*@__PURE__*/ _const("Tag", $for_content__Body__OR__Tag);
const $for_content__item_on = ($scope, item_on) => $for_content__Tag($scope, item_on ? "p" : "div");
const $for_content__$params = ($scope, $params2) => $for_content__item_on($scope, $params2[0]?.on);
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
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
