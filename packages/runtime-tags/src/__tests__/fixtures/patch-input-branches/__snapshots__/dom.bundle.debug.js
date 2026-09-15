// template.marko
const $template = "<div class=wrap><h1>Hello <!></h1><!><!></div>";
const $walks = "Eb%l%b%l";
const $setup = () => {};
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $input_name = ($scope, input_name) => _text($scope["#text/0"], input_name);
const $if = /*@__PURE__*/ _if("#text/1", "<p>shown</p>");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $for = /*@__PURE__*/ _for_of("#text/2", "<li> </li>", "D ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
