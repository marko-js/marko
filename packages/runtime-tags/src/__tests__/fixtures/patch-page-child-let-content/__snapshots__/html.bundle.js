// tags/card.marko
const $template = "<section><button>clear</button><!><p> </p></section>";
const $walks = "D b%bD m";
_shells({ b: "b !b0;D b%bD ;<section><button>clear</button><!><p> </p></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html(`<p>${_patch_text($scope0_id, "c", input.user.name, void 0, $scope0_reason, 1)}</p></section>`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", c, 1);
	$scope0_page ? _scope($scope0_id, {}) : _content_withhold(input.content);
});

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0) => `a;${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		user: input.user,
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<em>static</em>");
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
