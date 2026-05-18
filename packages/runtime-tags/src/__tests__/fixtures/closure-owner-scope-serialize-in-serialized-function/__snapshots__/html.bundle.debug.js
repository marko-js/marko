// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const text = _resume(function() {
		return "HI";
	}, "__tests__/template.marko_0/text");
	if (1) {
		const $scope1_id = _scope_id();
		const run = _resume(function() {
			((el) => el())(_el_read_error).innerHTML = text();
		}, "__tests__/template.marko_1/run", $scope1_id);
		_html(`<div></div>${_el_resume($scope1_id, "#div/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_run");
		writeScope($scope1_id, {
			run,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { run: "4:10" });
	}
	writeScope($scope0_id, { text }, "__tests__/template.marko", 0, { text: "1:8" });
}, 1);
