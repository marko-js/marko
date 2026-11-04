// tags/navlist.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1; D ;<a class=link> </a>"
});
var navlist_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items = _unfilled_if($scope0_reason, 1), $fg__input_path = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $ui__input_path = _unfilled_if($scope0_reason, 2), $fg__input_items = _filled_guard($scope0_reason, 1);
		$fg__input_items && $ui__input_path && _patch_write($scope1_id, "xe", item?.href, !_server_guard($scope0_reason, 1));
		const active = item.href === input.path;
		_html(`<a${_attr_class(["link", { active }], $scope1_id, "a", $scope0_reason, 0)}${_attr("href", item.href, $scope1_id, "a", $scope0_reason, 1)}>${_text_mark($scope1_id, "b", item.label, 1, $scope0_reason, 1)}</a>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 0) || _updates_from($scope0_reason, 1))}`);
		_patch_render($scope1_id, "b0", [_filled_guard($scope0_reason, 2) && ">e", $fg__input_items && "e"], $scope0_reason, 0);
		_scope($scope1_id, {
			e: ($ui__input_path || _unfilled_if($scope0_reason, 0)) && item?.href,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b1", $scope0_reason, 1);
	$fg__input_path && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b2", "e");
	_scope($scope0_id, { e: ($ui__input_items || _unfilled_if($scope0_reason, 0)) && input.path }) || $fg__input_path && $ui__input_items && _patch_write($scope0_id, "xe", input.path, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button class=p>p</button>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let path = "/a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			navlist_default({
				items: input.items,
				path
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<button class=p>p</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$fg__input_items && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.items,
		g: path
	}) || $fg__input_items && $ui__input_show && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 1));
}, 1);
