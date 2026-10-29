// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_x#0:6/init;D ;<li> </li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.a;
	_html("<ul>");
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", i);
		_html(`<li>${_text_resume($scope1_id, "#text/0", x + input.b + i)}</li>`);
		_patch_init_entry($scope1_id, "__tests__/template.marko_1_input_b#0:5_x#0:6_i#2/init", _filled_guard($scope0_reason, 3) && ">input_b", _filled_guard($scope0_reason, 2) && "i");
		_scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:6", { i: "2:10" });
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {
		input_b: input.b,
		x: _write_if($scope0_reason, 0) && x
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		x: "1:6"
	}) || _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.b, !_server_guard($scope0_reason, 3));
}, 1);
