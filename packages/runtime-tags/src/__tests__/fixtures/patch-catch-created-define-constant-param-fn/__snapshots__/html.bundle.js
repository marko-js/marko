// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
function boom(error) {
	throw error;
}
_shells({
	a1: `a1;${/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($D_content__template)}`,
	a2: "a2;D ;<p> </p>",
	a: "a;b%;<!><!><!>",
	a0: "a0;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = /* @__PURE__ */ new Set();
	const D = { content: _content("a3", ({ on }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0);
		const f = function() {
			return "A";
		};
		_if(() => {
			if (on) {
				const $scope4_id = _scope_id();
				_html(`<span>${_text_mark($scope4_id, "a", f(), 1, 0, 0)}</span>`);
				_scope($scope4_id, {});
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__on, 1, 0, 0, ["a0"], $scope2_reason, 0);
	}, $scope0_id) };
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a4", $cg__input_error);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope3_id, "b", 0);
		D.content({ on: true });
		_patch_child_end();
		_scope($scope3_id, { b: _existing_scope($childScope) });
	}, 0, "a1", "a2", 1, 1, 1);
	_scope($scope0_id, { e: $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures });
}, 1);
