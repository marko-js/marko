// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell __tests__/tags/child.marko_1_input_w#0:5_y#3/init;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "__tests__/tags/child.marko_1/f");
			let y = f(x);
			_html(`<p>${_text_resume($scope1_id, "#text/0", y + input.w)}</p>`);
			$cg__input_v && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_v#0:4/init");
			$cg__input_v && (_patch_write($scope1_id, "PatchWrite:f", f, 1), _patch_init($scope1_id, "__tests__/tags/child.marko_1_x#1_g#8/init"));
			!$cg__input_v && _patch_fill($scope1_id, "PatchFill:__tests__/tags/child.marko_fill2", y, 1);
			_scope($scope1_id, {
				f,
				y: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "1:2", {
				f: "3:10",
				y: "5:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_v: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		input_w: input.w
	}, "__tests__/tags/child.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", input.w, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=set>set</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=set>set</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = input.v;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 5));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({
		show: input.show,
		v,
		w: input.w
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		v,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { v: "1:6" });
}, 1);
