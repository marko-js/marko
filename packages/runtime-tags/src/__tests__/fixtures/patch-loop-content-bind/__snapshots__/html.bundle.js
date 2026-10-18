// tags/list.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
_shells({
	b: "b !b2; b%;<button>toggle</button><!><!>",
	b0: "b0 b5;b%;<!><!><!>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_content_withhold(item?.content), _filled_guard($scope0_reason, 0) && _patch_value($scope1_id, "vb1", item?.content);
		if ($scope0_page) _if(() => {
			{
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", item.content, {}, 0, 0, $wg__input_item);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {
			d: item?.content,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "vb3", open, 1);
	$scope0_page && _scope($scope0_id, { f: open });
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_resume("a1", () => {
			const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", label, $wg__label)}:${_text_resume($scope1_id, "b", input.note, $wg__input_note * 2)}</em>`);
			_subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_note || $wg__label);
			$wg__input_note || $wg__label || _resume_branch($scope1_id);
		}, $scope0_id, () => [{ 2: label }]) });
	});
	const $childScope = _patch_child($scope0_id, "a");
	list_default({ item: $item });
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
