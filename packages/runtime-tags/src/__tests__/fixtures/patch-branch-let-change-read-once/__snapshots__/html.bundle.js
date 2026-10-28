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
	a5: "a5 !a2; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
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
			_fill_global_subscribe("a1", $scope1_id);
			_script($scope1_id, "a2");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			const $countChange = read($global$1, onCount) || void 0;
			_patch_let_change($scope1_id, "va4", count, "we", $countChange, (2 | _mask_group($scope0_reason, 2)) << 1, 0);
			_scope($scope1_id, {
				d: count,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				e: $countChange
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a5"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.start,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && onCount
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.start, !_server_guard($scope0_reason, 2));
}, 1);
