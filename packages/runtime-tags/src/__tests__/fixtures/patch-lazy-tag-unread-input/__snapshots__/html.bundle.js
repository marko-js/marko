// card.marko
const $template = "<div><!> <!></div>";
const $walks = " D%c%l";
const $setup$1 = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<div><!> <!></div>" });
var card_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<div>${_text_resume($scope0_id, "b", input.user.name, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "c", c, 2)}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", c, 1);
	_scope($scope0_id, { h: c });
});

// template.marko
const $Card_withLoadAssets = withLoadAssets(() => card_default, "a", flush, "_a");
const $setup = _shell_setup([[], ["b2"]], ["d>", $setup$1]);
_shells({
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => ` D l%b/${_w0}&%c`)($walks)};${((_w0) => `<button class=inc> </button><!>${_w0}<!><!>`)($template)}`)(),
	b1: /*@__PURE__*/ (() => `b1${_shell_marker(_shell_setup([[], []], ["b>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "d", 0);
	$Card_withLoadAssets({ user: input.user });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope2 = _patch_child($scope1_id, "b", 1);
			$Card_withLoadAssets({ user: input.user2 });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "e", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["b1"], $scope0_reason, 1);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		j: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.user2,
		k: n,
		d: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb3", input.user2, !_server_guard($scope0_reason, 2));
}, 1);
