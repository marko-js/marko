// template.marko
_shells({ a: "a !a1; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_v = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			let x = input.v;
			_html(`<p>${_text_mark($scope1_id, "a", x)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a1");
	$fg__input_v && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.v,
		f: on
	}) || $fg__input_v && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 0));
}, 1);
