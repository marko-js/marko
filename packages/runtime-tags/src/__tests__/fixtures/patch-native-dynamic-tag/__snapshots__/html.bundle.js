// template.marko
_shells({ a: "a !a3;b%b ;<!><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? "section" : "article", {
		class: input.label,
		"data-count": count
	}, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_text_resume($scope1_id, "a", input.label, _write_guard($scope0_reason, 1))} ${_text_resume($scope1_id, "b", count, 2)}`);
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1"), "a2");
	}, $scope0_id));
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va6", count, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $wi__input_label && $input_label__closures,
		j: $count__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va4", input.on, !_server_guard($scope0_reason, 0)), _content_withhold(input.on), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label));
}, 1);
