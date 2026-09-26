// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 1;
	_for_of([count], (_) => {
		const $scope1_id = _scope_id();
		_html(`<button class=inc>${_text_resume($scope1_id, "#text/1", _)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (_) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", _ + count)}</span>`);
				_subscribe($count__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_count#2/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/2", 1, 1, 1, 0, 1);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0");
	_if(() => {
		if (count) {
			const $scope3_id = _scope_id();
			let _ = count;
			_html(`<button class=mul>${_text_resume($scope3_id, "#text/1", _)}</button>${_el_resume($scope3_id, "#button/0")}`);
			_script($scope3_id, "__tests__/template.marko_3");
			_scope($scope3_id, { "_/2": _ }, "__tests__/template.marko", "8:2", { "_/2": "9:8" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/3": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
