// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	let show = false;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}<button id=show>show</button>${_el_resume($scope0_id, "#button/1")}<div>count: <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</div>`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<span>late: <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</span>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, 1, 1, 0, 1);
	_try($scope0_id, "#text/4", _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", resolveAfter(count), (value) => {
			const $scope4_id = _scope_id();
			_html(`resolved: <!>${_escape(value)}${_el_resume($scope4_id, "#text/0")}`);
			writeScope($scope4_id, {}, "__tests__/template.marko", "11:4");
		});
		_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:2"));
		_resume_branch($scope2_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "2:6" });
	_resume_branch($scope0_id);
}, 1);
