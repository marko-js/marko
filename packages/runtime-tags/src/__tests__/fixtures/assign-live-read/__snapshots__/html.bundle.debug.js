// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const resetCount = _resume(function() {
		if (count > 0) {
			count = 0;
		}
	}, "__tests__/template.marko_0/resetCount", $scope0_id);
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}<button></button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_count#3");
	_script($scope0_id, "__tests__/template.marko_0_resetCount#4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		resetCount
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		resetCount: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);
