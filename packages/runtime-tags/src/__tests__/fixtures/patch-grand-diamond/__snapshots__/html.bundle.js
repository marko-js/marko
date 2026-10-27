// tags/dia-d/index.marko
const $template$2 = "<em> </em>";
const $setup$3 = [[], []];
_shells({ e: "e;D ;<em> </em>" });
var dia_d_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.note, void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/dia-b/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$2 = _shell_setup([[], []], ["a>", $setup$3]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup$2)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2) });
var dia_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	dia_d_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/dia-c/index.marko
const $template = $template$2;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$3]);
_shells({ d: /*@__PURE__*/ ((_w0) => `d${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2) });
var dia_c_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	dia_d_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/dia-a/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$2], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template)}`)() });
var dia_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	dia_b_default({ note: input.note });
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	dia_c_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			dia_a_default({ note: input.note });
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.note,
		f: show
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.note, !_server_guard($scope0_reason, 0));
}, 1);
