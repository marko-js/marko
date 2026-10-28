// tags/list.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b2"]];
_shells({
	b: "b !b2; b%;<button>toggle</button><!><!>",
	b1: "b1 b5;b%;<!><!><!>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_content_withhold(item?.content), _filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "vb0", item?.content);
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", item.content, {}, 0, 0, 0, $wg__input_item);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {
			d: item?.content,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 0);
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb3", open, 1);
	_scope($scope0_id, { f: open });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", label, void 0, 4, 0)}:${_text_resume($scope1_id, "b", input.note, 2, $scope0_reason, 1)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id, () => [{ 2: label }]) });
	});
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	list_default({ item: $item });
	_patch_child_end();
	_scope($scope0_id, {
		e: input.note,
		f: _write_if($scope0_reason, 1) && $input_note__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
