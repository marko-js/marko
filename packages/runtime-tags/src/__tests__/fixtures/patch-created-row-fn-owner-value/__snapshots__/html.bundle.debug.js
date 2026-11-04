// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : () => "-";
	_html(`<button>${_text_mark($scope0_id, "#text/1", g())}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_render($scope0_id, "__tests__/tags/card.marko_0_input_fn#4_open#5/setup", $fg__input_fn && "input_fn");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_fn: input.fn,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_fn: ["input.fn"],
		open: "1:6"
	}) || $fg__input_fn && _patch_write($scope0_id, "PatchMarkedWrite:input_fn", input.fn, !_server_guard($scope0_reason, 0));
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
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	$fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
	_for_until(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		card_default({ fn: _bind_resume(function() {
			return "f:" + input.label;
		}, "__tests__/template.marko_1/fn", $scope1_id) });
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
