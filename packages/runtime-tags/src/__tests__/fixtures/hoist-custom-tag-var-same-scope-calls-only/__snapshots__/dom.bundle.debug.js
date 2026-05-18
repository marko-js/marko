// tags/child.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $input__script = _script("__tests__/tags/child.marko_0_input", ($scope) => $scope.input.action());
const $input = /* @__PURE__ */ _const("input", $input__script);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$2, $input);

// tags/source.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
function $setup$1($scope) {
	_return($scope, $_return($scope));
}
function $_return($scope) {
	return () => ({
		setHtml(value) {
			_el_read($scope["#div/0"]).innerHTML = value;
		},
		addClass(value) {
			_el_read($scope["#div/0"]).classList.add(value);
		}
	});
}
_resume("__tests__/tags/source.marko_0/_return", $_return);
var source_default = /* @__PURE__ */ _template("__tests__/tags/source.marko", $template$1, " b", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&0${_w1}&`)("", " b");
const $api_getter = _hoist("api");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $api_getter($scope)().setHtml("works"));
function $setup($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { action: $action($scope) });
	_var($scope, "#childScope/1", $api);
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
}
const $api = _var_resume("__tests__/template.marko_0_api/var", /* @__PURE__ */ _const("api", ($scope) => _assert_hoist($scope.api)));
function $action($scope) {
	return function() {
		$api_getter($scope)().addClass("child");
	};
}
_resume("__tests__/template.marko_0/action", $action);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
