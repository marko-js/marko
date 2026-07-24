// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	_html(`<input${_attr_input_value($scope0_id, "#input/0", text, _resume((_new_text) => {
		text = _new_text;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))} id=field>${_el_resume($scope0_id, "#input/0")}<span id=mirror>${_escape(text)}${_el_resume($scope0_id, "#text/1")}</span>`);
	_await($scope0_id, "#text/2", resolveAfter(text), (v) => {
		const $scope1_id = _scope_id();
		_html(`<div id=awaited>awaited: <!>${_escape(v)}${_el_resume($scope1_id, "#text/0")}</div>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "7:2");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
