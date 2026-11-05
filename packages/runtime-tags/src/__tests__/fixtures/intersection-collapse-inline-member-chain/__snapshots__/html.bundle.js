// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const half = 1.5;
	_html(`<button>inc</button>${_el_mark($scope0_id, "a")}<div>${_text_mark($scope0_id, "b", count + half.toFixed(1) + half.constructor.name)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
}, 1);
