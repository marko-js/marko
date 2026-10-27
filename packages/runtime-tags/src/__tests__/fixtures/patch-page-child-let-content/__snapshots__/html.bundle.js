// tags/card.marko
const $template = "<section><button>clear</button><!><p> </p></section>";
const $walks = "D b%bD m";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%bD ;<section><button>clear</button><!><p> </p></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_html(`<p>${_patch_text($scope0_id, "c", input.user.name, void 0, $scope0_reason, 1)}</p></section>`);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, {}) : _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	card_default({
		user: input.user,
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<em>static</em>");
		}, $scope0_id)
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
