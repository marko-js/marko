// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = ($_) => {};
const $input_page__$global_user_name__script = _fill_global_path_script("__tests__/template.marko_0_input_page#3_$global_user_name#6", ($scope) => _el_read($scope["#div/0"]).textContent = _global_read($scope.$global, "user").name + ":" + $scope.input_page, "user", "name");
const $input_page__$global_user_name = $input_page__$global_user_name__script;
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__$global_user_name);
const $input = ($scope, input) => $input_page($scope, input.page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
