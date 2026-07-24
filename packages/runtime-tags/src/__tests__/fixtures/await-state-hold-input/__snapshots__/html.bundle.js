// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	_html(`<input${_attr_input_value($scope0_id, "a", text, _resume((_new_text) => {
		text = _new_text;
	}, "a0", $scope0_id))} id=field>${_el_resume($scope0_id, "a")}<span id=mirror>${_escape(text)}${_el_resume($scope0_id, "b")}</span>`);
	_await($scope0_id, "c", resolveAfter(text), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div id=awaited>awaited: <!>${_escape(v)}${_el_resume($scope1_id, "a")}</div>`);
		writeScope($scope1_id, {});
	});
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
