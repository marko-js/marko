// tags/probe.marko
const $template = "<div> </div>";
const $walks = " D l";
_shells({ b: "b !b0; D ;<div> </div>" });
var probe_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let settled = false;
	_html(`<div>${_text_resume($scope0_id, "b", "pending")}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_effect($scope0_id, "b0", "e");
	_patch_value($scope0_id, "b0", settled, 1);
	$scope0_page ? _scope($scope0_id, { e: input.promise }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.promise);
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,<span class=loading>...</span>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a5;${_w0};${_w1}`)(((_w0) => ` Db%l/${_w0}&%c`)($walks), ((_w0) => `<button>Count <!></button>${_w0}<!><!>`)($template))
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>Count ${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	probe_default({ promise: input.promise });
	_try($scope0_id, "d", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", v.name, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a4", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a1", $scope0_id) }) }, 1);
	_script($scope0_id, "a5");
	$scope0_page && _scope($scope0_id, {
		h: count,
		c: _existing_scope($childScope),
		i: $input_promise__closures
	});
}, 1, () => [probe_default]);
