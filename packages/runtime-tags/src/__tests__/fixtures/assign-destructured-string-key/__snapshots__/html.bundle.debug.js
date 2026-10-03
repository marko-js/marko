// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = 0;
	const { "my-keyChange": $mykeyChange, "my-key": value } = {
		"my-key": 1,
		"my-keyChange": _resume(function(v) {
			bar = v;
		}, "__tests__/template.marko_0/myKeyValue", $scope0_id)
	};
	_html(`<button>${_escape(value)}:${_text_resume($scope0_id, "#text/2", bar, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_$mykeyChange#6");
	_scope($scope0_id, {
		bar,
		$mykeyChange
	}, "__tests__/template.marko", 0, {
		bar: "1:5",
		$mykeyChange: "9:20"
	});
}, 1);
