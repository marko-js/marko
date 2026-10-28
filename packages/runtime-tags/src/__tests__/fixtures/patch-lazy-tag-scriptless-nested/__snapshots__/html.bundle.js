// tags/host/child.marko
const $template$1 = "<p class=child> </p>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<p class=child> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// tags/host/index.marko
const $template = "<section></section>";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "b", flush, "_b");
const $setup$1 = [[], []];
_shells({
	c: "c !; ;<section></section>",
	c1: /*@__PURE__*/ (() => `c1${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var host_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Child_withLoadAssets({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "c0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c1"], $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc2", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	host_default({
		show: input.show,
		label: input.label
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
