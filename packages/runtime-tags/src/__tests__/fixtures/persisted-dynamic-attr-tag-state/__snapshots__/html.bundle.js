// card.marko
_shells({ a: "a;E l%;<section><em> </em><!></section>" });
var card_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta.n, void 0, $scope0_owned, 0)}</em>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ b: "b !b1;b%b ;<!><!><button>+</button>" });
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? card_default : null, { meta: attrTag({ n: count }) }, _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(_text_resume($scope1_id, "a", input.label));
		_subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id));
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	$scope0_reason ? _scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $input_label__closures
	}) : (_filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "b0", input.on), _filled_guard($scope0_owned, 1) && _patch_value($scope0_id, "b1", input.label));
}, 1, 1);
