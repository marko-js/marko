// tags/badge/index.marko
const $template$2 = "<!><!><p> </p>";
const $walks$2 = "b%bD l";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/badge/index.marko": "__tests__/tags/badge/index.marko;b%bD ;<!><!><p> </p>",
	"__tests__/tags/badge/index.marko_1*shell": "__tests__/tags/badge/index.marko_1*shell,<em>on</em>"
});
var badge_default = _template("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/badge/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/tags/badge/index.marko_1*shell"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/1", input.text, void 0, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/badge/index.marko", 0);
});

// tags/wrap/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<div class=wrap>${_w0}</div>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/wrap/index.marko": /*@__PURE__*/ (() => `__tests__/tags/wrap/index.marko${_shell_marker($setup$1)};${((_w0) => `D/${_w0}&l`)($walks$2)};${((_w0) => `<div class=wrap>${_w0}</div>`)($template$2)}`)() });
var wrap_default = _template("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=wrap>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	badge_default({ text: input.label });
	_patch_child_end();
	_html("</div>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/wrap/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			wrap_default({ label: input.a });
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_a: input.a,
		show
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		show: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 0));
}, 1);
