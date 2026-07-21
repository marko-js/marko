// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}<div>count: <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</div>`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(count), (a) => {
			const $scope4_id = _scope_id();
			_html(`a: <!>${_escape(a)}${_el_resume($scope4_id, "#text/0")}`);
			writeScope($scope4_id, {}, "__tests__/template.marko", "7:4");
		});
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("LOADING A...");
	}, $scope0_id) }) });
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", resolveAfter(count * 10, 2), (b) => {
			const $scope6_id = _scope_id();
			_html(`b: <!>${_escape(b)}${_el_resume($scope6_id, "#text/0")}`);
			writeScope($scope6_id, {}, "__tests__/template.marko", "11:4");
		});
		_subscribe($count__closures, writeScope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count": 1
		}, "__tests__/template.marko", "9:2"));
		_resume_branch($scope2_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5_content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("LOADING B...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "2:6" });
	_resume_branch($scope0_id);
}, 1);
