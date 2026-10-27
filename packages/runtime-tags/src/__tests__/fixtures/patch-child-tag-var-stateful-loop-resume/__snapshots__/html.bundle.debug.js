// tags/ret.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/ret.marko": "^__tests__/tags/ret.marko," });
var ret_default = _template("__tests__/tags/ret.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = String(input.x) + "!";
	return $return;
});

// tags/w.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<p>r:<!></p>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&Db%l`)("");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/w.marko": /*@__PURE__*/ (() => `__tests__/tags/w.marko${_shell_marker($setup$1)};${((_w0) => `0${_w0}&Db%l`)("")};${((_w0) => `${_w0}<p>r:<!></p>`)("")}`)() });
var w_default = _template("__tests__/tags/w.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "#childScope/0", $cg__input_x && 1);
	let r = ret_default({ x: input.x });
	$cg__input_x && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/w.marko_0_r#6/var");
	_html(`<p>r:${_patch_text($scope0_id, "#text/2", r, 2, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/w.marko", 0);
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let s = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", s)}</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _for_until(1 + s % 3, 0, 1, (n) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		w_default({ x: s + n });
		$scope0_page && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { s }, "__tests__/template.marko", 0, { s: "1:6" });
}, 1);
