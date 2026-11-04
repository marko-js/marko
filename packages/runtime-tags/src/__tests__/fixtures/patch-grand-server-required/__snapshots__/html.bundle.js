// tags/outer/tags/inner/index.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0,<em>o</em>"
});
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_open = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>o</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, 1, 0, 0, ["c0"], $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/outer/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	inner_default({ open: input.o });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_o = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ o: input.o });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_o && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.o,
		f: show
	}) || $fg__input_o && _patch_write($scope0_id, "xe", input.o, !_server_guard($scope0_reason, 0));
}, 1);
