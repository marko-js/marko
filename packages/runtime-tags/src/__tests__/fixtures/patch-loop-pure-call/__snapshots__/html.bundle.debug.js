// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_end = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let start = 0;
	_html("<main>");
	_for_to(input.end, Math.max(0, start), 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(i)}</span>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_end#4_start#5/setup", $fg__input_end && "input_end");
	_scope($scope0_id, {
		input_end: input.end,
		start
	}, "__tests__/template.marko", 0, {
		input_end: ["input.end"],
		start: "1:6"
	}) || $fg__input_end && _patch_write($scope0_id, "PatchMarkedWrite:input_end", input.end, !_server_guard($scope0_reason, 0));
}, 1);
