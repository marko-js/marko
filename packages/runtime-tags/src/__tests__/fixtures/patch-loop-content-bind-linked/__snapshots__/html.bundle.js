// tags/list.marko
const $template = "<button>toggle</button><button>pick</button><!><!>";
const $walks = " b b%c";
_shells({
	b: "b !b2 b3; b b%;<button>toggle</button><button>pick</button><!><!>",
	b0: "b0 b6;b%;<!><!><!>"
});
var list_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<button>pick</button>${_el_resume($scope0_id, "b")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "b1", item?.content);
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
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 1);
	_script($scope0_id, "b2");
	_script($scope0_id, "b3");
	_patch_effect($scope0_id, "b2", "f");
	_patch_value($scope0_id, "b4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.onPick,
		h: open
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "f", input.onPick);
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_resume("a2", () => {
			const $scope1_reason = _scope_reason(), $wg__label = _source_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", label, $wg__label)}:${_text_resume($scope1_id, "b", input.note, $wg__input_note * 2)}</em>`);
			_subscribe(_source_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_note || $wg__label);
			$wg__input_note || $wg__label || _resume_branch($scope1_id);
		}, $scope0_id, () => [{ 2: label }]) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	list_default({
		onPick: _resume(function() {
			console.log(input.note);
		}, "a0", $scope0_id),
		item: $item
	});
	$scope0_page ? _scope($scope0_id, {
		d: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a3", input.note);
}, 1);
