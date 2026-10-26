// tags/probe.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", "", void 0, 0, 0, 1)}</p>`);
	_script($scope0_id, "b0");
	(_filled_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 2)) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? "hb0" : "eb0", _filled_guard($scope0_reason, 1) && "d", _filled_guard($scope0_reason, 2) && "e");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b1");
	$scope0_page ? _scope($scope0_id, {
		d: input.opts,
		e: input.label
	}) : (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.opts, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	probe_default({
		label: input.label,
		opts: {
			kind: "x",
			describe: _resume(function(label) {
				return `${label}!`;
			}, "a0")
		}
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
