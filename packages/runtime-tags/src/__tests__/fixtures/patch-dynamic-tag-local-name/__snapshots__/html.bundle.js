// tags/alpha.marko
_shells({ b: "b;Db%;<i>A <!></i>" });
var alpha_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<i>A ${_patch_text($scope0_id, "a", $global$1.brand, 2)}</i>`);
	_global_subscribe("b0", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
}, 0, 1);

// tags/beta.marko
_shells({ c: "c,<b>B</b>" });
var beta_default = _template_patch("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<b>B</b>");
}, 0, 0);

// tags/child.marko
const $template = "<!><!><!>";
_shells({ d: "d;b%;<!><!><!>" });
var child_default = _template_patch("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Tag = input.value % 2 ? alpha_default : beta_default;
	_dynamic_tag($scope0_id, "a", Tag, {}, 0, 0, $sg__input_value, _patch_dynamic_tag($scope0_id, "a", Tag, 0, 0, 0, $scope0_reason, 0));
	$scope0_page && _scope($scope0_id, {});
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `E l b/${_w0}&l`)("b%c"), ((_w0) => `<main><h1> </h1><button>+</button>${_w0}</main>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><button>+</button>${_el_resume($scope0_id, "b")}`);
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(child_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "c", $childScope);
		child_default({ value: n });
	}
	_html("</main>");
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		g: n,
		c: _existing_scope($childScope)
	});
}, 1, () => [child_default]);
