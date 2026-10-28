// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_input_label#0:6/subscribe __tests__/template.marko_2_n#0:7/init __tests__/template.marko_2_input_label#0:6_n#0:7/init;D ;<div id=done> </div>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await __tests__/template.marko_2_input_label#0:6/subscribe __tests__/template.marko_2_n#0:7/init __tests__/template.marko_2_input_label#0:6_n#0:7/init;D ;<div id=done> </div>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const $input_promise__closures = new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<div id=done>${_text_resume($scope2_id, "#text/0", input.label + n)}</div>`);
			_subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_input_label#0:6/subscribe"), "__tests__/template.marko_2_n#0:7/subscribe");
		}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 0) && 3, 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:5/init" : "__tests__/template.marko_1_input_promise#0:5/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		_resume_branch($scope1_id);
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"ClosureScopes:input_label/9": $wi__input_label && $input_label__closures,
		"ClosureScopes:n/10": $n__closures,
		"ClosureScopes:input_promise/8": _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
