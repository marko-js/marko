// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $show__closures = new Set();
	const tag = "section";
	let count = 0;
	let show = true;
	_dynamic_tag($scope0_id, "#text/0", tag, {}, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=inc>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				forOf([1, 2], (i) => {
					const $scope3_id = _scope_id();
					_html(`<span class=inner>${_text_resume($scope3_id, "#text/0", count * i)}</span>`);
					_subscribe($count__closures, _scope($scope3_id, {
						i,
						_: _scope_with_id($scope2_id),
						"ClosureSignalIndex:count/4": 1
					}, "__tests__/template.marko", "9:6", { i: "9:10" }), "__tests__/template.marko_3_count#2/subscribe");
				});
				_scope($scope2_id, {}, "__tests__/template.marko", "8:4");
				return 0;
			}
		}, $scope1_id, "#text/2");
		_html(`<button id=toggle>toggle</button>${_el_resume($scope1_id, "#button/3")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($show__closures, _subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_1_count#2/subscribe"), "__tests__/template.marko_1_show#3/subscribe");
	}, $scope0_id), 0, 0);
	_scope($scope0_id, {
		count,
		show,
		"ClosureScopes:count/4": $count__closures,
		"ClosureScopes:show/5": $show__closures
	}, "__tests__/template.marko", 0, {
		count: "4:6",
		show: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
