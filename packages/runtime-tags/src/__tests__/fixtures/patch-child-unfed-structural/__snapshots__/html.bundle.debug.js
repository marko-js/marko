// tags/badge/index.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
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
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			badge_default({ text: input.a });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
			const $childScope2 = _patch_child($scope1_id, "#childScope/1", 1);
			badge_default({
				open: true,
				text: input.b
			});
			_patch_child_end();
			_scope($scope1_id, {
				"#childScope/0": _write_if($scope0_reason, 1) && _existing_scope($childScope),
				"#childScope/1": _write_if($scope0_reason, 2) && _existing_scope($childScope2)
			}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		show
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		show: "1:6"
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.b, !_server_guard($scope0_reason, 2)));
}, 1);
