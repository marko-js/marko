// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("__tests__/template.marko_1_content", ({ "aChange": $aChange, a }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $valueChange = $aChange;
		_html(`<input${_attr_input_value($scope1_id, "#input/0", a, $valueChange)}>${_el_resume($scope1_id, "#input/0")}<input${_attr_input_value($scope1_id, "#input/1", a, $valueChange)}>${_el_resume($scope1_id, "#input/1")}<input${_attr_input_value($scope1_id, "#input/2", a, $valueChange)}>${_el_resume($scope1_id, "#input/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			$aChange: _serialize_if($scope1_reason, 1) && $aChange,
			a: _serialize_if($scope1_reason, 0) && a
		}, "__tests__/template.marko", "1:2", {
			$aChange: 0,
			a: "1:16"
		});
	}) };
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	Wrap.content({ a: "z" + n });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "6:6" });
	_resume_branch($scope0_id);
}, 1);
