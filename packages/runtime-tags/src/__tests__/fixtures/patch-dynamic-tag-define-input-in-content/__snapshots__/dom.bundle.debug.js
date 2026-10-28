// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $Other_content__record_name = ($scope, record_name) => _text($scope["#text/0"], record_name);
const $Other_content__$params = ($scope, $params3) => $Other_content__record_name($scope, $params3[0].record?.name);
const $Other_content = _content("__tests__/template.marko_3*content", "<h5> </h5>", "D ", 0, $Other_content__$params);
const $Card_content__record_name = ($scope, record_name) => _text($scope["#text/0"], record_name);
const $Card_content__$params = ($scope, $params2) => $Card_content__record_name($scope, $params2[0].record?.name);
const $Card_content = _content("__tests__/template.marko_2*content", "<h4> </h4>", "D ", 0, $Card_content__$params);
const $wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $wrap_content__input_useA__OR__input_record__OR__Card__OR__Other = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_useA#0:3_input_record#0:4_Card#0:5_Other#0:6/init", 1, ($scope) => $wrap_content__dynamicTag($scope, $scope._.input_useA ? $scope._.Card : $scope._.Other, ($_) => ({ record: $scope._.input_record })), 3);
const $wrap_content__input_useA = /*@__PURE__*/ _closure_get("input_useA/7", $wrap_content__input_useA__OR__input_record__OR__Card__OR__Other, 0, "__tests__/template.marko_1_input_useA#0:3/subscribe");
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_useA($scope);
	$wrap_content__input_record($scope);
	$wrap_content__Card($scope);
	$wrap_content__Other($scope);
};
const $wrap_content__input_record = /*@__PURE__*/ _closure_get("input_record/8", $wrap_content__input_useA__OR__input_record__OR__Card__OR__Other, 0, "__tests__/template.marko_1_input_record#0:4/subscribe");
const $wrap_content__Card = /*@__PURE__*/ _closure_get("Card/9", $wrap_content__input_useA__OR__input_record__OR__Card__OR__Other);
const $wrap_content__Other = /*@__PURE__*/ _closure_get("Other/10", $wrap_content__input_useA__OR__input_record__OR__Card__OR__Other);
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $wrap_content__setup);
const $Card = /*@__PURE__*/ _const("Card");
const $Other = /*@__PURE__*/ _const("Other");
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
	$Card($scope, { content: $Card_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
}
const $input = ($scope, input) => {
	$input_useA($scope, input.useA);
	$input_record($scope, input.record);
};
const $input_useA__closure = /*@__PURE__*/ _closure($wrap_content__input_useA);
const $input_useA = /*@__PURE__*/ _const("input_useA", $input_useA__closure);
const $input_record__closure = /*@__PURE__*/ _closure($wrap_content__input_record);
const $input_record = /*@__PURE__*/ _const("input_record", $input_record__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
