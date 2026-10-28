// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", "ok")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { c: n });
});

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template)}`)(),
	a: "a !; ;<main></main>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, (v) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "a", v, 1, $scope0_reason, 2)}</em>`);
					_scope($scope3_id, {});
				}, 1, "a0");
				const $childScope = _peek_scope_id($scope2_id, "b", 0);
				counter_default({});
				_patch_child_end();
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_promise ? "a4" : "a5");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_promise && _scope_with_id($scope1_id),
					b: _existing_scope($childScope)
				}), $cg__input_promise && "a5");
			}, void 0, () => {}, void 0, "a6", "a2");
			$wi__input_show__OR__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va7", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
