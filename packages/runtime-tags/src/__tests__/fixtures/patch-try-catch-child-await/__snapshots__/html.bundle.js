// tags/loader.marko
const $template = "<div class=ld><!></div>";
const $setup = [[], []];
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1;D ;<em> </em>",
	b: "b;D%;<div class=ld><!></div>"
});
var loader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=ld>");
	_await($scope0_id, "a", input.promise, (v) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", v, void 0, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {});
	}, 1, "b0", 1);
	_html("</div>");
});

// template.marko
_shells({
	a2: "a2;D ;<b> </b>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template),
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0);
		loader_default({ promise: input.promise });
		_patch_child_end();
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: $wi__input_promise && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_promise && "a1");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_patch_text($scope2_id, "a", err.message)}</b>`);
		_scope($scope2_id, {});
	}, void 0, "a2", "a3", 1, 1, 1);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);
