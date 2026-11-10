// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_cm#0:9/setup!__tests__/template.marko_1; bD ;<input><span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let s = 0;
	const cm = `${input.a}:${s}`;
	_html(`<button>${_text_mark($scope0_id, "#text/1", s)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of(input.items, (it) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 1);
		$fg__input_items && _patch_write($scope1_id, "PatchMarkedWrite:it_v", it?.v, !_server_guard($scope0_reason, 1));
		let cv = "";
		_html(`<input${_attr_input_value($scope1_id, "#input/0", it.v + cm, _resume(function(v) {
			cv = v;
		}, "__tests__/template.marko_1/valueChange", $scope1_id))}>${_el_mark($scope1_id, "#input/0")}<span>${_text_mark($scope1_id, "#text/1", cv, 1, 0, 0, 1)}</span>`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_render($scope1_id, "__tests__/template.marko_1_cm#0:9_it_v#4/setup", ">cm" + (_filled_guard($scope0_reason, 0) ? " >input_a" : "") + ($fg__input_items ? " it_v" : ""));
		_scope($scope1_id, {
			it_v: it?.v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", {
			it_v: ["it.v", "4:6"],
			"ControlledHandler:#input/0": ["valueChange", "6:28"]
		});
	}, "id", $scope0_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_a#5_s#7/setup", $fg__input_a && "input_a");
	_scope($scope0_id, {
		input_a: input.a,
		s,
		cm: _write_if($scope0_reason, 1) && cm
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		s: "1:6",
		cm: "3:8"
	}) || $fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 0));
}, 1);
