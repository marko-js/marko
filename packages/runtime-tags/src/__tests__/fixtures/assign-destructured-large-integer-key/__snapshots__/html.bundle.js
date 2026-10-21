// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = 0;
	const { "12345678901234567890Change": $2345678901234567890Change, "12345678901234567890": value } = {
		"12345678901234567890": 1,
		"12345678901234567890Change": _resume(function(v) {
			bar = v;
		}, "a0", $scope0_id)
	};
	_html(`<button>${_escape(value)}:${_text_resume($scope0_id, "c", bar, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: bar,
		g: $2345678901234567890Change
	});
}, 1);
