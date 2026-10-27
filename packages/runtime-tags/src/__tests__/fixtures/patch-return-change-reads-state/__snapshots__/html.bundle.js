// tags/child.marko
const $template = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<span> </span>" });
_stateful_return("b");
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = input.v;
	const $return = x;
	_html(`<span>${_text_resume($scope0_id, "a", x)}</span>`);
	const $valueChange2 = _patch_bind($scope0_id, "wU", _resume(function(v) {
		x = x === v ? x : v;
	}, "b0", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", x, 1);
	$scope0_page && _scope($scope0_id, {
		e: x,
		U: $valueChange2
	});
	return $return;
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0${_w0}&D l b`)("D l")};${((_w0) => `${_w0}<p> </p><button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let c = child_default({ v: input.v });
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", c)}</p><button>+</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		h: c,
		a: _existing_scope($childScope)
	});
}, 1);
