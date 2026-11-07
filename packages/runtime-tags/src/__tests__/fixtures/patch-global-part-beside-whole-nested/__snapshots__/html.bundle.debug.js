// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let show = true;
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", $global$1.meta.title + ":" + $global$1.meta.flag, $scope0_page)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_meta_title#8/subscribe", $scope0_id, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_meta_flag#9/subscribe", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
