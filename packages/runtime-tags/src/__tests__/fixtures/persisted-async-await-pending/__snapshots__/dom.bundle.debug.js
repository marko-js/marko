// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<em> </em>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $setup = $await_content;
const $input_promise = $await_promise;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_promise($scope, input.promise);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
