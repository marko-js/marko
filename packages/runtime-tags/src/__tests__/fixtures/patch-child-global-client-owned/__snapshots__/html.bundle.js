// tags/panel/index.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var panel_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _source_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_open = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			const $tag = input.body;
			_dynamic_tag($scope1_id, "a", $tag, {}, 0, 0, $wg__input_body, void 0, _patch_dynamic_tag($scope1_id, "a", $tag, 0, 0, 0, $scope0_reason, 2));
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, void 0, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 1) && input.body }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b1", input.body);
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a2;${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	panel_default({
		open: true,
		body: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", $global$1.brand)}</em>`);
			_fill_global_subscribe("a0", $scope1_id);
			_scope($scope1_id, {});
		}, $scope0_id) })
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "a3", count, 1);
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
