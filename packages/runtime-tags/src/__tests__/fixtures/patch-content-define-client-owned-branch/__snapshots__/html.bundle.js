// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({ a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `D/${_w0}& l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Panel = { content: _content("a0", ({ open, body }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__body = _write_guard($scope2_reason, 2), $scope2_page = _page_render(), $wg__open = _write_guard($scope2_reason, 1);
		if ($scope0_page) _if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", body, {}, 0, 0, $wg__body);
				$scope2_page && _write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 0), $wg__open);
		$scope2_page ? _write_if($scope2_reason, 1) && _scope($scope2_id, { e: body }) : (_filled_guard($scope2_reason, 2) && _patch_fill($scope2_id, "va1", body, !_server_guard($scope2_reason, 2)), _content_withhold(body));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "a");
	Panel.content({
		open: true,
		body: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.title, void 0, $scope0_reason, 0)}</em>`);
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2");
		}, $scope0_id) })
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: count,
		g: _write_if($scope0_reason, 0) && $input_title__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.title, !_server_guard($scope0_reason, 0));
}, 1);
