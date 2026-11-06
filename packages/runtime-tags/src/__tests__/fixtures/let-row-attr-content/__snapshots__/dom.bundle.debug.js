// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $row_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $row_content__setup = $row_content__input_label;
const $row_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>row <!></em>", "Db%", $row_content__setup);
function $setup($scope) {
	$input_row($scope["#childScope/0"], attrTag({ content: $row_content($scope) }));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($row_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/list.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content__c = /*@__PURE__*/ _let("c/5", ($scope) => $for_content__dynamicTag($scope, $scope.c));
const $for_content__setup__script = _script("__tests__/tags/list.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__c($scope, undefined);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => $for_content__c($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button>clear</button><!><!>", " b%", $for_content__setup, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input = ($scope, input) => $input_row($scope, input.row);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template, "b%c", 0, $input);
