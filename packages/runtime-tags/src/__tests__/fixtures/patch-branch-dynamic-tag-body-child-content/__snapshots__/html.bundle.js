// tags/card.marko
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html("</section>");
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, { e: input.content }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0,",
	a: "a !;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_el = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.el || "div", {}, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_set_scope_reason(0);
				const $childScope = _patch_child($scope2_id, "a");
				card_default({ content: _content_resume("a2", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`<em>static ${_text_resume($scope3_id, "a", input.label, $wg__input_label * 2)}</em>`);
					_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
					$wg__input_label || _resume_branch($scope3_id);
				}, $scope2_id) });
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
			}, $scope1_id), 0, $wg__input_el, void 0, 2, $scope0_reason, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && input.el,
		f: input.label,
		h: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", input.el, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
