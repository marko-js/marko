// tags/counter-box/index.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<span>${_patch_text($scope0_id, "a", count)}</span>`);
	const $return = count;
	const $valueChange = _patch_bind($scope0_id, "dU", input.onChange || void 0, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		d: input.onChange,
		U: $valueChange
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wd", input.onChange, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `0${_w0}&D l b b`)("D l")};${((_w0) => `${_w0}<p> </p><button class=mode>b</button><button class=set>set</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = "a";
	let last = "none";
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a");
	counter_box_default({ onChange: _resume(function(v) {
		last = "a" + v;
	}, "a0", $scope0_id) });
	_var($scope0_id, "b", $childScope, "a2");
	_html(`<p>${_text_resume($scope0_id, "c", last)}</p><button class=mode>b</button>${_el_resume($scope0_id, "d")}<button class=set>set</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va4", mode, 1);
	_patch_value($scope0_id, "va5", last, 1);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
