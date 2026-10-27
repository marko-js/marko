// tags/counter-box/index.marko
const $template = "<span> </span><button class=mode>b</button><button class=go>go</button>";
const $walks = "D l b b";
const $setup = [["b3"], ["b1"]];
_shells({ b: "b b3!b1;D l b ;<span> </span><button class=mode>b</button><button class=go>go</button>" });
_stateful_return("b");
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_onA = _server_guard($scope0_reason, 0), $sg__input_onB = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "a", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "b")}<button class=go>go</button>${_el_resume($scope0_id, "c")}`);
	const $return = mode;
	_script($scope0_id, "b0", 1, ($sg__input_onA || $sg__input_onB) && 2, $sg__input_onA && "f", $sg__input_onB && "g");
	_script($scope0_id, "b1");
	const $valueChange = input.onA || void 0;
	_patch_fill($scope0_id, "vb2", mode, 1);
	_scope($scope0_id, {
		f: input.onA,
		g: input.onB,
		h: mode,
		U: $valueChange
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.onA, !$sg__input_onA), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.onB, !$sg__input_onB));
	return $return;
});

// template.marko
_shells({
	a: "a !;b%bD ;<!><!><p> </p>",
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([[], ["a3"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<button class=set>set</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_p = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "va6", input.p, !$sg__input_p) : _patch_write($scope0_id, "xf", input.p, !$sg__input_p));
	let last = "none";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0, 1);
			counter_box_default({
				onA: _bind_resume(function(v) {
					last = input.p + "a" + v;
				}, "a0", $scope1_id),
				onB: _bind_resume(function(v) {
					last = input.p + "b" + v;
				}, "a1", $scope1_id)
			});
			_var($scope1_id, "b", $childScope, "a2");
			_patch_child_end();
			_html(`<button class=set>set</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a3");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a5"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", last)}</p>`);
	_scope($scope0_id, { f: input.p });
}, 1);
