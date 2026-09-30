// template.marko
const $template = "<ul></ul>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;D%;<li><!></li>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_n#1:2/init __tests__/template.marko_2_m#1:3/init!__tests__/template.marko_2; D ;<button> </button>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		let n = 0;
		let m = 1;
		_patch_value($scope1_id, "__tests__/template.marko_fill1", m);
		_html("<li>");
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_resume($scope2_id, "#text/1", item.id + n + m)}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:8");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_html("</li>");
		_patch_value($scope1_id, "__tests__/template.marko_fill0", n, 1);
		_scope($scope1_id, {
			"#LoopKey": item?.id,
			n,
			m,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:4", {
			"#LoopKey": ["item.id", "2:8"],
			n: "4:12",
			m: "5:12"
		});
	}, "id", $scope0_id, "#ul/0", 1, 1, _source_guard($scope0_reason, 1), void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	$scope0_page && _scope($scope0_id, { input_show: _unfilled_if($scope0_reason, 1) && input.show }, "__tests__/template.marko", 0, { input_show: ["input.show"] });
}, 1, 0);
