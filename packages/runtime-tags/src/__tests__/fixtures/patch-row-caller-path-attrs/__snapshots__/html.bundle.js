// tags/navlist.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1; D ;<a class=link> </a>"
});
var navlist_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xe", item?.href, !_server_guard($scope0_reason, 1));
		const active = item.href === input.path;
		_html(`<a${_attr_class(["link", { active }], $scope1_id, "aa$class", $scope0_reason, 0)}${_attr("href", item.href, $scope1_id, "aa$href", $scope0_reason, 1)}>${_text_resume($scope1_id, "b", item.label, 1, $scope0_reason, 1)}</a>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 1))}`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_init_entry($scope1_id, "b0", [_filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "e"], $scope0_reason, 0);
		_scope($scope1_id, {
			e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item?.href,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b1", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "vb2", input.path) : $cg__input_items && _patch_write($scope0_id, "xe", input.path, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.path });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=p>p</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let path = "/a";
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	navlist_default({
		items: input.items,
		path
	});
	_patch_child_end();
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: path,
		a: _existing_scope($childScope)
	});
}, 1);
