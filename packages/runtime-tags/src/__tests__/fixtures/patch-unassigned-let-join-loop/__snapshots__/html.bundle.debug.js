// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_x#0:6/setup;D ;<li> </li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let x = input.a;
	_html("<ul>");
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && _patch_write($scope1_id, "PatchMarkedWrite:i", i, !_server_guard($scope0_reason, 2));
		_html(`<li>${_text_mark($scope1_id, "#text/0", x + input.b + i)}</li>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:5_x#0:6_i#2/setup", ((_filled_guard($scope0_reason, 3) ? " >input_b" : "") + ($fg__input_items ? " i" : "")).slice(1));
		_scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:6", { i: "2:10" });
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	_html(`</ul>${_el_mark($scope0_id, "#ul/0")}`);
	$fg__input_b && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "__tests__/template.marko_1_input_b#0:5/setup", "input_b");
	_scope($scope0_id, {
		input_b: input.b,
		x: _write_if($scope0_reason, 0) && x
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		x: "1:6"
	}) || $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 3));
}, 1);
