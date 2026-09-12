// tags/probe.marko
const $template = "<p> </p>";
_shells({ b: "b !b0;D ;<p> </p>" });
var probe_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let seen = "";
	_html(`<p>${_text_resume($scope0_id, "a", seen)}</p>`);
	_script($scope0_id, "b0");
	_patch_effect($scope0_id, "b0", "d e");
	_patch_value($scope0_id, "b0", seen, 1);
	$scope0_reason ? _scope($scope0_id, {
		d: input.opts,
		e: input.label
	}) : (_filled_guard($scope0_owned, 0) && _patch_write($scope0_id, "d", input.opts), _filled_guard($scope0_owned, 1) && _patch_write($scope0_id, "e", input.label));
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D l"), $template) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	probe_default({
		label: input.label,
		opts: {
			kind: "x",
			describe: _resume(function(label) {
				return `${label}!`;
			}, "a0")
		}
	});
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [probe_default]);
