// template.marko
_shells({ a: "a;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let seed = $global().suffix;
	_html(`<p>${_text_resume($scope0_id, "a", seed)}</p>`);
	_fill_global_subscribe("a0", $scope0_id);
	_scope($scope0_id, {});
}, 1);
