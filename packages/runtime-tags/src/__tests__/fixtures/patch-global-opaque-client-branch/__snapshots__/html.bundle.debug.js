// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
function brandOf(g) {
	return g.brand + "!";
}
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", brandOf($global$1), $scope0_page)}</p>`);
			_fill_global_subscribe("__tests__/template.marko_1_$global#1/global", $scope1_id, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", open, 1);
	$scope0_page && _scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "2:6" });
}, 1);
