// tags/note.marko
_shells({ b: "b,<i>note</i>" });
var note_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<i>note</i>");
});

// tags/wrap.marko
const $template = "<section><!></section>";
_shells({ c: "c !;D%;<section><!></section>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, { label: input.label }, 0, 0, $wg__input_content__OR__input_label, void 0, 1, $scope0_reason, 0);
	_html("</section>");
	_patch_write($scope0_id, "wd", input.content, 1);
	_patch_write($scope0_id, "we", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c2");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vc0", input.content, !_server_guard($scope0_reason, 1)), _client_guard($scope0_reason, 2) && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vc1", input.label, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.label));
});

// template.marko
_shells({
	a0: "a0 !a2,",
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope2 = _patch_child($scope1_id, "a");
			wrap_default({
				label: input.label,
				content: attrTag({ content: _content_resume("a0", ({ label }) => {
					const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_patch_value($scope2_id, "va3", label);
					let open = true;
					if ($scope0_page) _if(() => {
						{
							const $scope3_id = _scope_id();
							_html(`<p>${_text_resume($scope3_id, "a", label, $wg__label)}</p>`);
							_scope($scope3_id, {});
							return 0;
						}
					}, $scope2_id, "a", 1, 1, 0, 0, 1);
					_html(`<button>toggle</button>${_el_resume($scope2_id, "b")}`);
					const $childScope = _patch_child($scope2_id, "c");
					note_default({});
					_script($scope2_id, "a2");
					_patch_value($scope2_id, "va4", open, 1);
					_scope($scope2_id, {
						f: label,
						g: open,
						c: _existing_scope($childScope)
					});
				}, $scope1_id) })
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.label }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 1));
}, 1);
