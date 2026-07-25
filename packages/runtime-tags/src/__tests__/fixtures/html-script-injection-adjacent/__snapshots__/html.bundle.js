// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<script${_attr_nonce()}>${_escape_script(`var x = '${_to_text("<")}${_to_text("/script>")}${_to_text("<img src=x onerror=alert(1)>")}'`)}<\/script>`);
	_resume_branch($scope0_id);
}, 1);
