// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/doubler/index.marko": "^__tests__/tags/doubler/index.marko,<span>x2</span>" });
var doubler_default = _template("__tests__/tags/doubler/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	const $return = double;
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&%b l`)("b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D0${_w0}&%b l`)("b")};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1)}`)(),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:7/init;Db%;<p>big <!></p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0, $cg__input_n && 1);
	let double = doubler_default({ value: input.n });
	$cg__input_n && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_double#8/var");
	_patch_child_end();
	_if(() => {
		if (double > 4) {
			const $scope1_id = _scope_id();
			_html(`<p>big ${_text_resume($scope1_id, "#text/0", count, 2)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
