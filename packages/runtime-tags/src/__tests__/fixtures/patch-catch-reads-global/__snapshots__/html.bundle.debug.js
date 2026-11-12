// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content;D ;<i> </i>",
	"__tests__/template.marko_5_#text#1/await": "__tests__/template.marko_5_#text#1/await;D ;<i> </i>",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D l%;<b> </b><!><!>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<i> </i>",
	"__tests__/template.marko_3_#text#1/await": "__tests__/template.marko_3_#text#1/await;D ;<i> </i>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D l%;<b> </b><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko;b%b%;<!><!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_early = _client_guard($scope0_reason, 1), $cg__input_late = _client_guard($scope0_reason, 2), $wi__input_early = _write_if($scope0_reason, 1), $wi__input_late = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_early__closures = new Set();
	const $input_late__closures = new Set();
	const $global$1 = $global();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "#text/0", input.early ? boom("early") : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_early#0:4/subscribe", $cg__input_early);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_early__closures, _scope($scope1_id, { _: $wi__input_early && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_early && "__tests__/template.marko_1_input_early#0:4/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "#text/0", $global$1.label + " " + err.message, 1, 4, 0)}</b>`);
		_await($scope3_id, "#text/1", $global$1.p, (v) => {
			const $scope4_id = _scope_id();
			_html(`<i>${_text_mark($scope4_id, "#text/0", v, 1, 4, 0)}</i>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "8:6");
		}, 1, "__tests__/template.marko_4*content");
		_patch_write($scope3_id, "PatchWrite:err_message", err?.message, 1);
		_scope($scope3_id, { err_message: _unfilled_if($scope3_reason, 0) && err?.message }, "__tests__/template.marko", "6:4", { err_message: ["err.message", "6:11"] });
	}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.late ? boom("late") : "ok", 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_late#0:5/subscribe", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_late__closures, _scope($scope2_id, { _: $wi__input_late && _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:2"), $cg__input_late && "__tests__/template.marko_2_input_late#0:5/subscribe");
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html(`<b>${_text_mark($scope5_id, "#text/0", $global$1.label + " " + err.message, 1, 4, 0)}</b>`);
		_await($scope5_id, "#text/1", $global$1.p, (v) => {
			const $scope6_id = _scope_id();
			_html(`<i>${_text_mark($scope6_id, "#text/0", v, 1, 4, 0)}</i>`);
			_scope($scope6_id, {}, "__tests__/template.marko", "15:6");
		}, 1, "__tests__/template.marko_6*content");
		_patch_write($scope5_id, "PatchWrite:err_message", err?.message, 1);
		_scope($scope5_id, { err_message: _unfilled_if($scope5_reason, 0) && err?.message }, "__tests__/template.marko", "13:4", { err_message: ["err.message", "13:11"] });
	}, 0, "__tests__/template.marko_5*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_scope($scope0_id, {
		"ClosureScopes:input_early/6": $wi__input_early && _unfilled_if($scope0_reason, 1) && $input_early__closures,
		"ClosureScopes:input_late/7": $wi__input_late && _unfilled_if($scope0_reason, 2) && $input_late__closures
	}, "__tests__/template.marko", 0);
}, 1);
