// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_escape(x)}</p><p>${_text_resume($scope0_id, "#text/1", x + input.w, $wg__input_w)}</p>`);
	$wi__input_w && _scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
	$wg__input_w || $wi__input_w && _resume_branch($scope0_id);
}, 1);
