// template.marko
const NONE = { t: "none" };
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const item = input.flag ? { t: input.title } : NONE;
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_item#6");
	_scope($scope0_id, {
		input_flag: _write_if($scope0_reason, 1) && input.flag,
		input_title: _write_if($scope0_reason, 0) && input.title,
		item
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_title: ["input.title"],
		item: "2:8"
	});
}, 1);
