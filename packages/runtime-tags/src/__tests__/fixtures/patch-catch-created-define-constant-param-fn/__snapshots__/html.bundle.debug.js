// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": `__tests__/template.marko_3*content;${/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($D_content__template)}`,
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = new Set();
	const D = { content: _content("__tests__/template.marko_2*content", ({ on }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0);
		const f = function() {
			return "A";
		};
		_if(() => {
			if (on) {
				const $scope4_id = _scope_id();
				_html(`<span>${_text_mark($scope4_id, "#text/0", f(), 1, 0, 0)}</span>`);
				_scope($scope4_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__on, 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, { f: _unfilled_if($scope2_reason, 0) && f }, "__tests__/template.marko", "4:2", { f: "5:10" });
	}, $scope0_id) };
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "#text/0", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_error#0:3/subscribe", $cg__input_error);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"), $cg__input_error && "__tests__/template.marko_1_input_error#0:3/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "#text/0", err.message, 1, 4, 0)}</b>`);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope3_id, "#childScope/1", 0);
		D.content({ on: true });
		_patch_child_end();
		_scope($scope3_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "10:4");
	}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_scope($scope0_id, { "ClosureScopes:input_error/4": $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures }, "__tests__/template.marko", 0);
}, 1);
