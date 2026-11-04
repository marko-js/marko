// tags/card.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_mark($scope0_id, "#text/1", f(), 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/outer.marko": `__tests__/tags/outer.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)($walks$2)};${$template$2}` });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ fn: function() {
		return open ? input.fn() : "-";
	} });
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/tags/outer.marko_0_input#2_open#3/setup", $fg__input && "input");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", open, 1);
	_scope($scope0_id, {
		input,
		open: _write_if($scope0_reason, 0) && open,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/outer.marko", 0, {
		input: 0,
		open: "1:6"
	}) || $fg__input && _patch_write($scope0_id, "PatchMarkedWrite:input", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	$fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({ fn: _bind_resume(function() {
				return "f:" + input.label;
			}, "__tests__/template.marko_1/fn", $scope1_id) });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
