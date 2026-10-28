// tags/panel.marko
const $template$3 = "<ul></ul>";
const $walks$3 = " b";
const $setup$3 = ($_) => {};
const $for_content__row_name = ($scope, row_name) => _text($scope["#text/0"], row_name);
const $for_content__$params = ($scope, $params2) => $for_content__row_name($scope, $params2[0]?.name);
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_rows$1 = ($scope, input_rows) => $for($scope, [input_rows]);
const $input$3 = ($scope, input) => $input_rows$1($scope, input.rows);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$3, " b", 0, $input$3);

// tags/gate.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $else_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $else_content__input_guest = /*@__PURE__*/ _init_resume("__tests__/tags/gate.marko_2_input_guest#0:5/init", /*@__PURE__*/ _fill("__tests__/tags/gate.marko_fill1", "input_guest", /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => $else_content__dynamicTag($scope, $scope._.input_guest))));
const $else_content__setup = $else_content__input_guest;
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_admin = /*@__PURE__*/ _init_resume("__tests__/tags/gate.marko_1_input_admin#0:4/init", /*@__PURE__*/ _fill("__tests__/tags/gate.marko_fill0", "input_admin", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.input_admin))));
const $if_content__setup$1 = $if_content__input_admin;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup$1, "<!><!><!>", "b%", $else_content__setup);
const $input_show$1 = ($scope, input_show) => $if$1($scope, input_show ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_admin$1($scope, input.admin);
	$input_guest($scope, input.guest);
};
const $input_admin$1 = /*@__PURE__*/ _fill_const("__tests__/tags/gate.marko_fill0", "input_admin", $if_content__input_admin);
const $input_guest = /*@__PURE__*/ _fill_const("__tests__/tags/gate.marko_fill1", "input_guest", $else_content__input_guest);
var gate_default = /*@__PURE__*/ _template("__tests__/tags/gate.marko", $template$2, "b%c", 0, $input$2);

// tags/wrapper.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/wrapper.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill("__tests__/tags/wrapper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#div/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrapper.marko_fill0", "input_content", $if_content__input_content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button class=inc> </button>${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&`)("b%c", " b");
const $wrapper_content__input_bodyText = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_bodyText#0:10/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill2", "input_bodyText", /*@__PURE__*/ _closure_get("input_bodyText/14", ($scope) => _text($scope["#text/0"], $scope._.input_bodyText), 0, "__tests__/template.marko_3_input_bodyText#0:10/subscribe"), 0));
const $wrapper_content__setup = $wrapper_content__input_bodyText;
const $wrapper_content = _content("__tests__/template.marko_3*content", "<p> </p>", "D ", $wrapper_content__setup);
const $guest_content__input_guestText = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_guestText#0:8/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_guestText", /*@__PURE__*/ _closure_get("input_guestText/13", ($scope) => _text($scope["#text/0"], $scope._.input_guestText), 0, "__tests__/template.marko_2_input_guestText#0:8/subscribe"), 0));
const $guest_content__setup = $guest_content__input_guestText;
const $guest_content = _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $guest_content__setup);
const $admin_content__input_rows = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_rows#0:7/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_rows", /*@__PURE__*/ _closure_get("input_rows/12", ($scope) => $input_rows$1($scope["#childScope/0"], $scope._.input_rows), 0, "__tests__/template.marko_1_input_rows#0:7/subscribe"), 0));
const $admin_content__setup = $admin_content__input_rows;
const $admin_content = _content("__tests__/template.marko_1*content", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $admin_content__setup);
const $n = _let("n/11", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_admin$1($scope["#childScope/2"], attrTag({ content: $admin_content($scope) }));
	$input_guest($scope["#childScope/2"], attrTag({ content: $guest_content($scope) }));
	$input_content($scope["#childScope/3"], $wrapper_content($scope));
	$n($scope, 0);
	$setup__script($scope);
}
const $input_admin = ($scope, input_admin) => $input_show$1($scope["#childScope/2"], input_admin);
const $input_showBody = ($scope, input_showBody) => $input_show($scope["#childScope/3"], input_showBody);
const $input = ($scope, input) => {
	$input_admin($scope, input.admin);
	$input_rows($scope, input.rows);
	$input_guestText($scope, input.guestText);
	$input_showBody($scope, input.showBody);
	$input_bodyText($scope, input.bodyText);
};
const $input_rows__closure = /*@__PURE__*/ _closure($admin_content__input_rows);
const $input_rows = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_rows", $input_rows__closure);
const $input_guestText__closure = /*@__PURE__*/ _closure($guest_content__input_guestText);
const $input_guestText = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_guestText", $input_guestText__closure);
const $input_bodyText__closure = /*@__PURE__*/ _closure($wrapper_content__input_bodyText);
const $input_bodyText = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_bodyText", $input_bodyText__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
