// template.marko
const $template = "<button>t</button><!><ul></ul><div></div><div></div><div></div><div></div><div></div>";
const $walks = " b%b b b b b b b";
const $setup = [[], [
	"__tests__/template.marko_0_$global_o_x#19_$global_cspNonce#20",
	"__tests__/template.marko_0_$global_a#7_$global_c#8",
	"__tests__/template.marko_0_$global#6",
	"__tests__/template.marko_0_$global_cspNonce#20",
	"__tests__/template.marko_0_$global_o_x#19",
	"__tests__/template.marko_0"
]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_o_x#19_$global_cspNonce#20 __tests__/template.marko_0_$global_a#7_$global_c#8 __tests__/template.marko_0_$global#6 __tests__/template.marko_0_$global_cspNonce#20 __tests__/template.marko_0_$global_o_x#19 __tests__/template.marko_0; b%b b b b b b ;<button>t</button><!><ul></ul><div></div><div></div><div></div><div></div><div></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "#text/0", $global$1.a + $global$1.c, $scope0_page)}</b>`);
			_fill_global_subscribe("__tests__/template.marko_1_$global_a#0:7_$global_c#0:8", $scope1_id, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html("<ul>");
	if ($scope0_page) _for_until(open ? 1 : 0, 0, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_resume($scope2_id, "#text/0", $global$1.a + $global$1.c, $scope0_page)}</li>`);
		_fill_global_subscribe("__tests__/template.marko_2_$global_a#0:7_$global_c#0:8", $scope0_id, 1);
		_scope($scope2_id, {}, "__tests__/template.marko", "7:4");
	}, 0, $scope0_id, "#ul/2", 1, 1, 1, "</ul>", 1);
	_html(`<div></div>${_el_resume($scope0_id, "#div/3")}<div></div>${_el_resume($scope0_id, "#div/4")}<div></div>${_el_resume($scope0_id, "#div/5")}<div></div>${_el_resume($scope0_id, "#div/6")}<div></div>${_el_resume($scope0_id, "#div/7")}`);
	_script($scope0_id, "__tests__/template.marko_0_$global_o_x#19_$global_cspNonce#20");
	_script($scope0_id, "__tests__/template.marko_0_$global_a#7_$global_c#8");
	_script($scope0_id, "__tests__/template.marko_0_$global#6");
	_script($scope0_id, "__tests__/template.marko_0_$global_cspNonce#20");
	_script($scope0_id, "__tests__/template.marko_0_$global_o_x#19");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
