// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let entries = {
		a: 1,
		b: 2
	};
	_html(`<button>change</button>${_el_mark($scope0_id, "#button/0")}<ul>`);
	_for_in(entries, (key, value) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", key)}=${_text_mark($scope1_id, "#text/1", value, 2)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, (_key, value) => value, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
