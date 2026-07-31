// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let injection = "<\/SCRIPT>";
	_html_opens("__tests__/template.marko:2:1"), _html(`<script${_attr_nonce()}>${_escape_script(`var x = '${_to_text(injection)}'`)}<\/script>`);
	_resume_branch($scope0_id);
}, 1);
