// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_label = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const section = { content: _content_resume("__tests__/tags/panel.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>${_escape(input.label)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
		_subscribe($si__input_label && $input_label__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2"));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $return = { section };
	writeScope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label": $si__input_label && $input_label__closures
	}, "__tests__/tags/panel.marko", 0, { input_label: ["input.label"] });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let idx = 0;
	let a = panel_default({ label: "alpha" });
	let b = panel_default({ label: "beta" });
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/4", (idx ? b : a).section, {});
	_html(`</div><button>swap</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		idx,
		a,
		b
	}, "__tests__/template.marko", 0, {
		idx: "1:6",
		a: "2:8",
		b: "3:8"
	});
	_resume_branch($scope0_id);
}, 1);
