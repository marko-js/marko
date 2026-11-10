// tags/grand.marko
const $template$1 = "<div></div>";
const $setup$1 = [[], []];
_shells({ c: "c; ;<div></div>" });
var grand_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_v = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0", 1, $fg__input_v, "d");
	_scope($scope0_id, { d: input.v }) || $fg__input_v && _patch_write($scope0_id, "xd", input.v, !_server_guard($scope0_reason, 0));
});

// tags/child.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${$template$1}` });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	grand_default({ v: o.label });
	_patch_child_end();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb0", { label: o?.label }, 1);
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({ opts: _patch_live($childScope, {
				label: input.label,
				n: "SECRET_"
			}, $scope1_id, ">e") });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
