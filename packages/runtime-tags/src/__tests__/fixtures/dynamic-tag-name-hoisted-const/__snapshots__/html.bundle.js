// template.marko
function $Fn() {}
_resume("a0", $Fn);
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $Param_getter = _hoist($scope0_id, "a1");
	const $Unknown_getter = _hoist($scope0_id, "a2");
	const $Fn_getter = _hoist($scope0_id, "a3");
	_dynamic_tag($scope0_id, "a", $Param_getter, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "b", $Unknown_getter, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "c", $Fn_getter, {}, 0, 0, 0);
	const Param = input.show && input.renderer;
	const Unknown = void 0;
	const Fn = $Fn;
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.show,
		g: _write_if($scope0_reason, 0) && input.renderer,
		i: Param,
		j: Unknown,
		k: Fn
	});
}, 1);
