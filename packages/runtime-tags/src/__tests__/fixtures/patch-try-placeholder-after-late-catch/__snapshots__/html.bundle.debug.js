// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_8*content": "__tests__/template.marko_8*content;D ;<span> </span>",
	"__tests__/template.marko_7*content": "__tests__/template.marko_7*content,<i>loading</i>",
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content;D ;<p> </p>",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<b> </b>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D ;<span> </span>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%b%;<!><!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await;b%b%;<!><!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D%b%;<main><!><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 2), $cg__input_d = _client_guard($scope0_reason, 5), $wi__input_d = _write_if($scope0_reason, 5), $cg__input_c = _client_guard($scope0_reason, 4), $wi__input_c__OR__input_d = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_d__closures = new Set();
	const $input_c__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (v) => {
			const $scope5_id = _scope_id();
			_html(`<b>${_text_resume($scope5_id, "#text/0", v, 1, $scope0_reason, 2)}</b>`);
			_scope($scope5_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_5*content", _unfilled_if($scope0_reason, 2) && 2, 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_a ? "__tests__/template.marko_1_input_a#0:4/init" : "__tests__/template.marko_1_input_a#0:4/subscribe");
		$wi__input_a && _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_a && "__tests__/template.marko_1_input_a#0:4/subscribe", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html(`<em>${_text_resume($scope4_id, "#text/0", err.message, 1, 4, 0)}</em>`);
		_scope($scope4_id, {}, "__tests__/template.marko", "6:6");
	}, 0, "__tests__/template.marko_4*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_await($scope0_id, "#text/1", input.x, (x) => {
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.c, (c) => {
			const $scope6_id = _scope_id();
			_html(`<p>${_text_resume($scope6_id, "#text/0", c, 1, $scope0_reason, 4)}</p>`);
			_scope($scope6_id, {}, "__tests__/template.marko", "11:6");
		}, 1, "__tests__/template.marko_6*content", _unfilled_if($scope0_reason, 4) && 2, 1);
		_try($scope2_id, "#text/1", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", input.d, (d) => {
				const $scope8_id = _scope_id();
				_html(`<span>${_text_resume($scope8_id, "#text/0", d, 1, $scope0_reason, 5)}</span>`);
				_scope($scope8_id, {}, "__tests__/template.marko", "15:8");
			}, 1, "__tests__/template.marko_8*content", _unfilled_if($scope0_reason, 5) && 2, 1);
			_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, $cg__input_d ? "__tests__/template.marko_3_input_d#0:7/init" : "__tests__/template.marko_3_input_d#0:7/subscribe");
			$wi__input_d && _subscribe(_unfilled_if($scope0_reason, 5) && $input_d__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "14:6"), $cg__input_d && "__tests__/template.marko_3_input_d#0:7/subscribe", 0);
			$wi__input_d && _resume_branch($scope3_id);
		}, () => {
			const $scope7_reason = _scope_reason();
			const $scope7_id = _scope_id();
			_html("<i>loading</i>");
		}, void 0, "__tests__/template.marko_7*content", void 0, "__tests__/template.marko_3*content", 1, 0, 2);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_c ? "__tests__/template.marko_2_input_c#0:6/init" : "__tests__/template.marko_2_input_c#0:6/subscribe");
		$wi__input_c__OR__input_d && _subscribe(_unfilled_if($scope0_reason, 4) && $input_c__closures, _scope($scope2_id, {}, "__tests__/template.marko", "10:4"), $cg__input_c && "__tests__/template.marko_2_input_c#0:6/subscribe", 0);
		$wi__input_c__OR__input_d && _resume_branch($scope2_id);
	}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 3), 1);
	_html("</main>");
	_scope($scope0_id, {
		"ClosureScopes:input_a/8": $wi__input_a && _unfilled_if($scope0_reason, 2) && $input_a__closures,
		"ClosureScopes:input_d/10": $wi__input_d && _unfilled_if($scope0_reason, 5) && $input_d__closures,
		"ClosureScopes:input_c/9": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_c__closures
	}, "__tests__/template.marko", 0);
}, 1);
