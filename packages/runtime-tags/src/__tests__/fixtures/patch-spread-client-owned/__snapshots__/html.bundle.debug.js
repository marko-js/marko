// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_attrs = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs(input.attrs, "#a/0", $scope1_id, "a")}>x</a>${_el_mark($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#0:4");
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_attrs#0:4/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4", { "EventAttributes:#a/0": ["...input.attrs", "4:11"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_attrs && _patch_render($scope0_id, "__tests__/template.marko_1_input_attrs#0:4/setup", "input_attrs");
	_scope($scope0_id, {
		input_attrs: input.attrs,
		on
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		on: "1:6"
	}) || $fg__input_attrs && _patch_write($scope0_id, "PatchMarkedWrite:input_attrs", input.attrs, !_server_guard($scope0_reason, 0));
}, 1);
