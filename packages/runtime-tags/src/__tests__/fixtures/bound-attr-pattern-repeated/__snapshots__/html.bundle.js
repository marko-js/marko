// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("a0", ({ "aChange": $aChange, a }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $valueChange = $aChange;
		_html(`<input${_attr_input_value($scope1_id, "a", a, $valueChange)}>${_el_resume($scope1_id, "a")}<input${_attr_input_value($scope1_id, "b", a, $valueChange)}>${_el_resume($scope1_id, "b")}<input${_attr_input_value($scope1_id, "c", a, $valueChange)}>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, {
			f: _serialize_if($scope1_reason, 1) && $aChange,
			g: _serialize_if($scope1_reason, 0) && a
		});
	}) };
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	Wrap.content({ a: "z1" });
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: n,
		c: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
