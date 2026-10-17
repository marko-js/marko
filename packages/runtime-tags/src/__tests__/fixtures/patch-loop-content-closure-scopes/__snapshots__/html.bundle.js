// tags/panel.marko
const $template = "<div class=panel><h4> </h4><div class=body><!></div></div>";
const $walks = "E lD%m";
_shells({ b: "b;E lD%;<div class=panel><h4> </h4><div class=body><!></div></div>" });
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div class=panel><h4>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</h4><div class=body>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</div></div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_panels = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.panels, (p) => {
		const $scope1_id = _scope_id();
		const $for_content__p_text__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "a");
		panel_default({
			label: p.label,
			content: _content_elide("a0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_patch_text($scope2_id, "a", p.text, void 0, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__p_text__closures, _scope($scope2_id, { _: $wi__input_panels && _scope_with_id($scope1_id) }));
			}, $scope1_id)
		});
		_scope($scope1_id, {
			f: $wi__input_panels && _unfilled_if($scope0_reason, 0) && $for_content__p_text__closures,
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
