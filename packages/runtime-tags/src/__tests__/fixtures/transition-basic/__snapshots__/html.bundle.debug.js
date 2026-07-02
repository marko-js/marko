// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	let other = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}<button id=other>other</button>${_el_resume($scope0_id, "#button/1")}<div>count: <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</div><div>other: <!>${_escape(other)}${_el_resume($scope0_id, "#text/3")}</div>`);
	_try($scope0_id, "#text/4", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(count), (value) => {
			const $scope3_id = _scope_id();
			_html(`resolved: <!>${_escape(value)}${_el_resume($scope3_id, "#text/0")}`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "9:4");
		});
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0_other");
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		other,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		count: "2:6",
		other: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
