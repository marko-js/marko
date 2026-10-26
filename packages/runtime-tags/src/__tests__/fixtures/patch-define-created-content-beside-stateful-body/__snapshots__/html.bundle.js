// template.marko
const $Panel_content2__walks = "b%c";
const $Panel_content2__template = "<!><!><!>";
_shells({
	a1: "a1",
	a: "a !a10;b%b%b ;<!><!><!><button>toggle</button>",
	a2: /*@__PURE__*/ (() => `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content2__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content2__template)}`)(),
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_open__OR__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, content }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__content = _write_guard($scope4_reason, 2), $scope4_page = _page_render(), $wg__isOpen = _write_guard($scope4_reason, 1), $cg__isOpen = _client_guard($scope4_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope5_id = _scope_id();
				_dynamic_tag($scope5_id, "a", content, {}, 0, 0, $wg__content, void 0, 2, $scope4_reason, 2);
				$scope4_page && _write_if($scope4_reason, 0) && _scope($scope5_id, { _: _write_if($scope4_reason, 2) && _scope_with_id($scope4_id) });
				return 0;
			}
		}, $scope4_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a0"], $scope4_reason, 1);
		$scope4_page ? _write_if($scope4_reason, 1) && _scope($scope4_id, { e: _unfilled_if($scope4_reason, 1) && content }) : (_filled_guard($scope4_reason, 2) && $cg__isOpen && _patch_fill($scope4_id, "va4", content, !_server_guard($scope4_reason, 2)), $cg__isOpen && _content_withhold(content));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			Panel.content({
				isOpen: input.open,
				content: _content_resume("a1", () => {
					_scope_reason();
					const $scope2_page = _page_render();
					const $scope2_id = _scope_id();
					_html(`<em>${_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "a5" : "a6");
					$scope2_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_open__OR__input_label && _scope_with_id($scope1_id) }));
				}, $scope1_id)
			});
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a7");
			$scope0_page && _scope($scope1_id, {
				_: $wi__input_show__OR__input_open__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a2"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, { isOpen: true }, _content_resume("a8", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		const $scope3_page = _page_render();
		_html(`<b>${_text_resume($scope3_id, "a", input.label, $wg__input_label)}!</b>`);
		$scope3_page && _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cp: $wi__input_label && 1
		}), "a9", $wg__input_label);
		$wg__input_label || _resume_branch($scope3_id);
	}, $scope0_id));
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a10");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		h: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 5) && Panel,
		m: Tag,
		p: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va11", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va12", input.label, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _patch_fill($scope0_id, "va13", Tag, !_server_guard($scope0_reason, 5)), _content_withhold(Tag));
}, 1);
