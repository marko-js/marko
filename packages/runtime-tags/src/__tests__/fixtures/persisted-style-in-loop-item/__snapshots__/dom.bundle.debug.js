// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $for_content__item_color = /*@__PURE__*/ _const("item_color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19loop-19item-1btemplate-1amarko_0", $scope.item_color));
const $for_content__$params = ($scope, $params2) => $for_content__item_color($scope, $params2[0]?.color);
const $for = /*@__PURE__*/ _for_of("#text/0", "<style></style><b class=k>item</b>", " ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// v:template.marko.css
var v_template_marko_default = ".k { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19loop-19item-1btemplate-1amarko_0); }";
