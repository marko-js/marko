// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let outer = true;
	let inner = true;
	let count = 0;
	_html(`<div><button id=outer></button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			_html(`<button id=inner></button>${_el_resume($scope1_id, "#button/0")}`);
			_if(() => {
				if (inner) {
					const $scope2_id = _scope_id();
					_html(`<button id=count>${_escape(count)}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}`);
					_script($scope2_id, "__tests__/template.marko_2_count");
					_subscribe($count__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:6"));
					return 0;
				}
			}, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
			_script($scope1_id, "__tests__/template.marko_1_inner");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0_outer");
	writeScope($scope0_id, {
		outer,
		inner,
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		inner: "2:6",
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
