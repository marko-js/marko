// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let injection = "<\/SCRIPT>";
	_html(`<script${_attr_nonce()}>var x = '${_escape_script(injection)}'<\/script>`);
	_resume_branch($scope0_id);
}, 1);
