// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let uid = input.id;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", uid + "-" + input.name, $wg__input_name)}</p>`);
			$wi__input_show__OR__input_name && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1), 0, 0, 1);
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_name: _write_if($scope0_reason, 1) && input.name,
		uid: $wi__input_show__OR__input_name && uid,
		n
	}, "__tests__/template.marko", 0, {
		input_name: ["input.name"],
		uid: "1:6",
		n: "3:6"
	});
}, 1);
