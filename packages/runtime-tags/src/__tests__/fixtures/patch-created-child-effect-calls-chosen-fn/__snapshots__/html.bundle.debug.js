// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D ;<span> </span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_fn#3", 1, $fg__input_fn);
	_scope($scope0_id, { fn: input.fn }, "__tests__/tags/child.marko", 0, { fn: "1:10" }) || $fg__input_fn && _patch_write($scope0_id, "PatchMarkedWrite:fn", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<main><!><p> </p></main>";
const $walks = "D%bD m";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;D%bD ;<main><!><p> </p></main>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show__OR__input_pick = _client_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $ui__input_pick = _unfilled_if($scope0_reason, 4), $ui__input_show__OR__input_pick = _unfilled_if($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 3), $fg__input_pick = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let flag = 0;
	const fa = _resume(function() {
		flag = 1;
		const m = document.querySelector("main");
		m.dataset.a = String(+(m.dataset.a || 0) + 1);
	}, "__tests__/template.marko_0/fa", $scope0_id, 1);
	const fb = _resume(function() {
		flag = 2;
		const m = document.querySelector("main");
		m.dataset.b = String(+(m.dataset.b || 0) + 1);
	}, "__tests__/template.marko_0/fb", $scope0_id, 1);
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 4) << 1 | _updates_from($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({
				label: input.x,
				fn: input.pick ? fa : fb
			});
			_patch_child_end();
			!$cg__input_show__OR__input_pick && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:fa", fa);
			!$cg__input_show__OR__input_pick && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:fb", fb);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_x#0:5/setup");
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "__tests__/template.marko_1_input_pick#0:6_fa#0:8_fb#0:9/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_html(`<p>${_text_mark($scope0_id, "#text/1", flag)}</p></main>`);
	$fg__input_x && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_x#0:5/setup", "input_x");
	$fg__input_pick && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_pick#0:6/setup", "input_pick");
	_scope($scope0_id, {
		input_x: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.x,
		input_pick: $wi__input_show && ($ui__input_show || $ui__input_pick) && input.pick,
		fa: ($ui__input_show__OR__input_pick || $ui__input_pick) && fa,
		fb: ($ui__input_show__OR__input_pick || $ui__input_pick) && fb
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_pick: ["input.pick"],
		fa: "2:8",
		fb: "3:8"
	}) || ($fg__input_x && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 3)), $fg__input_pick && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_pick", input.pick, !_server_guard($scope0_reason, 4)));
}, 1);
