// template.marko
const reads = /* @__PURE__ */ new WeakSet();
function read($global, handler) {
	if (reads.has($global)) throw new Error("A `valueChange` was read twice in one render.");
	reads.add($global);
	queueMicrotask(() => reads.delete($global));
	return handler;
}
_shells({
	a: "a !;Eb%l%;<main><p>last <!></p><!></main>",
	a1: "a1 !a3; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_start = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><p>last ${_text_resume($scope0_id, "a", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<button>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
			_fill_global_subscribe("a2", $scope1_id);
			_script($scope1_id, "a3");
			const $countChange = read($global$1, onCount) || void 0;
			_patch_let_change($scope1_id, "va4", count, "dd", $countChange, $scope0_reason, 2);
			_scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	_patch_write($scope0_id, "wh", onCount, 1);
	_patch_value($scope0_id, "va6", last, 1);
	$scope0_page ? _scope($scope0_id, {
		f: $wi__input_show__OR__input_start && input.start,
		h: $wi__input_show__OR__input_start && onCount
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.start);
}, 1);
