// tags/dia-d/index.marko
const $template$2 = "<em> </em>";
const $setup$3 = [[], []];
_shells({ e: "e;D ;<em> </em>" });
var dia_d_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.note, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/dia-b/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$2 = _shell_setup([[], []], ["a>", $setup$3]);
_shells({ c: `c${_shell_marker($setup$2)};${((_w0) => `/${_w0}&`)("D l")};${$template$2}` });
var dia_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	dia_d_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/dia-c/index.marko
const $template = $template$2;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$3]);
_shells({ d: `d${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D l")};${$template$2}` });
var dia_c_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	dia_d_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/dia-a/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$2], ["b>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template)}` });
var dia_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_note = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_note << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	dia_b_default({ note: input.note });
	_patch_child_end();
	_set_scope_reason($uf__input_note << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	dia_c_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_note = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			dia_a_default({ note: input.note });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_note && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.note,
		f: show
	}) || $fg__input_note && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 0));
}, 1);
