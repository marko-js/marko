// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup$1 = [[], ["a0"]];
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", count, 1);
	_scope($scope0_id, { g: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1;D ;<b> </b>",
	b2: "b2",
	b3: "b3;D ;<b> </b>",
	b4: "b4;D ;<em> </em>",
	b5: /*@__PURE__*/ (() => `b5${_shell_marker(_shell_setup([[], []], ["c>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&%c`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}<!><!>`)($template)}`)(),
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)($walks)};${((_w0) => `<!><!>${_w0}<!><!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 2), $cg__input_b = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	$Child_withLoadAssets({ label: input.label });
	_patch_child_end();
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "a", a, void 0, $scope0_reason, 2)}</b>`);
			_scope($scope3_id, {});
		}, 1, "b1", 1);
		_set_scope_reason(0);
		const $childScope2 = _patch_child($scope1_id, "c", 1);
		$Child_withLoadAssets({ label: "in-try" });
		_patch_child_end();
		_await($scope1_id, "d", input.b, (b) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "a", b, void 0, $scope0_reason, 3)}</em>`);
			_scope($scope4_id, {});
		}, 1, "b0", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_a ? "b6" : "b7");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_b ? "b8" : "b9");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			c: _existing_scope($childScope2)
		}), $cg__input_a && "b7"), $cg__input_b && "b9");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "b2", void 0, "b5", 1, void 0, 2);
	_scope($scope0_id, {
		b: _existing_scope($childScope),
		i: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_a__closures,
		j: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_b__closures
	});
}, 1);
