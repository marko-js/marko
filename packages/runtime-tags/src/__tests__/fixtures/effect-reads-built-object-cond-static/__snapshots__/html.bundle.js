// template.marko
const NONE = { t: "none" };
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const item = input.flag ? { t: input.title } : NONE;
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && input.flag,
		e: _write_if($scope0_reason, 0) && input.title,
		g: item
	});
}, 1);
