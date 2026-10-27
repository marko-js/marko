// tags/widget/index.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1;D ;<b> </b>",
	a: "a; ;<ul></ul>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c")};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_text__closures = /* @__PURE__ */ new Set();
		_html("<li>");
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a", 0);
		widget_default({ content: _content_elide("a1", () => {
			_scope_reason();
			const $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`<b>${_patch_text($scope2_id, "a", item.text, void 0, $scope0_reason, 0)}</b>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "a0");
			$scope2_page && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_text__closures, _scope($scope2_id, { _: $wi__input_items && _scope_with_id($scope1_id) }));
		}, $scope1_id) });
		_patch_child_end();
		_html("</li>");
		$scope0_page && _scope($scope1_id, {
			e: $wi__input_items && _unfilled_if($scope0_reason, 0) && $for_content__item_text__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
