// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_for_of(["a", "b"], (item, key) => {
		const $scope1_id = _scope_id();
		let count = 0;
		_html(`<button>${_text_mark($scope1_id, "#text/1", count)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(_escape(key));
				_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/2");
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			count,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { count: "4:8" });
	}, 0, $scope0_id, "#text/0", 1, 0);
	_html(`<button class=toggle></button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
