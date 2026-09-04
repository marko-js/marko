// tags/greet/index.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var greet_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const double = input.n * 2;
	_html(`<span>${_patch_text($scope0_id, "a", $global$1.locale)}</span>`);
	const $return = double;
	_global_subscribe("b0", $scope0_id);
	$scope0_reason && _scope($scope0_id, {});
	return $return;
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `D0${_w0}&D l l`)("D l"), ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let d = greet_default({ n: count });
	_var($scope0_id, "b", $childScope, "a0");
	_owned_guard(0, 0) && _patch_write($scope0_id, "f", d, 1);
	_html(`<p>${_text_resume($scope0_id, "c", d)}</p><button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope)
	});
}, 1, () => [greet_default]);
