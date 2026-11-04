// template.marko
_shells({ a: "a !a3;b%b ;<!><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? "section" : "article", {
		class: input.label,
		"data-count": count
	}, 0, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_text_mark($scope1_id, "a", input.label, _write_guard($scope0_reason, 1) * 2)} ${_text_mark($scope1_id, "b", count, 2)}`);
		$cg__input_label && _patch_render($scope1_id, "a1");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1"), "a2");
	}, $scope0_id));
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$fg__input_label && _patch_subscribers($scope0_id, "a4", "f");
	_patch_render($scope0_id, "a5", [$fg__input_on && "e", $fg__input_label && "f"]);
	_scope($scope0_id, {
		e: input.on,
		f: input.label,
		g: count,
		i: $wi__input_label && $input_label__closures,
		j: $count__closures
	}) || ($fg__input_on && _patch_write($scope0_id, "xe", input.on, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
