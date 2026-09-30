// tags/list.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
_shells({
	b: "b !b2; b%;<button>toggle</button><!><!>",
	b0: "b0 b5;b%;<!><!><!>"
});
var list_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_value($scope1_id, "b1", item?.content);
		if ($scope0_page) _if(() => {
			{
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", item.content, {}, 0, 0, $sg__input_item);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {
			d: item?.content,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, $sg__input_item, void 0, void 0, "b0", $scope0_reason, 0);
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "b3", open, 1);
	$scope0_page && _scope($scope0_id, { f: open });
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks), ((_w0) => `${_w0}<!>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_labels = _source_guard($scope0_reason, 0), $sg__input_note = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", label, $sg__input_labels)}:${_text_resume($scope1_id, "b", input.note, $sg__input_note * 2)}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $sg__input_labels || $sg__input_note);
			$sg__input_labels || $sg__input_note || _resume_branch($scope1_id);
		}, $scope0_id, () => [{ 2: label }]) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	list_default({ item: $item });
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a2", input.note);
}, 1, () => [list_default]);
