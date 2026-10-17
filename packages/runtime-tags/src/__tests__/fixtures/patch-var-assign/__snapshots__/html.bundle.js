// tags/counter-box/index.marko
const $template = "<span>box <!></span>";
const $walks = "Db%l";
_shells({ b: "b !;Db%;<span>box <!></span>" });
_client_return("b");
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = input.start;
	_html(`<span>box ${_text_resume($scope0_id, "a", count, 2)}</span>`);
	const $return = count;
	const $valueChange2 = _patch_bind($scope0_id, "dU", _resume(function(v) {
		count = v;
	}, "b0", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", count, 1);
	$scope0_page && _scope($scope0_id, { U: $valueChange2 });
	return $return;
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a1;${((_w0) => `D0${_w0}&D l l`)($walks)};${((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	let count = counter_box_default({ start: 1 });
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<p>${_text_resume($scope0_id, "c", count)}</p><button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope)
	});
}, 1);
