// template.marko
const $template = "<button>toggle</button><!><!><!><p> </p>";
const $walks = " b%b%b%bD l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%b%b%bD ;<button>toggle</button><!><!><!><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	const flag = $global$1.flag;
	const off = !flag;
	const { user } = $global$1;
	const g = $global$1;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (flag && on) {
			const $scope1_id = _scope_id();
			_html("<b>shown</b>");
			_scope($scope1_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_if(() => {
		if (!off && on) {
			const $scope2_id = _scope_id();
			_html("<i>chained</i>");
			_scope($scope2_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_if(() => {
		if (g.flag && on) {
			const $scope3_id = _scope_id();
			_html("<u>whole</u>");
			_scope($scope3_id, {}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, 1, 0, 0, 1);
	_html(`<p>${_text_mark($scope0_id, "#text/4", on ? user.name : "-")}</p>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global#5/subscribe", $scope0_id);
	_fill_global_subscribe("__tests__/template.marko_0_$global_flag#6/subscribe", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_on#5_flag#6/setup", "flag");
	_patch_render($scope0_id, "__tests__/template.marko_0_on#5_off#8/setup", "off");
	_patch_render($scope0_id, "__tests__/template.marko_0_on#5_user_name#12/setup", "user_name");
	_patch_render($scope0_id, "__tests__/template.marko_0_on#5_g_flag#15/setup", "g_flag");
	_scope($scope0_id, {
		on,
		flag,
		off,
		user_name: user?.name,
		g_flag: g?.flag
	}, "__tests__/template.marko", 0, {
		on: "1:6",
		flag: "3:8",
		off: "4:8",
		user_name: ["user.name", "5:10"],
		g_flag: ["g.flag", "6:8"]
	}) || (_patch_write($scope0_id, "PatchMarkedWrite:flag", flag), _patch_write($scope0_id, "PatchMarkedWrite:off", off), _patch_write($scope0_id, "PatchMarkedWrite:user_name", user?.name), _patch_write($scope0_id, "PatchMarkedWrite:g_flag", g?.flag));
}, 1);
