// template.marko
function getTag() {}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $Param_getter = _hoist($scope0_id, "__tests__/template.marko_0_Param#8/hoist");
	const $Unknown_getter = _hoist($scope0_id, "__tests__/template.marko_0_Unknown#9/hoist");
	const $Fn_getter = _hoist($scope0_id, "__tests__/template.marko_0_Fn#10/hoist");
	_dynamic_tag($scope0_id, "#text/0", $Param_getter, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/1", $Unknown_getter, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/2", $Fn_getter, {}, 0, 0, 0);
	const Param = input.show && input.renderer;
	const Unknown = getTag();
	const Fn = _resume(() => {}, "__tests__/template.marko_0/Fn");
	_scope($scope0_id, {
		input_show: _write_if($scope0_reason, 1) && input.show,
		input_renderer: _write_if($scope0_reason, 0) && input.renderer,
		Param,
		Unknown,
		Fn
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_renderer: ["input.renderer"],
		Param: "6:8",
		Unknown: "7:8",
		Fn: "8:8"
	});
	_assert_hoist(Param);
	_assert_hoist(Unknown);
	_assert_hoist(Fn);
}, 1);
