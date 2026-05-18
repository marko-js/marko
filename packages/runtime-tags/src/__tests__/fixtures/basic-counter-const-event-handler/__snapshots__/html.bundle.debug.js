// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	const increment = _resume(function() {
		clickCount++;
	}, "__tests__/template.marko_0/increment", $scope0_id);
	_html(`<button>${_escape(clickCount)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_increment");
	writeScope($scope0_id, {
		clickCount,
		increment
	}, "__tests__/template.marko", 0, {
		clickCount: "1:6",
		increment: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);
