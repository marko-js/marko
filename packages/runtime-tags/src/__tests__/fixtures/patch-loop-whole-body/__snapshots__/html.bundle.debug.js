// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = ["a"];
	_html("<main>");
	_for_of(l, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", input.format(i))}</li>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_input#0:3_i#2/setup", _filled_guard($scope0_reason, 0) && ">input");
		_scope($scope1_id, { i: _write_if($scope0_reason, 0) && i }, "__tests__/template.marko", "3:4", { i: "3:8" });
	}, 0, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input && _patch_render($scope0_id, "__tests__/template.marko_1_input#0:3/setup", "input");
	_scope($scope0_id, {
		input,
		l
	}, "__tests__/template.marko", 0, {
		input: 0,
		l: "1:6"
	}) || $fg__input && _patch_write($scope0_id, "PatchMarkedWrite:input", input, !_server_guard($scope0_reason, 0));
}, 1);
