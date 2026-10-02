// legacy-greeting.js
function legacy_greeting_default(_input, out) {
	out.write("<b>legacy</b>");
}

// template.marko
legacy_greeting_default._ ??= legacy_greeting_default;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	let count = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", legacy_greeting_default, {}, 0, 0, 0);
			_html(`<button id=inc>${_text_resume($scope1_id, "#text/2", count)}</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		count
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		count: "2:6"
	});
}, 1);
