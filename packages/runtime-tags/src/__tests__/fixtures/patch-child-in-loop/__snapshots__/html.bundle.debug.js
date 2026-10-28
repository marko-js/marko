// tags/badge/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/badge/index.marko": "__tests__/tags/badge/index.marko;D ;<em> </em>" });
var badge_default = _template("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.text, void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/badge/index.marko", 0);
});

// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main><ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item)}`);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "#childScope/1", 0);
		badge_default({ text: input.note });
		_patch_child_end();
		_html("</li>");
		_scope($scope1_id, { "#childScope/1": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "4:6");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_note: input.note,
		items
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		items: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 0));
}, 1);
