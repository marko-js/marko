// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell; ; "
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $sg__input_suffix = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, !$sg__input_suffix);
	const fmt = _bind_resume((v) => v + input.suffix, "__tests__/tags/child.marko_0/fmt", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", fmt("x"), void 0, $scope0_reason, 0));
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_fmt#0:5/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_suffix: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.suffix,
		fmt: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && fmt
	}, "__tests__/tags/child.marko", 0, {
		input_suffix: ["input.suffix"],
		fmt: "1:8"
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", fmt, !$sg__input_suffix);
});

// tags/mid.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=s>s</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $setup$1 = _shell_setup([[], ["__tests__/tags/mid.marko_0"]], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/mid.marko": /*@__PURE__*/ (() => `__tests__/tags/mid.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=s>s</button>`)($template$2)}`)() });
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let s = "!";
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		suffix: s,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/mid.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/mid.marko_fill0", s, 1);
	_scope($scope0_id, {
		s,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/mid.marko", 0, { s: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=show>show</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks$1)};${((_w0) => `<!>${_w0}<button class=show>show</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	mid_default({ show });
	_patch_child_end();
	_html(`<button class=show>show</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
