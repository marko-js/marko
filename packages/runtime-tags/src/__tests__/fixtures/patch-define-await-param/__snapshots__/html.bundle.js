// template.marko
const $Info_content__walks = "b%c";
const $Info_content__template = "<!><!><!>";
_shells({
	a3: "a3 a2;D%c%c%;<p><!>:<!>:<!></p>",
	a4: "a4 a2;D%c%c%;<p><!>:<!>:<!></p>",
	a5: "a5;b%;<!><!><!>",
	a: `a !a10;${((_w0) => `b/${_w0}& b`)($Info_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Info_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Info = { content: _content("a8", ({ id, value }) => {
		const $scope1_id = _scope_id();
		const $Info_content__id__closures = /* @__PURE__ */ new Set();
		const $Info_content__value__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__id = _write_guard($scope1_reason, 0), $wi__id = _write_if($scope1_reason, 0), $cg__id = _client_guard($scope1_reason, 0), $cg__value = _client_guard($scope1_reason, 1), $fg__id = _filled_guard($scope1_reason, 0);
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id(), $ui__value = _unfilled_if($scope1_reason, 1);
			_await($scope2_id, "a", value, (v) => {
				const $scope3_id = _scope_id();
				_html(`<p>${_text_mark($scope3_id, "a", id, 1, $scope1_reason, 0)}:${_text_mark($scope3_id, "b", v, 2, $scope1_reason, 1)}:${_text_mark($scope3_id, "c", count, 2)}</p>`);
				$cg__id && _patch_render($scope3_id, "a1");
				_subscribe(_unfilled_if($scope1_reason, 0) && $Info_content__id__closures, _subscribe($count__closures, _scope($scope3_id, {}), "a2"), $cg__id && "a1");
			}, 1, "a3", $ui__value);
			$cg__value && _patch_render($scope2_id, "a6");
			_subscribe($ui__value && $Info_content__value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__value && "a6", 0);
			_resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html(`loading ${_text_mark($scope4_id, "a", id, $wg__id * 2)}`);
			$cg__id && _patch_render($scope4_id, "a0");
			_subscribe($wi__id && $Info_content__id__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				Ci: $wi__id && 1
			}), $cg__id && "a0", $wg__id);
		}, void 0, "a7", void 0, "a5");
		$fg__id && _patch_subscribers($scope1_id, "a9", "d");
		_scope($scope1_id, {
			d: id,
			_: _scope_with_id($scope0_id),
			i: $wi__id && $Info_content__id__closures,
			j: _write_if($scope1_reason, 1) && _unfilled_if($scope1_reason, 1) && $Info_content__value__closures
		}) || $fg__id && _patch_write($scope1_id, "xd", id, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Info.content({
		id: input.id,
		value: input.value
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		g: count,
		h: $count__closures,
		a: _existing_scope($childScope)
	});
}, 1);
