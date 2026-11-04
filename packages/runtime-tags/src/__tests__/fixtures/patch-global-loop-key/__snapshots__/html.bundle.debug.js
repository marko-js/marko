// template.marko
const $template = "<button>+</button><ul></ul>";
const $walks = " b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b ;<button>+</button><ul></ul>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 2;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}<ul>`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "#text/0", i + ":" + $global$1.x, $scope0_page)}</li>`);
		_fill_global_subscribe("__tests__/template.marko_1_$global_x#0:9", $scope0_id, 1);
		_scope($scope1_id, { "#LoopKey": i }, "__tests__/template.marko", "4:4", { "#LoopKey": "4:8" });
	}, 0, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
