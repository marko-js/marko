// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let reveal = false;
	_html(`<button>reveal</button>${_el_resume($scope0_id, "#button/0")}`);
	_show_start(reveal, 1);
	_html(`${_escape(input.note)}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 0))}`);
	_show_end($scope0_id, "#text/3", reveal);
	_script($scope0_id, "__tests__/template.marko_0_reveal");
	writeScope($scope0_id, { reveal }, "__tests__/template.marko", 0, { reveal: "1:6" });
	_resume_branch($scope0_id);
}, 1);
