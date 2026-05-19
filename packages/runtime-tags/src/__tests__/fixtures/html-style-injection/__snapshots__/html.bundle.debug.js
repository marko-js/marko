// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let injection = "</STYLE>";
	_html(`<style${_attr_nonce()}>.evil { content: '${_escape_style(injection)}'; }</style>`);
	_resume_branch($scope0_id);
}, 1);
