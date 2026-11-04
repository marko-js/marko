// card.marko
_shells({ a: "a;E l%;<section><em> </em><!></section>" });
var card_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_text_mark($scope0_id, "a", input.meta.n, 1, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({ b: "b !b2;b%b ;<!><!><button>+</button>" });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? card_default : null, { meta: attrTag({ n: count }) }, 0, _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.label, $wg__input_label * 2));
		$cg__input_label && _patch_render($scope1_id, "b1");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "b1", $wg__input_label);
	}, $scope0_id));
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	$fg__input_label && _patch_subscribers($scope0_id, "b3", "f");
	_patch_render($scope0_id, "b4", $fg__input_on && "e");
	_scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $wi__input_label && $input_label__closures
	}) || ($fg__input_on && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
