// template.marko
const $template = "<main><!><button>x</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<div><!><!></div>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>x</button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fast = _client_guard($scope0_reason, 1), $cg__input_slow = _client_guard($scope0_reason, 2), $wi__input_fast__OR__input_slow = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_fast__closures = new Set();
	const $input_slow__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "#text/0", input.fast, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "#text/0", a, 1, $scope0_reason, 1)}</b>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "4:8");
		}, 1, "__tests__/template.marko_3*content", _unfilled_if($scope0_reason, 1) && 2, 1);
		_await($scope1_id, "#text/1", input.slow, (b) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "#text/0", b, 1, $scope0_reason, 2)}</em>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "5:8");
		}, 1, "__tests__/template.marko_4*content", _unfilled_if($scope0_reason, 2) && 2, 1);
		_html("</div>");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_fast ? "__tests__/template.marko_1_input_fast#0:4/init" : "__tests__/template.marko_1_input_fast#0:4/subscribe");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_slow ? "__tests__/template.marko_1_input_slow#0:5/init" : "__tests__/template.marko_1_input_slow#0:5/subscribe");
		$wi__input_fast__OR__input_slow && _subscribe(_unfilled_if($scope0_reason, 2) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fast__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_fast && "__tests__/template.marko_1_input_fast#0:4/subscribe", 0), $cg__input_slow && "__tests__/template.marko_1_input_slow#0:5/subscribe", 0);
		$wi__input_fast__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		"ClosureScopes:input_fast/6": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_fast__closures,
		"ClosureScopes:input_slow/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_slow__closures
	}, "__tests__/template.marko", 0);
}, 1);
