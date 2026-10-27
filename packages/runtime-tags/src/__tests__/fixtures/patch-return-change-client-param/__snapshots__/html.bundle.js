// tags/counter-box/index.marko
const $template = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<span>${_patch_text($scope0_id, "a", count, void 0, 0, 0)}</span>`);
	const $return = count;
	const $valueChange = _patch_bind($scope0_id, "wU", input.onChange || void 0, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		d: input.onChange,
		U: $valueChange
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.onChange, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0${_w0}&D l b b`)("D l")};${((_w0) => `${_w0}<p> </p><button class=mode>b</button><button class=set>set</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = "none";
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	counter_box_default({ onChange: _resume(function(v) {
		last = "a" + v;
	}, "a0", $scope0_id) });
	_var($scope0_id, "b", $childScope, "a2");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", last)}</p><button class=mode>b</button>${_el_resume($scope0_id, "d")}<button class=set>set</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
