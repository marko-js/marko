// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(" b");
const $fn = _var_resume("__tests__/template.marko_0_fn#6/var", ($scope, fn) => _text($scope["#text/2"], fn()));
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/0"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
function $setup($scope) {
	_var($scope, "#childScope/0", $fn);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/make.marko
const $template = "<p></p>";
const $walks = " b";
const $setup = ($_) => {};
const $get2__script = _script("__tests__/tags/make.marko_0_get#4", ($scope) => _el_read($scope["#p/0"]).textContent = $scope.get());
const $get2 = /*@__PURE__*/ _const("get", ($scope) => {
	_return($scope, $scope.get);
	$get2__script($scope);
});
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => $get2($scope, $get($scope)));
const $input = ($scope, input) => $input_v($scope, input.v);
const $get = ($scope) => () => $scope.input_v;
_resumed["__tests__/tags/make.marko_0/get"] = $get;
var make_default = /*@__PURE__*/ _template("__tests__/tags/make.marko", $template, " b", 0, /*@__PURE__*/ _return_setup($input));
