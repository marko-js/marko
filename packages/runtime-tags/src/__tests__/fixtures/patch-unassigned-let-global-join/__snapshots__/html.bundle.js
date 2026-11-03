// template.marko
_shells({ a: "a;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let x = input.a;
	_html(`<p>${_text_resume($scope0_id, "a", x + $global$1.flag)}</p>`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_scope($scope0_id, { e: x });
}, 1);
