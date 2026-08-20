// template.marko
const $template = "<main><select></select><select id=plain><option value=a>A</option><option value=b>B</option></select><em> </em><button>+</button></main>";
const $walks = "D bD b lD l l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D bD b lD l ;<main><select></select><select id=plain><option value=a>A</option><option value=b>B</option></select><em> </em><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; D ;<option> </option>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_attr_select_value($scope0_id, "#select/0", input.picked, void 0, () => {
		_html(`<select${_patch_control($scope0_id, "#select/0", 3, input.picked, $scope0_owned, 0)}>`);
		_for_of(input.options, (o) => {
			const $scope1_id = _scope_id();
			_html(`<option${_patch_attr_option_value($scope1_id, "#option/0", o.value, $scope0_owned, 1)}>${_patch_text($scope1_id, "#text/1", o.label, $scope0_owned, 1)}${_el_resume($scope1_id, "#text/1")}</option>${_el_resume($scope1_id, "#option/0")}`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:6");
		}, (o) => o.id, $scope0_id, "#select/0", 1, 1, _source_guard($scope0_reason, 1), void 0, void 0, "__tests__/template.marko_1*shell");
		_html("</select>");
	});
	_html(`${_el_resume($scope0_id, "#select/0")}<select id=plain><option${_attr_option_value("a")}${_patch_attr($scope0_id, "#option/1", "selected", input.pick === "a", $scope0_owned, 2)}>A</option>${_el_resume($scope0_id, "#option/1")}<option${_attr_option_value("b")}${_patch_attr($scope0_id, "#option/2", "selected", input.pick === "b", $scope0_owned, 2)}>B</option>${_el_resume($scope0_id, "#option/2")}</select><em>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</em><button>+</button>${_el_resume($scope0_id, "#button/4")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
