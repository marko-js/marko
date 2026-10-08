// tags/rows.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0;D%c%;<em><!>:<!></em>",
	b: "b !;b%;<!><!><!>",
	b1: "b1;D%c%;<em><!>:<!></em>",
	b2: "b2;D%;<div><!></div>"
});
var rows_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", item.id, void 0, $scope0_reason, 1)}:${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, 1, "b0");
		_html("</div>");
		$scope0_page && _scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && item?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b2", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 1) && input.promise }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b3", input.promise);
});

// template.marko
_shells({
	a0: /*@__PURE__*/ (() => `a0 a8;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)(),
	a: "a !a5; b%;<button>drop</button><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $items__closures = /* @__PURE__ */ new Set();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		rows_default({
			items,
			promise: input.promise
		});
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a1");
		_subscribe($items__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard($scope0_reason, 0) && "a2"), "a3");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a4", void 0, "a0", 1);
	_script($scope0_id, "a5");
	_patch_value($scope0_id, "a6", items, 1);
	$scope0_page && _scope($scope0_id, {
		f: items,
		g: $input_promise__closures,
		h: $items__closures
	});
}, 1);
