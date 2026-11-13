// tags/list.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b4: "b4;b%;<!><!><!>",
	b3: "b3 b2!b0; D ;<button> </button>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $ui__input_b = _unfilled_if($scope0_reason, 1), $sg__input_items = _server_guard($scope0_reason, 2), $fg__input_items2 = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $sel__closures = /* @__PURE__ */ new Set();
	let sel = "";
	_if(() => {
		if (input.b) {
			const $scope1_id = _scope_id();
			_for_of(input.items, (item) => {
				const $scope2_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 2);
				$fg__input_items && _patch_write($scope2_id, "xe", item?.id, !$sg__input_items);
				_html(`<button${item.id === sel ? " class=on" : ""}>${_text_mark($scope2_id, "b", item.id, 1, $scope0_reason, 2)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "b0");
				_patch_render($scope2_id, "b1", $fg__input_items && "e");
				_subscribe($sel__closures, _scope($scope2_id, {
					e: item?.id,
					_: _scope_with_id($scope1_id)
				}), "b2");
			}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "b3", $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b5");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_b, 1, 0, 0, ["b4"], $scope0_reason, 1);
	$fg__input_items2 && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b5", "e");
	_patch_fill($scope0_id, "vb6", sel, 1);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && ($ui__input_b || _unfilled_if($scope0_reason, 2)) && input.items,
		f: _write_if($scope0_reason, 0) && sel,
		h: $sel__closures
	}) || $fg__input_items2 && $ui__input_b && _patch_write($scope0_id, "xe", input.items, !$sg__input_items);
	$wg__input_b || _resume_branch($scope0_id);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	list_default({
		b: input.b,
		items: input.items
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
