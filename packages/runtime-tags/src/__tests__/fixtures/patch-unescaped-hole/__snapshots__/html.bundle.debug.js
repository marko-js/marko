// template.marko
const $template = "<main><div> </div><!><button>+</button></main>";
const $walks = "E l%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b ;<main><div> </div><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_html = _write_guard($scope0_reason, 0), $fg__input_html = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><div>${_html_mark($scope0_id, "#text/0", input.html, 1, $scope0_reason, 0)}</div>`);
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<p>${_html_mark($scope1_id, "#text/0", input.html, $wg__input_html)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_html#0:5/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_html && _patch_render($scope0_id, "__tests__/template.marko_1_input_html#0:5/setup", "input_html");
	_scope($scope0_id, {
		input_html: input.html,
		count
	}, "__tests__/template.marko", 0, {
		input_html: ["input.html"],
		count: "1:6"
	}) || $fg__input_html && _patch_write($scope0_id, "PatchMarkedWrite:input_html", input.html, !_server_guard($scope0_reason, 0));
}, 1);
