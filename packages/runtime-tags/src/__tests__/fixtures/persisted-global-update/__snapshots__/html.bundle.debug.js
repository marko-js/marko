// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let read = "";
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", $global().brand)}${_el_resume($scope0_id, "#text/0")}</h1><button>read</button>${_el_resume($scope0_id, "#button/1")}<p>${_escape(read)}${_el_resume($scope0_id, "#text/2")}</p></main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1, 1);
