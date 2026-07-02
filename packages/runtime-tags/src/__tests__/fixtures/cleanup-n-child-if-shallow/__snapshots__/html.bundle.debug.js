// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>a</div><span>b</span><p>c</p>");
	_script($scope0_id, "__tests__/tags/child.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/child.marko", 0, { input: 0 });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/0")}<div></div>${_el_resume($scope0_id, "#div/1")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			child_default({ write: _resume(function(state) {
				((el) => el())(_el_read_error).innerHTML = state;
			}, "__tests__/template.marko_1/write", $scope1_id) });
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1);
