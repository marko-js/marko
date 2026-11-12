// template.marko
const $template = "<main><button>t</button><!></main>";
const $walks = "D b%l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b%;<main><button>t</button><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_name = _write_guard($scope0_reason, 0), $fg__input_name = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	_html(`<main><button>t</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", $global$1.brand, $scope0_page)}</p><b>${_text_mark($scope1_id, "#text/1", input.name + ":" + $global$1.brand, $scope0_page || $wg__input_name)}</b>`);
			_global_subscribe("__tests__/template.marko_1_$global_brand#0:8/subscribe", $scope0_id, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_name && _patch_render($scope0_id, "__tests__/template.marko_1_input_name#0:4/setup", "input_name");
	_scope($scope0_id, {
		input_name: input.name,
		open
	}, "__tests__/template.marko", 0, {
		input_name: ["input.name"],
		open: "1:6"
	}) || $fg__input_name && _patch_write($scope0_id, "PatchMarkedWrite:input_name", input.name, !_server_guard($scope0_reason, 0));
}, 1);
