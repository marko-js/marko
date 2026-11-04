// tags/rows.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b0: "b0;D%c%;<em><!>:<!></em>",
	b: "b;b%;<!><!><!>",
	b1: "b1;D%c%;<em><!>:<!></em>",
	b2: "b2;D%;<div><!></div>"
});
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items = _unfilled_if($scope0_reason, 1), $fg__input_promise = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_mark($scope2_id, "a", item.id, 1, $scope0_reason, 1)}:${_text_mark($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, {});
		}, 1, "b0", _unfilled_if($scope0_reason, 2));
		_html("</div>");
		_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b3");
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 1);
	$fg__input_promise && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b3", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 1) && ($ui__input_items || _unfilled_if($scope0_reason, 2)) && input.promise }) || $fg__input_promise && $ui__input_items && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a2: "a2",
	a3: `a3${_shell_marker([["a1"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`,
	a: "a !a4; b%;<button>drop</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $items__closures = /* @__PURE__ */ new Set();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		rows_default({
			items,
			promise: input.promise
		});
		_patch_child_end();
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a0", $cg__input_promise);
		_subscribe($items__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_promise && "a0", 0), "a1", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a2", void 0, "a3", 1, 0, 2);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: items,
		g: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_promise__closures,
		h: $items__closures
	});
}, 1);
