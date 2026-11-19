// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let entries = {
		a: 1,
		b: 2
	};
	_html(`<button>change</button>${_el_mark($scope0_id, "a")}<ul>`);
	_for_in(entries, (key, value) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", key)}=${_text_mark($scope1_id, "b", value, 2)}</li>`);
		_scope($scope1_id, {});
	}, (_key, value) => value, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
