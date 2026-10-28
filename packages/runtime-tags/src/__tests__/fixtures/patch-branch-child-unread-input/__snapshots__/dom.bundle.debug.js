// tags/panel.marko
const $template$3 = "<section> </section>";
const $walks$3 = "D l";
const $setup$3 = ($_) => {};
const $input_data_title = ($scope, input_data_title) => _text($scope["#text/0"], input_data_title);
const $input$3 = ($scope, input) => $input_data($scope, input.data);
const $input_data = ($scope, input_data) => $input_data_title($scope, input_data?.title);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$3, "D l", 0, $input$3);

// tags/card.marko
const $template$2 = "<div> </div>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_user_name$1 = ($scope, input_user_name) => _text($scope["#text/0"], input_user_name);
const $input$2 = ($scope, input) => $input_user$2($scope, input.user);
const $input_user$2 = ($scope, input_user) => $input_user_name$1($scope, input_user?.name);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D l", 0, $input$2);

// tags/toggle.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $input_user_bio__OR__input_user_name__OR__open = /*@__PURE__*/ _fill_join("__tests__/tags/toggle.marko_fill1", "input_user_name", /*@__PURE__*/ _fill_join("__tests__/tags/toggle.marko_fill0", "input_user_bio", /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/1"], $scope.open ? $scope.input_user_bio : $scope.input_user_name), 2)));
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/toggle.marko_fill2", "open/7", $input_user_bio__OR__input_user_name__OR__open);
const $setup__script$1 = _script("__tests__/tags/toggle.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $input_user_bio = /*@__PURE__*/ _const("input_user_bio", $input_user_bio__OR__input_user_name__OR__open);
const $input_user_name = /*@__PURE__*/ _const("input_user_name", $input_user_bio__OR__input_user_name__OR__open);
const $input$1 = ($scope, input) => $input_user$1($scope, input.user);
const $input_user$1 = ($scope, input_user) => {
	$input_user_bio($scope, input_user?.bio);
	$input_user_name($scope, input_user?.name);
};
var toggle_default = /*@__PURE__*/ _template("__tests__/tags/toggle.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button class=inc> </button><!><!><!>";
const $walks = " D l%b%c";
const $if_content2__input_other = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_other#0:11/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_other", /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_user$1($scope["#childScope/1"], $scope._.input_other))));
const $if_content2__setup = ($scope) => {
	$if_content2__input_other._($scope);
	$if_content2__input_props_user._($scope);
	$setup$1($scope["#childScope/1"]);
};
const $if_content2__input_props_user = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_props_user#0:13/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "input_props_user", /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_user$2($scope["#childScope/0"], $scope._.input_props_user))));
const $else_content__input_user = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_user#0:8/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_user", /*@__PURE__*/ _if_closure("#text/2", 1, ($scope) => $input_user$2($scope["#childScope/0"], $scope._.input_user))));
const $else_content__setup = $else_content__input_user;
const $if_content__input_adminData = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_adminData#0:7/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_adminData", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_data($scope["#childScope/0"], $scope._.input_adminData))));
const $if_content__setup = $if_content__input_adminData;
const $n = /*@__PURE__*/ _let("n/12", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup, $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $else_content__setup);
const $input_admin = ($scope, input_admin) => $if($scope, input_admin ? 0 : 1);
const $if2 = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", $walks$1), $if_content2__setup);
const $input_more = ($scope, input_more) => $if2($scope, input_more ? 0 : 1);
const $input = ($scope, input) => {
	$input_admin($scope, input.admin);
	$input_adminData($scope, input.adminData);
	$input_user($scope, input.user);
	$input_more($scope, input.more);
	$input_props($scope, input.props);
	$input_other($scope, input.other);
};
const $input_adminData = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_adminData", $if_content__input_adminData);
const $input_user = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_user", $else_content__input_user);
const $input_props = ($scope, input_props) => $input_props_user($scope, input_props?.user);
const $input_props_user = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "input_props_user", $if_content2__input_props_user);
const $input_other = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_other", $if_content2__input_other);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
