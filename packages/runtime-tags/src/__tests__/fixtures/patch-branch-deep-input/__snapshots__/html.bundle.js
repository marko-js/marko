// template.marko
_shells({ a: "a !a0; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_opts_show = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>t</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.opts.show && on) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_opts_show && "f");
	_scope($scope0_id, {
		f: input.opts?.show,
		g: on
	}) || $fg__input_opts_show && _patch_write($scope0_id, "xf", input.opts?.show, !_server_guard($scope0_reason, 0));
}, 1);
