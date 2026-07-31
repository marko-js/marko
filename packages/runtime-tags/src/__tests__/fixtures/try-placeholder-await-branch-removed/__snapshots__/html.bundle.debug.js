// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_html_opens("__tests__/template.marko:3:1"), _html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", resolveAfter("loaded", 2), (value) => {
					const $scope4_id = _scope_id();
					_html(_escape(value));
				}, 0);
				writeScope($scope3_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_html_opens("__tests__/template.marko:10:3"), _html("<div>settled</div>");
		_subscribe($show__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		"ClosureScopes:show": $show__closures
	}, "__tests__/template.marko", 0, { show: "2:6" });
	_resume_branch($scope0_id);
}, 1);
