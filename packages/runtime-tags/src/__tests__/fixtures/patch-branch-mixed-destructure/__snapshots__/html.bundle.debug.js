// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_min = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_if(() => {
		if (count > input.min) {
			const $scope1_id = _scope_id();
			_html("<p>over</p>");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_count#4_min#5/setup", $fg__input_min && "min");
	_scope($scope0_id, {
		count,
		min: input.min
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		min: "2:10"
	}) || $fg__input_min && _patch_write($scope0_id, "PatchMarkedWrite:min", input.min, !_server_guard($scope0_reason, 0));
}, 1);
