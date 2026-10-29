// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			_html(`<span>${_text_resume($scope1_id, "a", $global$1.g + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { c: b });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
