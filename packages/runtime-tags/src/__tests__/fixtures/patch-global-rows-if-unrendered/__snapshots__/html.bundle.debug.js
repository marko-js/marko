// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;D b%;<li><button>t</button><!></li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<ul>");
	_for_until(3, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		let show = i === 1;
		_html(`<li><button>t</button>${_el_mark($scope1_id, "#button/0")}`);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_mark($scope2_id, "#text/0", $global$1.x, $scope0_page)}</b>`);
				_global_subscribe("__tests__/template.marko_2_$global_x#0:10/subscribe", $scope1_id, 1);
				_scope($scope2_id, {}, "__tests__/template.marko", "4:55");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, 1, 0, 0, 1);
		_html("</li>");
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_show#3/fill", show, 1);
		_scope($scope1_id, { show }, "__tests__/template.marko", "2:4", { show: "3:10" });
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", 0, 0);
	_html(`</ul>${_el_mark($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
