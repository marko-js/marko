// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	forOf(["a", "b"], (label) => {
		const $scope1_id = _scope_id();
		_html(`<button>pick</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			c: label,
			_: _scope_with_id($scope0_id)
		});
	});
	_html(`<div class=log>${_text_resume($scope0_id, "b", log)}</div>`);
	_scope($scope0_id, { c: log });
}, 1);
