// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a0: "a0,",
	a1: "a1,",
	a: /*@__PURE__*/ (() => `a !a7;${((_w0, _w1) => `D/${_w0}&/${_w1}& l`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($Panel_content__template, $Panel_content__template)}`)(),
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Panel = { content: _content("a3", ({ open, body }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__body = _write_guard($scope3_reason, 2), $wg__open = _write_guard($scope3_reason, 1), $scope3_page = _page_render();
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", body, {}, 0, 0, $wg__body, void 0, 2, $scope3_reason, 2);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__open, void 0, void 0, void 0, ["a2"], $scope3_reason, 1);
		$scope3_page ? _write_if($scope3_reason, 1) && _scope($scope3_id, { e: _unfilled_if($scope3_reason, 1) && body }) : _filled_guard($scope3_reason, 2) && _client_guard($scope3_reason, 1) && _patch_value($scope3_id, "va4", body, !_server_guard($scope3_reason, 2));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "a");
	Panel.content({
		open: true,
		body: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.title, void 0, $scope0_reason, 1)}</em>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a5");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) })
	});
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope2 = _patch_child($scope0_id, "b");
	Panel.content({
		open: input.open,
		body: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<strong>${_patch_text($scope2_id, "a", input.title, void 0, $scope0_reason, 1)}</strong>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "a6");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				Ci: $wi__input_title && 1
			}));
		}, $scope0_id) })
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a7");
	_patch_value($scope0_id, "va9", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		h: count,
		i: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va8", input.title, !_server_guard($scope0_reason, 1));
}, 1);
