// card.marko
_shells({ a: "a;E l%;<section><em> </em><!></section>" });
var card_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta.n, void 0, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ b: "b !b2;b%b ;<!><!><button>+</button>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? card_default : null, { meta: attrTag({ n: count }) }, _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", input.label, $wg__input_label));
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id));
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "vb5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb3", input.on, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb4", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
