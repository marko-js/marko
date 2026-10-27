// tags/loader.marko
const $template = "<div class=ld><!></div>";
const $setup = [[], []];
_shells({
	b0: "b0; ; ",
	b1: "b1; ; ",
	b: "b;D%;<div class=ld><!></div>"
});
var loader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=ld>");
	_await($scope0_id, "a", input.promise, (v) => {
		const $scope1_id = _scope_id();
		_html(_patch_text($scope1_id, "a", v, void 0, $scope0_reason, 0));
		_scope($scope1_id, {});
	}, 1, "b0", 1);
	_html("</div>");
});

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template),
	a2: "a2,<em>closed</em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			loader_default({ promise: input.promise });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			_write_if($scope0_reason, 0) && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1", "a2"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.promise }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
