// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$1 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><input><label>after child</label><!><input><label>after tag</label>";
const $walks = "b%b b b%b b b";
const $if_content__setup = ($scope) => {
	$input_name($scope["#childScope/0"], "child");
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_show = ($scope, input_show) => {
	$dynamicTag($scope, input_show ? field_default : null, ($_) => ({ name: "dynamic" }));
	$if($scope, input_show ? 0 : 1);
};
const $afterChild = ($scope, afterChild) => {
	_attr($scope["#input/1"], "id", afterChild);
	_attr($scope["#label/2"], "for", afterChild);
};
const $afterTag = ($scope, afterTag) => {
	_attr($scope["#input/4"], "id", afterTag);
	_attr($scope["#label/5"], "for", afterTag);
};
function $setup($scope) {
	$afterChild($scope, _id($scope));
	$afterTag($scope, _id($scope));
}
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
