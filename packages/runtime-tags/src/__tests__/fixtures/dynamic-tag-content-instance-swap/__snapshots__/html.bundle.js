// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $return = { section: { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>${_escape(input.label)}${_el_resume($scope1_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
		_subscribe($si__input_label && $input_label__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) } };
	writeScope($scope0_id, {
		c: input.label,
		e: $si__input_label && $input_label__closures
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let idx = 0;
	let a = panel_default({ label: "alpha" });
	let b = panel_default({ label: "beta" });
	_html("<div>");
	_dynamic_tag($scope0_id, "e", a.section, {});
	_html(`</div><button>swap</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: idx,
		h: a,
		i: b
	});
	_resume_branch($scope0_id);
}, 1);
