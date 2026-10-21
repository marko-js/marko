// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = 0;
	const { "12345678901234567890Change": $2345678901234567890Change, "12345678901234567890": value } = {
		"12345678901234567890": 1,
		"12345678901234567890Change": _resume(function(v) {
			bar = v;
		}, "__tests__/template.marko_0/value", $scope0_id)
	};
	_html(`<button>${_escape(value)}:${_text_resume($scope0_id, "#text/2", bar, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_$2345678901234567890Change#6");
	_scope($scope0_id, {
		bar,
		$2345678901234567890Change
	}, "__tests__/template.marko", 0, {
		bar: "1:5",
		$2345678901234567890Change: "9:20"
	});
}, 1);
