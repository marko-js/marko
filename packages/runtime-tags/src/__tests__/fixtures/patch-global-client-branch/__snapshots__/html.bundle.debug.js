// template.marko
const $template = "<main><button>t</button><!></main>";
const $walks = "D b%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b%;<main><button>t</button><!></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_name = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	_html(`<main><button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", $global$1.brand, $scope0_page)}</p><b>${_text_resume($scope1_id, "#text/1", input.name + ":" + $global$1.brand, $scope0_page || $wg__input_name)}</b>`);
			_fill_global_subscribe("__tests__/template.marko_1_$global_brand#3/global", $scope1_id, 1);
			_fill_global_subscribe("__tests__/template.marko_1_input_name#0:4_$global_brand#3/global", $scope1_id, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_name: input.name,
		open
	}, "__tests__/template.marko", 0, {
		input_name: ["input.name"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.name);
}, 1);
