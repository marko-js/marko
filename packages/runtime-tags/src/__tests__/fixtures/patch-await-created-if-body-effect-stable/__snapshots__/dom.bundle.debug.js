// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__v__script = _script("__tests__/template.marko_2_v#2", ($scope) => {
	_el_read($scope["#div/0"]).textContent = String($scope.v);
	console.log("await", $scope.v);
});
const $await_content__v = /*@__PURE__*/ _const("v", $await_content__v__script);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div></div>", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, Promise.resolve(1));
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
