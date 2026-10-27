// template.marko
const $template = "<button>t</button><!><div></div>";
const $walks = " b%b b";
const $setup = [[], ["__tests__/template.marko_0_$global_o_x#8_$global_k#10", "__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_o_x#8_$global_k#10 __tests__/template.marko_0; b%b ;<button>t</button><!><div></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", $global$1.o.x, $scope0_page)}</p>`);
			_fill_global_subscribe("__tests__/template.marko_1_$global_o#0:7", $scope1_id, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<div></div>${_el_resume($scope0_id, "#div/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_$global_o_x#8_$global_k#10");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
