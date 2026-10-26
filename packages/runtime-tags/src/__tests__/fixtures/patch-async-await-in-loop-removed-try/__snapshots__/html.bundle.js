// tags/rows.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b0: "b0;D%c%;<em><!>:<!></em>",
	b: "b !;b%;<!><!><!>",
	b1: "b1;D%c%;<em><!>:<!></em>",
	b2: "b2;D%;<div><!></div>"
});
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_items__OR__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", item.id, void 0, $scope0_reason, 1)}:${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			$scope0_page && _scope($scope2_id, { _: $wi__input_items__OR__input_promise && _scope_with_id($scope1_id) });
		}, 1, "b0");
		_html("</div>");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b3");
		$scope0_page && $wi__input_items__OR__input_promise && _scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && item?.id,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b2", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb4", input.promise, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a3: "a3",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([["a8"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)(),
	a: "a !a5; b%;<button>drop</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $items__closures = /* @__PURE__ */ new Set();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _patch_child($scope1_id, "a");
		rows_default({
			items,
			promise: input.promise
		});
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a0" : "a1");
		$scope0_page && _subscribe($items__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_promise && "a1"), "a2");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a3", void 0, "a4", 1, void 0, 2);
	_script($scope0_id, "a5");
	$scope0_page && _scope($scope0_id, {
		f: items,
		g: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_promise__closures,
		h: $items__closures
	});
}, 1);
