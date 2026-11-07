// template.marko
const reads = /* @__PURE__ */ new WeakSet();
function read($global, handler) {
	if (reads.has($global)) throw new Error("A `valueChange` was read twice in one render.");
	reads.add($global);
	queueMicrotask(() => reads.delete($global));
	return handler;
}
_shells({
	a: "a;Eb%l%;<main><p>last <!></p><!></main>",
	a4: "a4 !a1; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_show__OR__input_start = _client_guard($scope0_reason, 0), $fg__input_start = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><p>last ${_text_mark($scope0_id, "a", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<button>${_text_mark($scope1_id, "b", count)}</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			!$cg__input_show__OR__input_start && _unfilled_if() && _patch_write($scope0_id, "wh", onCount);
			_patch_render($scope1_id, "a2", [_filled_guard($scope0_reason, 2) && ">f", ">j"], (2 | _updates_from($scope0_reason, 2)) << 1, 0);
			const $countChange = read($global$1, onCount) || void 0;
			_patch_let_change($scope1_id, "va3", count, "we", $countChange, (2 | _updates_from($scope0_reason, 2)) << 1, 0);
			_scope($scope1_id, {
				d: count,
				_: ($scope0_page || _write_if($scope0_reason, 0)) && _scope_with_id($scope0_id),
				e: $countChange
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html("</main>");
	_fill_global_subscribe("a5", $scope0_id, $cg__input_show__OR__input_start);
	$fg__input_start && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a6", "f");
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.start,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && onCount
	}) || $fg__input_start && $cg__input_show__OR__input_start && _patch_write($scope0_id, "xf", input.start, !_server_guard($scope0_reason, 2));
}, 1);
