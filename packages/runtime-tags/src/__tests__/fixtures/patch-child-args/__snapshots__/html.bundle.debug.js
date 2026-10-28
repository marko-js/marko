// tags/badge/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/badge/index.marko": "__tests__/tags/badge/index.marko;D ;<em> </em>" });
var badge_default = _template("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/badge/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_patch_child(0, "#childScope/0");
			badge_default("x");
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 1);
			badge_default(input.tag);
			_patch_child_end();
			_scope($scope1_id, { "#childScope/1": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_tag: input.tag,
		show
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		show: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.tag, !_server_guard($scope0_reason, 0));
}, 1);
