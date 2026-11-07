// template.marko
const $template = "<div></div>";
const $walks = " b";
const $input_page__OR__$global_user_name__script = _script("__tests__/template.marko_0_input_page#3_$global_user_name#6", ($scope) => _el_read($scope["#div/0"]).textContent = _global_read($scope.$global, "user").name + ":" + $scope.input_page);
const $input_page__OR__$global_user_name = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_page#3_$global_user_name#6/setup", 4, $input_page__OR__$global_user_name__script);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__$global_user_name);
const $global_user_name = _fill_global_path_resume("__tests__/template.marko_0_$global_user_name#6/subscribe", $input_page__OR__$global_user_name, "user", "name");
const $setup = $global_user_name;
const $input = ($scope, input) => $input_page($scope, input.page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
