// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", $global$1.o.x.toUpperCase(), $scope0_page)}</p><b>${_text_mark($scope1_id, "#text/1", $global$1.o.list.length, $scope0_page)}</b><i>${_text_mark($scope1_id, "#text/2", $global$1.o["a.b"], $scope0_page)}</i><u>${_text_mark($scope1_id, "#text/3", $global$1["c.d"], $scope0_page)}</u><s>${_text_mark($scope1_id, "#text/4", $global$1.p?.x, $scope0_page)}</s>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_fill_global_subscribe("__tests__/template.marko_0_$global_o_x#8/subscribe", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_o_list_length#11/subscribe", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_o_a_b#13/subscribe", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_c_d#15/subscribe", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_p_x#18/subscribe", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
