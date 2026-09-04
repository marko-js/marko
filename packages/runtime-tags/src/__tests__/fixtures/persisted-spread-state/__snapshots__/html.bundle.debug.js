// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_attrs#5/init __tests__/template.marko_1_on#6/init; ;<a>go</a>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs({
				...input.attrs,
				class: on ? "on" : "off"
			}, "#a/0", $scope1_id, "a")}>go</a>${_el_resume($scope1_id, "#a/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#5_on#6");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4", { "EventAttributes:#a/0": ["...{ ...input.attrs, class: on ? \"on\" : \"off\" }", "4:11"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 0);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_attrs: input.attrs,
		on
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		on: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.attrs);
}, 1, 0);
