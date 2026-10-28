// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;Db%;<p>A:<!></p>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;Db%;<p>A:<!></p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_text_resume($scope4_id, "#text/0", v, 2, $scope0_reason, 0)}</p>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "4:4");
		}, 1, "__tests__/template.marko_4*content", _unfilled_if($scope0_reason, 0) && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_a ? "__tests__/template.marko_1_input_a#0:5/init" : "__tests__/template.marko_1_input_a#0:5/subscribe");
		$wi__input_a && _subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), $cg__input_a && "__tests__/template.marko_1_input_a#0:5/subscribe", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>wait</em>");
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("caught-a");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 0, 3);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:input_a/7": $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
