// tags/note.marko
const $setup$1 = [[], []];
_shells({ b: "b,<i>note</i>" });
var note_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<i>note</i>");
});

// tags/wrap.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ c: "c !;D%;<section><!></section>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, { label: input.label }, 0, 0, $wg__input_content__OR__input_label, void 0, 1, $scope0_reason, 0, 0, 1);
	_html("</section>");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c2");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "vc0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "vc1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.label));
});

// template.marko
_shells({
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], ["a0"]], ["c>", $setup$1]))}`)(),
	a: "a !;b%;<!><!><!>",
	a5: /*@__PURE__*/ ((_w0) => `a5${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope2 = _patch_child($scope1_id, "a");
			wrap_default({
				label: input.label,
				content: attrTag({ content: _content_resume("a3", ({ label }) => {
					const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0), $scope2_page = _page_render();
					const $scope2_id = _scope_id();
					_patch_fill($scope2_id, "va1", label);
					let open = true;
					if ($scope0_page) _if(() => {
						{
							const $scope3_id = _scope_id();
							_html(`<p>${_text_resume($scope3_id, "a", label, $wg__label)}</p>`);
							$scope2_page && _scope($scope3_id, {});
							return 0;
						}
					}, $scope2_id, "a", 1, 1, 0, 0, 1);
					_html(`<button>toggle</button>${_el_resume($scope2_id, "b")}`);
					const $childScope = _patch_child($scope2_id, "c");
					note_default({});
					_script($scope2_id, "a0");
					_patch_fill($scope2_id, "va2", open, 1);
					$scope2_page && _scope($scope2_id, {
						f: label,
						g: open,
						c: _existing_scope($childScope)
					});
				}, $scope1_id, void 0, 1) })
			});
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a5"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) : (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.label));
}, 1);
