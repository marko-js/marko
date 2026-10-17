// template.marko
const $Info_content__walks = "b%c";
const $Info_content__template = "<!><!><!>";
_shells({
	a0: "a0 a15;D%c%c%;<p><!>:<!>:<!></p>",
	a1: "a1 a15;D%c%c%;<p><!>:<!>:<!></p>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a11;b%b ;<!><!><button>+</button>",
	a3: /*@__PURE__*/ (() => `a3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Info = { content: _content("a9", ({ id, value }) => {
		const $scope2_id = _scope_id();
		const $Info_content__id__closures = /* @__PURE__ */ new Set();
		const $Info_content__value__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $wg__id = _write_guard($scope2_reason, 0), $wi__id = _write_if($scope2_reason, 0), $wi__value = _write_if($scope2_reason, 1), $scope2_page = _page_render();
		_try($scope2_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", value, (v) => {
				const $scope4_id = _scope_id();
				_html(`<p>${_patch_text($scope4_id, "a", id, void 0, $scope2_reason, 0)}:${_patch_text($scope4_id, "b", v, 2, $scope2_reason, 1)}:${_text_resume($scope4_id, "c", count, 2)}</p>`);
				_unfilled_if($scope2_reason, 0) && _patch_init($scope4_id, "a5");
				_subscribe(_unfilled_if($scope2_reason, 0) && $wi__id && $Info_content__id__closures, _subscribe($count__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }), "a6"), "a5");
			}, 1, "a0");
			_unfilled_if($scope2_reason, 1) && _patch_init($scope3_id, "a7");
			_subscribe(_unfilled_if($scope2_reason, 1) && $wi__value && $Info_content__value__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope2_reason, 1) && "a7", 0);
			_resume_branch($scope3_id);
		}, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`loading ${_text_resume($scope5_id, "a", id, $wg__id * 2)}`);
			_subscribe($wi__id && $Info_content__id__closures, _scope($scope5_id, {
				_: _scope_with_id($scope2_id),
				Cj: $wi__id && 1
			}), "a4", $wg__id);
			$wg__id || _resume_branch($scope5_id);
		}, void 0, "a8", void 0, "a2");
		$scope2_page ? _scope($scope2_id, {
			d: id,
			_: _scope_with_id($scope0_id),
			j: $wi__id && $Info_content__id__closures,
			k: $wi__value && _unfilled_if($scope2_reason, 1) && $Info_content__value__closures
		}) : _filled_guard($scope2_reason, 0) && _patch_value($scope2_id, "va10", id, !_server_guard($scope2_reason, 0));
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
		const $childScope = _patch_child($scope1_id, "a", $scope0_id);
		Info.content({
			id: item,
			value: input.value
		});
		_scope($scope1_id, {
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a11");
	_patch_value($scope0_id, "va13", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.value,
		g: count,
		i: $count__closures
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va12", input.value, !_server_guard($scope0_reason, 1));
}, 1);
