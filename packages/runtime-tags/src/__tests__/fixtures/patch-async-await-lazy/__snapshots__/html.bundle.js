// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;D ;<span> </span>",
	a: "a !a9;E lD%lD%l Db%;<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_related__OR__input_slow = _unfilled_if($scope0_reason, 0), $wi__input_related__OR__input_slow = _write_if($scope0_reason, 0), $ui__input_slow__OR__input_note = _unfilled_if($scope0_reason, 2), $wi__input_slow = _write_if($scope0_reason, 5), $ui__input_related__OR__input_note = _unfilled_if($scope0_reason, 1), $ui__input_slow = _unfilled_if($scope0_reason, 5), $fg__input_slow = _filled_guard($scope0_reason, 5), $fg__input_note = _filled_guard($scope0_reason, 6), $wi__input_related = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_related__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 3)}</h1><section>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(input.related, input.slow ? 1 : 0), (related) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", related, 1, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a1", _unfilled_if($scope0_reason, 0) && 2, 1);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a5", 1);
		_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope1_id, "a6", 1);
		_patch_render($scope1_id, "a7", ((_filled_guard($scope0_reason, 4) ? " >i" : "") + (_filled_guard($scope0_reason, 5) ? " >j" : "")).slice(1), $scope0_reason, 0);
		$wi__input_related__OR__input_slow && _subscribe(_unfilled_if($scope0_reason, 5) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_related__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 4) && "a5", 0), _client_guard($scope0_reason, 5) && "a6", 0);
		$wi__input_related__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a8", void 0, "a3", 1);
	_html("</section><footer>");
	_await($scope0_id, "c", resolveAfter(input.note, input.slow ? 2 : 0), (note) => {
		const $scope4_id = _scope_id();
		_html(`<span>${_text_mark($scope4_id, "a", note, 1, $scope0_reason, 2)}</span>`);
		_scope($scope4_id, {});
	}, 1, "a0", $ui__input_slow__OR__input_note && 2, 1);
	_html(`</footer><button>Count ${_text_mark($scope0_id, "e", count, 2)}</button>${_el_mark($scope0_id, "d")}</main>`);
	_script($scope0_id, "a9");
	_patch_render($scope0_id, "a10", (($fg__input_slow ? " j" : "") + ($fg__input_note ? " k" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		i: $wi__input_slow && $ui__input_related__OR__input_slow && input.related,
		j: _write_if($scope0_reason, 1) && ($ui__input_related__OR__input_note || $ui__input_related__OR__input_slow || $ui__input_slow__OR__input_note) && input.slow,
		k: $wi__input_slow && $ui__input_slow__OR__input_note && input.note,
		m: count,
		n: $wi__input_related && $wi__input_related && $ui__input_related__OR__input_slow && $input_related__closures,
		o: $wi__input_slow && $wi__input_slow && ($ui__input_related__OR__input_slow || $ui__input_slow__OR__input_note) && $input_slow__closures
	}) || (_filled_guard($scope0_reason, 4) && $ui__input_slow && _patch_write($scope0_id, "xi", input.related, !_server_guard($scope0_reason, 4)), $fg__input_slow && $ui__input_related__OR__input_note && _patch_write($scope0_id, "xj", input.slow, !_server_guard($scope0_reason, 5)), $fg__input_note && $ui__input_slow && _patch_write($scope0_id, "xk", input.note, !_server_guard($scope0_reason, 6)));
}, 1);
