// tags/store.marko
_shells({ c: "c !," });
var store_default = _template_patch("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "c0", $scope0_id)
	};
	_patch_value($scope0_id, "c0", last, 1);
	return $return;
}, 0, 0);

// tags/child.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
_shells({ b: "b !b0; D%c%;<button><!> <!></button>" });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 2)} ${_patch_text($scope0_id, "c", input.s.last, 2, $scope0_reason, 1)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, { f: input.s }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "f", input.s);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks), ((_w0, _w1) => `${_w0}${_w1}`)("", $template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let s = store_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_set_serialize_reason(10 | _mask_group($scope0_reason, 0) << 5);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope2);
	child_default({
		s,
		label: input.label
	});
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1, () => [store_default, child_default]);
