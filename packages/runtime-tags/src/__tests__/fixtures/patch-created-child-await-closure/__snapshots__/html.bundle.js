// tags/page.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0 b7!b2; D%c%c%;<button><!> <!> <!></button>",
	b1: "b1 b7!b2; D%c%c%;<button><!> <!> <!></button>",
	b: "b !;b%;<!><!><!>"
});
var page_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $likes__closures = /* @__PURE__ */ new Set();
	let likes = 3;
	_await($scope0_id, "a", input.promise, (v) => {
		const $scope1_id = _scope_id();
		let open = false;
		_html(`<button>${_patch_text($scope1_id, "b", v, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "c", likes, 2)} ${_text_resume($scope1_id, "d", "closed", 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b2");
		_patch_value($scope1_id, "b3", open, 1);
		_subscribe($likes__closures, _scope($scope1_id, {
			g: open,
			_: _scope_with_id($scope0_id)
		}), "b4");
	}, 1, "b0", 1);
	_patch_value($scope0_id, "b5", likes, 1);
	$scope0_page && _scope($scope0_id, {
		e: likes,
		f: $likes__closures
	});
	$scope0_page && _resume_branch($scope0_id);
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_default({ promise: input.promise });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: input.promise }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a1", input.promise);
}, 1);
