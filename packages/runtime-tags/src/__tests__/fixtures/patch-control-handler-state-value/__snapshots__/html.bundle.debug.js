// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_l#0:7/setup!__tests__/template.marko_1; ;<input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = input.n;
	_html(`<button>${_text_mark($scope0_id, "#text/1", l)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "#input/0", String(l), _resume(function(v) {
				console.log(v);
			}, "__tests__/template.marko_1/valueChange"))}>${_el_mark($scope1_id, "#input/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2", { "ControlledHandler:#input/0": ["valueChange", "4:26"] });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { l }, "__tests__/template.marko", 0, { l: "1:6" });
}, 1);
