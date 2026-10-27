// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", g())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.fn,
		f: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "va3", input.label, !$sg__input_label) : _patch_write($scope0_id, "xe", input.label, !$sg__input_label));
	_for_until(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0);
		card_default({ fn: _bind_resume(function() {
			return "f:" + input.label;
		}, "a0", $scope1_id) });
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_scope($scope0_id, { e: input.label });
}, 1);
