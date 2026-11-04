// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a2 = _filled_guard($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
		$fg__input_items && _patch_write($scope1_id, "xc", item, !_server_guard($scope0_reason, 1));
		_html(`<p>${_text_mark($scope1_id, "a", input.a + item, 1, $scope0_reason, 0)}</p>`);
		_script($scope1_id, "b0", 1, ($fg__input_a || $fg__input_items) && (_client_guard($scope0_reason, 2) || $cg__input_items ? 2 : 1), (($fg__input_a ? " >e" : "") + ($fg__input_items ? " c" : "")).slice(1), "b1", $scope0_reason, 0);
		_scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 1);
	$fg__input_a2 && $cg__input_items && _patch_render($scope0_id, "b3", "e");
	_scope($scope0_id, { e: input.a }) || $fg__input_a2 && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: "m0",
		items: input.items
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
