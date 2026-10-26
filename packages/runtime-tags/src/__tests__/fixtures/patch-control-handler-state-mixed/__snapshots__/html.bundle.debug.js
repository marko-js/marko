// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_cm#0:9/init!__tests__/template.marko_1; bD ;<input><span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let s = 0;
	const cm = `${input.a}:${s}`;
	_html(`<button>${_text_resume($scope0_id, "#text/1", s)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.items, (it) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", it?.v);
		let cv = "";
		_html(`<input${_patch_input_value($scope1_id, "#input/0", it.v + cm, _resume(function(v) {
			cv = v;
		}, "__tests__/template.marko_1/valueChange", $scope1_id), void 0, void 0, void 0, "PatchWrite:ControlledHandler:#input/0")}>${_el_resume($scope1_id, "#input/0")}<span>${_patch_text($scope1_id, "#text/1", cv, void 0, 0, 0, 1)}</span>`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_effect($scope1_id, "PatchInit:__tests__/template.marko_1_cm#0:9_it_v#4/init", ">cm", _filled_guard($scope0_reason, 1) && "it_v");
		$scope0_page && _scope($scope1_id, {
			it_v: it?.v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", {
			it_v: ["it.v", "4:6"],
			"ControlledHandler:#input/0": ["valueChange", "6:28"]
		});
	}, "id", $scope0_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_a: input.a,
		s,
		cm: _write_if($scope0_reason, 1) && cm
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		s: "1:6",
		cm: "3:8"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 0));
}, 1);
