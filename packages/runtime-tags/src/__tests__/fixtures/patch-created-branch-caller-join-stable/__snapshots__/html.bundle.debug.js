// tags/inner.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/inner.marko": "__tests__/tags/inner.marko;b%;<!><!><!>",
	"__tests__/tags/inner.marko_1*shell": "__tests__/tags/inner.marko_1*shell;D ;<p> </p>"
});
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const v = "v";
			_html(`<p>${_text_mark($scope1_id, "#text/0", v + input.label, 1, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 1) && _patch_write($scope1_id, "PatchWrite:v", v, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/tags/inner.marko_1_input_label#0:4_v#1/setup");
			_scope($scope1_id, {
				v: _unfilled_if($scope0_reason, 1) && v,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/tags/inner.marko", "1:2", { v: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/inner.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/tags/inner.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/tags/inner.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>label</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>label</button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html(`<button>label</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | _updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	inner_default({
		show: input.show,
		label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);
