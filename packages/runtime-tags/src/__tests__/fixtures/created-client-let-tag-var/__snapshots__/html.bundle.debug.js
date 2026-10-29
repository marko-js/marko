// tags/two.marko
var two_default = _template("__tests__/tags/two.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = "t";
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			let v = two_default({});
			_html(`<span>${_text_resume($scope1_id, "#text/2", v + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				b,
				v
			}, "__tests__/template.marko", "1:2", {
				b: "2:8",
				v: "3:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
