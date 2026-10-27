// card.marko
const $template$1 = "<div><!> <!></div>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/card.marko_0"]];
_shells({ "__tests__/card.marko": "__tests__/card.marko !__tests__/card.marko_0; D%c%;<div><!> <!></div>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<div>${_patch_text($scope0_id, "#text/1", input.user.name, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "#text/2", c, 2)}</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/card.marko_fill0", c, 1);
	_scope($scope0_id, { c }, "__tests__/card.marko", 0, { c: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=inc> </button><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&%c`)($walks$1);
const $Card_withLoadAssets = withLoadAssets(() => card_default, "__tests__/card.marko", flush, "ready:__tests__/card.marko");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/3>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` D l%b/${_w0}&%c`)($walks$1)};${((_w0) => `<button class=inc> </button><!>${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/3", 0);
	$Card_withLoadAssets({ user: input.user });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope2 = _patch_child($scope1_id, "#childScope/1", 1);
			$Card_withLoadAssets({ user: input.user2 });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_user2#0:9/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/4", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_user2: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.user2,
		n,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_user2: ["input.user2"],
		n: "3:6"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.user2, !_server_guard($scope0_reason, 2));
}, 1);
