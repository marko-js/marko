// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const y = input.label + "!";
			_html(`<p>${_text_resume($scope1_id, "a", y + n)}</p>`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				b: y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 0, 0, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: n
	});
}, 1);
