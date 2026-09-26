// tags/list.marko
const $template$1 = "<!><!><!>";
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0;b%;<!><!><!>"
});
var list_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		const $tag = item.content;
		_dynamic_tag($scope1_id, "a", $tag, {}, 0, 0, $sg__input_item, _patch_dynamic_tag($scope1_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
		$scope0_page && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, $sg__input_item, void 0, void 0, "c0", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 0, 1);

// tags/child.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>add</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
_shells({
	b0: "b0;b%;<!><!><!>",
	b: /*@__PURE__*/ ((_w0, _w1) => `b !b2;${_w0};${_w1}`)(((_w0) => ` b/${_w0}&b`)("b%c"), ((_w0) => `<button>add</button>${_w0}<!>`)($template$1)),
	b1: "b1,<span>shown</span>"
});
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let items = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_elide("b0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html("<span>shown</span>");
					$scope0_page && _scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b1"], $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			$sg__input_show || _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(list_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "b", $childScope);
		list_default({ item: $item });
	}
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "b1", items, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.show,
		f: items,
		g: $input_show__closures,
		b: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "b0", input.show);
}, 0, () => [list_default]);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks), ((_w0) => `${_w0}<!>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	child_default({ show: input.show });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [child_default]);
