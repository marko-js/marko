// tags/panel.marko
const $template$3 = "<section> </section>";
const $walks$3 = "D l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/panel.marko": "__tests__/tags/panel.marko;D ;<section> </section>" });
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section>${_text_mark($scope0_id, "#text/0", input.data.title, 1, $scope0_reason, 0)}</section>`);
	_scope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});

// tags/card.marko
const $template$2 = "<div> </div>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<div> </div>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "#text/0", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/toggle.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/toggle.marko_0"]];
_shells({ "__tests__/tags/toggle.marko": "__tests__/tags/toggle.marko !__tests__/tags/toggle.marko_0; D ;<button> </button>" });
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_user_bio = _filled_guard($scope0_reason, 0), $fg__input_user_name = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>${_text_mark($scope0_id, "#text/1", open ? input.user.bio : input.user.name)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/toggle.marko_0");
	_patch_render($scope0_id, "__tests__/tags/toggle.marko_0_input_user_bio#5_input_user_name#6_open#7/setup", [$fg__input_user_bio && "input_user_bio", $fg__input_user_name && "input_user_name"]);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/toggle.marko_0_open#7/fill", open, 1);
	_scope($scope0_id, {
		input_user_bio: input.user?.bio,
		input_user_name: input.user?.name,
		open
	}, "__tests__/tags/toggle.marko", 0, {
		input_user_bio: ["input.user.bio"],
		input_user_name: ["input.user.name"],
		open: "1:6"
	}) || ($fg__input_user_bio && _patch_write($scope0_id, "PatchMarkedWrite:input_user_bio", input.user?.bio, !_server_guard($scope0_reason, 0)), $fg__input_user_name && _patch_write($scope0_id, "PatchMarkedWrite:input_user_name", input.user?.name, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $template = "<button class=inc> </button><!><!><!>";
const $walks = " D l%b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%;<button class=inc> </button><!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$3])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template$3}`,
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell${_shell_marker([[], []], ["#childScope/0>", $setup$2])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template$2}`,
	"__tests__/template.marko_3*shell": `__tests__/template.marko_3*shell${_shell_marker([[], []], ["#childScope/0>", $setup$2], ["#childScope/1>", $setup$1])};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", $walks$1)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_other = _updates_from($scope0_reason, 5), $ui__input_admin = _unfilled_if($scope0_reason, 1), $ui__input_more = _unfilled_if($scope0_reason, 4), $fg__input_adminData = _filled_guard($scope0_reason, 2), $fg__input_user = _filled_guard($scope0_reason, 3), $cg__input_admin = _client_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 5), $fg__input_props_user = _filled_guard($scope0_reason, 6), $cg__input_more = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.admin) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			panel_default({ data: input.adminData });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_adminData#0:7/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 0);
			card_default({ user: input.user });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_render($scope2_id, "__tests__/template.marko_2_input_user#0:8/setup");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "6:2");
			return 1;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"], $scope0_reason, 1);
	_if(() => {
		if (input.more) {
			const $scope3_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 6) << 1);
			const $childScope3 = _peek_scope_id($scope3_id, "#childScope/0", 1);
			card_default(input.props);
			_patch_child_end();
			_set_scope_reason($uf__input_other << 1 | $uf__input_other << 3);
			const $childScope4 = _peek_scope_id($scope3_id, "#childScope/1", 2);
			toggle_default({ user: input.other });
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_render($scope3_id, "__tests__/template.marko_3_input_other#0:11/setup");
			_client_guard($scope0_reason, 6) && _patch_render($scope3_id, "__tests__/template.marko_3_input_props_user#0:13/setup");
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3),
				"#childScope/1": _existing_scope($childScope4)
			}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, _write_guard($scope0_reason, 4), 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 4);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_adminData && $cg__input_admin && _patch_render($scope0_id, "__tests__/template.marko_1_input_adminData#0:7/setup", "input_adminData");
	$fg__input_user && $cg__input_admin && _patch_render($scope0_id, "__tests__/template.marko_2_input_user#0:8/setup", "input_user");
	$fg__input_other && $cg__input_more && _patch_render($scope0_id, "__tests__/template.marko_3_input_other#0:11/setup", "input_other");
	$fg__input_props_user && $cg__input_more && _patch_render($scope0_id, "__tests__/template.marko_3_input_props_user#0:13/setup", "input_props_user");
	_scope($scope0_id, {
		input_adminData: ($ui__input_admin || _unfilled_if($scope0_reason, 2)) && input.adminData,
		input_user: ($ui__input_admin || _unfilled_if($scope0_reason, 3)) && input.user,
		input_other: ($ui__input_more || _unfilled_if($scope0_reason, 5)) && input.other,
		n,
		input_props_user: ($ui__input_more || _unfilled_if($scope0_reason, 6)) && input.props?.user
	}, "__tests__/template.marko", 0, {
		input_adminData: ["input.adminData"],
		input_user: ["input.user"],
		input_other: ["input.other"],
		n: "1:6",
		input_props_user: ["input.props.user"]
	}) || ($fg__input_adminData && $ui__input_admin && _patch_write($scope0_id, "PatchMarkedWrite:input_adminData", input.adminData, !_server_guard($scope0_reason, 2)), $fg__input_user && $ui__input_admin && _patch_write($scope0_id, "PatchMarkedWrite:input_user", input.user, !_server_guard($scope0_reason, 3)), $fg__input_other && $ui__input_more && _patch_write($scope0_id, "PatchMarkedWrite:input_other", input.other, !_server_guard($scope0_reason, 5)), $fg__input_props_user && $ui__input_more && _patch_write($scope0_id, "PatchMarkedWrite:input_props_user", input.props?.user, !_server_guard($scope0_reason, 6)));
}, 1);
