// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix__OR__input_level = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.prefix + input.level, {}, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button>${_text_mark($scope1_id, "b", count)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2");
	}, $scope0_id), 0, $wg__input_prefix__OR__input_level);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.prefix,
		e: _write_if($scope0_reason, 1) && input.level,
		g: count,
		h: $count__closures
	});
	$wg__input_prefix__OR__input_level || _resume_branch($scope0_id);
}, 1);
