// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_3_$global_label#0:15/subscribe",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%;<!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D%c%;<i><!>:<!></i>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0), $cg__input_late = _client_guard($scope0_reason, 1), $wi__input_late = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $input_late__closures = new Set();
	const $global$1 = $global();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.late ? boom("late") : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_late#0:4/subscribe", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_late__closures, _scope($scope2_id, { _: $wi__input_late && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_late && "__tests__/template.marko_2_input_late#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "#text/0", err.message, 1, 4, 0)}</b>`);
		_for_until(input.n, 0, 1, (i) => {
			const $scope3_id = _scope_id();
			_html(`<i>${_text_mark($scope3_id, "#text/0", i, 1, $scope0_reason, 0)}:${_text_mark($scope3_id, "#text/1", $global$1.label, 2, 4, 0)}</i>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, 0, $scope1_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", $scope0_reason, 0);
		_fill_global_subscribe("__tests__/template.marko_3_$global_label#0:15/subscribe", $scope1_id, _client_guard($scope0_reason, 0));
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_n#0:3/subscribe", $cg__input_n);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), $cg__input_n && "__tests__/template.marko_1_input_n#0:3/subscribe");
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0", 0);
	_scope($scope0_id, {
		input_n: input.n,
		"ClosureScopes:input_n/5": _write_if($scope0_reason, 0) && $input_n__closures,
		"ClosureScopes:input_late/6": $wi__input_late && _unfilled_if($scope0_reason, 1) && $input_late__closures
	}, "__tests__/template.marko", 0, { input_n: ["input.n"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_n#3/subscribers", "input_n");
}, 1);
