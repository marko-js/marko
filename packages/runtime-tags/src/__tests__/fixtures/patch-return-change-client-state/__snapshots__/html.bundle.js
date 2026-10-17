// tags/counter-box/index.marko
const $template = "<span> </span><button class=mode>b</button>";
const $walks = "D l b";
_shells({ b: "b b1!b0;D l ;<span> </span><button class=mode>b</button>" });
_client_return("b");
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "a", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "b")}`);
	const $return = mode;
	_script($scope0_id, "b0");
	_patch_init($scope0_id, "b1", 1);
	const $valueChange = input.onA || void 0;
	_patch_value($scope0_id, "vb2", mode, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.onA,
		f: input.onB,
		g: mode,
		U: $valueChange
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.onA, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "wf", input.onB, !_server_guard($scope0_reason, 1)));
	return $return;
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `0${_w0}&D l b`)($walks)};${((_w0) => `${_w0}<p> </p><button class=set>set</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = "none";
	_set_scope_reason(($scope0_page ? 0 : 0) << 1 | ($scope0_page ? 0 : 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	counter_box_default({
		onA: _resume(function(v) {
			last = "a" + v;
		}, "a0", $scope0_id),
		onB: _resume(function(v) {
			last = "b" + v;
		}, "a1", $scope0_id)
	});
	_var($scope0_id, "b", $childScope, "a2");
	_html(`<p>${_text_resume($scope0_id, "c", last)}</p><button class=set>set</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va4", last, 1);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
