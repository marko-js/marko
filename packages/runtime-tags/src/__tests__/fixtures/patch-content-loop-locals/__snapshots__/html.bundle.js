// tags/list.marko
const $template = "<!><!><!>";
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var list_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		const $tag = item.content;
		_dynamic_tag($scope1_id, "a", $tag, {}, 0, 0, $wg__input_item, void 0, _patch_dynamic_tag($scope1_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
		$scope0_page && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0 a8;D l%;<em> </em><!><!>",
	a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `b/${_w0}& D l`)("b%c")};${((_w0) => `<!>${_w0}<button> </button>`)($template)}`)(),
	a1: "a1;D%;<b><!>!</b>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_elide("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_patch_value($scope1_id, "a2", label);
			_html(`<em>${_text_resume($scope1_id, "a", label + n)}</em>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<b>${_patch_text($scope2_id, "a", label)}!</b>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a3");
			_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_show__closures, _scope($scope1_id, {
				c: label,
				_: _scope_with_id($scope0_id)
			})));
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	list_default({ item: $item });
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_patch_value($scope0_id, "a6", n, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _source_if($scope0_reason, 0) && input.show,
		h: n,
		i: $input_show__closures,
		j: $n__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "a5", input.show);
}, 1);
