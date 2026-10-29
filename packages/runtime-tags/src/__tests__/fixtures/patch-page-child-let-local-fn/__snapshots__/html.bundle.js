// tags/outer.marko
const $template = "<button>swap</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b2"]];
_shells({
	b: "b !b2; b%;<button>swap</button><!><!>",
	b1: "b1 b6;D ;<p> </p>"
});
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = _resume((v) => "<" + v + ">", "b0");
	_html(`<button>swap</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", f(input.label))}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b1"], $scope0_reason, 1);
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb4", f, 1);
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 0) && f
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb3", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
