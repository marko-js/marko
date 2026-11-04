// tags/list.marko
const $template = "<button>copy</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button>copy</button><!><!>" });
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = input.item;
	_html(`<button>copy</button>${_el_mark($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {});
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", items, 1);
	_scope($scope0_id, { f: items }) || _client_branch(input.item);
});

// template.marko
_shells({
	a: "a !a4; b%;<button>+</button><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			let $item;
			forOf(input.items, (item) => $item = attrTags($item, { content: _content_resume("a1", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", item.text, _write_guard($scope2_reason, 0))} ${_text_mark($scope2_id, "b", n, 2)}</em>`);
				_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
			}, $scope1_id, () => [{ 2: item?.text }]) }));
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			list_default({ item: $item });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_script($scope0_id, "a4");
	$fg__input_items && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.items,
		g: n,
		i: $n__closures
	}) || $fg__input_items && $ui__input_show && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 1));
}, 1);
