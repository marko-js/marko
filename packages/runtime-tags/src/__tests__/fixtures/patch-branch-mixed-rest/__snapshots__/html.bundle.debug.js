// template.marko
const $template = "<main><div> </div><!><button>+</button></main>";
const $walks = "E l%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b ;<main><div> </div><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__rest = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	const { known, ...rest } = input;
	_html(`<main><div>${_text_mark($scope0_id, "#text/0", known, 1, $scope0_reason, 0)}</div>`);
	_if(() => {
		if (rest && count > 1) {
			const $scope1_id = _scope_id();
			_html("<p>ok</p>");
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_count#5_rest#7/setup", $fg__rest && "rest");
	_scope($scope0_id, {
		count,
		rest
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		rest: "2:20"
	}) || $fg__rest && _patch_write($scope0_id, "PatchMarkedWrite:rest", rest, !_server_guard($scope0_reason, 1), input);
}, 1);
