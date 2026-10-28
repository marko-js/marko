// tags/inner.marko
const $template$1 = "<div></div>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<div></div>" });
var inner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 0), "c");
	_scope($scope0_id, { c: input }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input, !_server_guard($scope0_reason, 0));
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=set>set</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)(" b");
const $setup = _shell_setup([[], ["c1"]], ["b>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)(" b")};${((_w0) => `<button class=set>set</button>${_w0}`)($template$1)}`)() });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	const fn = _resume(function() {
		return value.b;
	}, "c0", $scope0_id);
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	inner_default(_patch_live($childScope, { fn }, $scope0_id, ""));
	_patch_child_end();
	_script($scope0_id, "c1");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc2", value, 1);
	_scope($scope0_id, {
		g: value?.b,
		b: _existing_scope($childScope)
	});
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ data: _patch_live($childScope, {
				a: "x",
				b: input.label,
				c: { d: input.label },
				items: [input.label, "y"]
			}, $scope1_id, ">e") });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
