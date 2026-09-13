// template.marko
_shells({ a: "a !a1;b%b ;<!><!><button>+</button>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? "section" : "article", {
		class: input.label,
		"data-count": count
	}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_text_resume($scope1_id, "a", input.label)} ${_text_resume($scope1_id, "b", count, 2)}`);
		_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id));
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $input_label__closures,
		j: $count__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.on), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a1", input.label));
}, 1, 1);
