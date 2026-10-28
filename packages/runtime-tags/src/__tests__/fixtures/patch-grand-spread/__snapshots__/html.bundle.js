// tags/mid/tags/leaf/index.marko
const $template = "<em> </em>";
const $setup$1 = [[], []];
_shells({ c: "c;D ;<em> </em>" });
var leaf_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.text, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/mid/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ ((_w0) => `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var mid_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	leaf_default(input);
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			mid_default({ text: input.text });
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.text,
		f: show
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.text, !_server_guard($scope0_reason, 0));
}, 1);
