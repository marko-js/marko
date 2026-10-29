// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b D ;<!><!><button> </button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:7/init;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", item);
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label + " " + item + ": " + count)}</p>`);
		_script($scope1_id, "__tests__/template.marko_1_input_label#0:6_item#2");
		_patch_join_init($scope1_id, "__tests__/template.marko_1_input_label#0:6_item#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_label", _filled_guard($scope0_reason, 1) && "item");
		_patch_init_entry($scope1_id, "__tests__/template.marko_1_input_label#0:6_count#0:7_item#2/init", _filled_guard($scope0_reason, 2) && ">input_label", _filled_guard($scope0_reason, 1) && "item");
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { item: "2:6" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
