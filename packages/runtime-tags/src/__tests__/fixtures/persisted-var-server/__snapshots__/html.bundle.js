// tags/labeler/index.marko
const $template = "<span>fmt</span>";
_shells({ b: "b,<span>fmt</span>" });
var labeler_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<span>fmt</span>");
	return "[" + input.title + "]";
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `D0${_w0}&D%c%l l`)("b"), ((_w0) => `<main>${_w0}<p><!> <!></p><button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let label = labeler_default({ title: input.title });
	_var($scope0_id, "b", $childScope, "a0");
	_owned_guard(0, 0) && _patch_write($scope0_id, "j", label, 1);
	_html(`<p>${_patch_text($scope0_id, "c", label, void 0, $scope0_owned, 0)} ${_text_resume($scope0_id, "d", count, 2)}</p><button>+</button>${_el_resume($scope0_id, "e")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		i: count,
		a: _existing_scope($childScope)
	});
}, 1, () => [labeler_default]);
