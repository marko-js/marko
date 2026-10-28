// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", 0, $for_content__$params);
const $if_content__xs = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.xs]));
const $if_content__setup = $if_content__xs;
const $xs = /*@__PURE__*/ _let("xs/5");
const $input_items = $xs;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
