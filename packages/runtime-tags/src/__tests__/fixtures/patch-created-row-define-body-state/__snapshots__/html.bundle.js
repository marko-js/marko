// template.marko
const $Info_content__walks = "b%c";
const $Info_content__template = "<!><!><!>";
_shells({
	a3: "a3 a2;D%c%c%;<p><!>:<!>:<!></p>",
	a4: "a4 a2;D%c%c%;<p><!>:<!>:<!></p>",
	a5: "a5;b%;<!><!><!>",
	a: "a !a12;b%b ;<!><!><button>+</button>",
	a6: `a6 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_server_guard($scope0_reason, 1);
	const $fg__input_value = _filled_guard($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Info = { content: _content("a9", ({ id, value }) => {
		const $scope2_id = _scope_id();
		const $Info_content__id__closures = /* @__PURE__ */ new Set();
		const $Info_content__value__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $wg__id = _write_guard($scope2_reason, 0), $wi__id = _write_if($scope2_reason, 0), $cg__id = _client_guard($scope2_reason, 0), $cg__value = _client_guard($scope2_reason, 1), $fg__id = _filled_guard($scope2_reason, 0);
		_try($scope2_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", value, (v) => {
				const $scope4_id = _scope_id();
				_html(`<p>${_text_mark($scope4_id, "a", id, 1, $scope2_reason, 0)}:${_text_mark($scope4_id, "b", v, 2, $scope2_reason, 1)}:${_text_mark($scope4_id, "c", count, 2)}</p>`);
				_unfilled_if($scope2_reason, 0) && _patch_subscribe($scope4_id, "a1", $cg__id);
				_subscribe(_unfilled_if($scope2_reason, 0) && $Info_content__id__closures, _subscribe($count__closures, _scope($scope4_id, {}), "a2"), $cg__id && "a1");
			}, 1, "a3", _unfilled_if($scope2_reason, 1));
			_unfilled_if($scope2_reason, 1) && _patch_subscribe($scope3_id, "a7", $cg__value);
			_subscribe(_unfilled_if($scope2_reason, 1) && $Info_content__value__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__value && "a7", 0);
			_resume_branch($scope3_id);
		}, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`loading ${_text_mark($scope5_id, "a", id, $wg__id * 2)}`);
			$cg__id && _patch_render($scope5_id, "a0");
			_subscribe($wi__id && $Info_content__id__closures, _scope($scope5_id, {
				_: _scope_with_id($scope2_id),
				Cj: $wi__id && 1
			}), $cg__id && "a0", $wg__id);
		}, void 0, "a8", void 0, "a5");
		$fg__id && _patch_subscribers($scope2_id, "a10", "d");
		_scope($scope2_id, {
			d: id,
			_: _scope_with_id($scope0_id),
			j: $wi__id && $Info_content__id__closures,
			k: _write_if($scope2_reason, 1) && _unfilled_if($scope2_reason, 1) && $Info_content__value__closures
		}) || $fg__id && _patch_write($scope2_id, "xd", id, !_server_guard($scope2_reason, 0));
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 2) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0, 0, $scope0_id);
		Info.content({
			id: item,
			value: input.value
		});
		_patch_child_end();
		_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a11");
		_scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a6", $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a12");
	$fg__input_value && $cg__input_items && _patch_render($scope0_id, "a11", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value,
		g: count,
		i: $count__closures
	}) || $fg__input_value && $cg__input_items && _patch_write($scope0_id, "xf", input.value, !_server_guard($scope0_reason, 2));
}, 1);
