// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_for_of(["ab", "cde"], (_, i) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(_)}:<!>${_escape(n)}${_el_resume($scope1_id, "#text/2")}</div>${_el_resume($scope1_id, "#div/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			__length: _?.length,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { __length: ["_.length", "2:6"] });
	}, 0, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
