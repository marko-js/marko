// template.marko
_shells({ a: "a;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = "a";
	_html(`<p>${_text_resume($scope0_id, "a", x + input.w, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && x });
}, 1);
