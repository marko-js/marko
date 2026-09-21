// template.marko
const $template = "<main><!><em> </em><button>s</button></main>";
const $walks = "D%bD l l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%bD l ;<main><!><em> </em><button>s</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_v#6/init __tests__/template.marko_1_suffix#7/init!__tests__/template.marko_1; ;<input>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let v = "";
	let suffix = "!";
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "#input/0", v, _resume(function(x) {
				v = x + suffix;
			}, "__tests__/template.marko_1/valueChange", $scope1_id))}>${_el_resume($scope1_id, "#input/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4", { "ControlledHandler:#input/0": ["valueChange", "5:20"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<em>${_text_resume($scope0_id, "#text/1", v)}</em><button>s</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		v,
		suffix
	}, "__tests__/template.marko", 0, {
		v: "1:6",
		suffix: "2:6"
	});
}, 1, 0);
