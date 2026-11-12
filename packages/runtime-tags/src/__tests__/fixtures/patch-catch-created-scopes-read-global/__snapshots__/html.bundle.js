// tags/show-label.marko
const $setup = [[], []];
_shells({ b: "b;D ;<i> </i>" });
var show_label_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$2 = $global();
	_html(`<i>${_text_mark($scope0_id, "a", $global$2.label, 1, 4, 0)}</i>`);
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a0: "a0;D%c%;<i><!>:<!></i>",
	a4: "a4;D ;<p> </p>",
	a5: `a5${_shell_marker([[], ["a10"]], ["d>", $setup], ["e>", [[], []]])}`,
	a: "a;b%;<!><!><!>",
	a6: "a6;D l%;<u> </u><!><!>",
	a3: "a3;D%c%;<s><!>:<!></s>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0), $cg__input_late = _client_guard($scope0_reason, 2), $wi__input_late = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_late__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_mark($scope3_id, "a", input.late ? boom("late") : "ok", 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a13", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_late__closures, _scope($scope3_id, { _: $wi__input_late && _scope_with_id($scope0_id) }), $cg__input_late && "a13");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const Label = { content: _content("a0", ({ x }) => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			_html(`<i>${_text_mark($scope4_id, "a", x, 1, $scope4_reason, 0)}:${_text_mark($scope4_id, "b", $global$1.label, 2, 4, 0)}</i>`);
			_fill_global_subscribe("a1", $scope4_id);
			_scope($scope4_id, {});
		}, $scope1_id, 0) };
		let count = 0;
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)}</b><em>${_text_mark($scope1_id, "c", "0:" + $global$1.label)}</em>${_el_mark($scope1_id, "b")}`);
		const $childScope = _peek_scope_id($scope1_id, "d", 0);
		show_label_default({});
		_patch_child_end();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "e", 1);
		Label.content({ x: 1 });
		_patch_child_end();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<u>${_text_mark($scope2_id, "a", $global$1.label, 1, 4, 0)}</u>`);
				_for_until(input.n, 0, 1, (i) => {
					const $scope5_id = _scope_id();
					_html(`<s>${_text_mark($scope5_id, "a", i, 1, $scope0_reason, 1)}:${_text_mark($scope5_id, "b", $global$1.label, 2, 4, 0)}</s>`);
					_fill_global_subscribe("a2", $scope2_id);
					_scope($scope5_id, {});
				}, 0, $scope2_id, "b", 1, 1, 1, 0, 0, "a3", $scope0_reason, 1);
				_fill_global_subscribe("a7", $scope2_id);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a8", $cg__input_n);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_n && "a8");
				return 0;
			}
		}, $scope1_id, "f", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a6"], $scope0_reason, 0);
		_fill_global_subscribe("a9", $scope1_id, 1);
		_script($scope1_id, "a10");
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a11", $cg__input_show);
		_patch_fill($scope1_id, "va12", count, 1);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, {
			j: count,
			_: _scope_with_id($scope0_id),
			d: _existing_scope($childScope),
			e: _existing_scope($childScope2)
		}), $cg__input_show && "a11");
	}, 0, "a5", "a4", 1, 1);
	_scope($scope0_id, {
		d: input.show,
		e: input.n,
		h: _write_if($scope0_reason, 1) && $input_n__closures,
		g: _write_if($scope0_reason, 0) && $input_show__closures,
		i: $wi__input_late && _unfilled_if($scope0_reason, 2) && $input_late__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a14", "d"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a15", "e"));
}, 1);
