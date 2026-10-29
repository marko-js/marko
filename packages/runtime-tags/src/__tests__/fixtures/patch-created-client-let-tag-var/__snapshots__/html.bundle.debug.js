// tags/two.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/two.marko": "^__tests__/tags/two.marko," });
var two_default = _template("__tests__/tags/two.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = "t";
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_b#4_v#5/init"], ["__tests__/template.marko_1"]], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<span> </span><button class=b>b</button>`)("")}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			let v = two_default({});
			_patch_child_end();
			_html(`<span>${_text_resume($scope1_id, "#text/2", v + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_write($scope1_id, "PatchWrite:v", v, 1);
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", b, 1);
			_scope($scope1_id, {
				b,
				v,
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", {
				b: "2:8",
				v: "3:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
