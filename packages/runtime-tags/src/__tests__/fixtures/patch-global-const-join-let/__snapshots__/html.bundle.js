// template.marko
_shells({ a: "a !a2; b%b%b%bD ;<button>toggle</button><!><!><!><p> </p>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	const flag = $global$1.flag;
	const off = !flag;
	const { user } = $global$1;
	const g = $global$1;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (flag && on) {
			const $scope1_id = _scope_id();
			_html("<b>shown</b>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_if(() => {
		if (!off && on) {
			const $scope2_id = _scope_id();
			_html("<i>chained</i>");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_if(() => {
		if (g.flag && on) {
			const $scope3_id = _scope_id();
			_html("<u>whole</u>");
			_scope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "d", 1, 1, 0, 0, 1);
	_html(`<p>${_text_mark($scope0_id, "e", user.name)}</p>`);
	_fill_global_subscribe("a0", $scope0_id);
	_fill_global_subscribe("a1", $scope0_id);
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", "g");
	_patch_render($scope0_id, "a4", "i");
	_patch_render($scope0_id, "a5", "m");
	_patch_render($scope0_id, "a6", "p");
	_scope($scope0_id, {
		f: on,
		g: flag,
		i: off,
		m: user?.name,
		p: g?.flag
	}) || (_patch_write($scope0_id, "xg", flag), _patch_write($scope0_id, "xi", off), _patch_write($scope0_id, "xm", user?.name), _patch_write($scope0_id, "xp", g?.flag));
}, 1);
