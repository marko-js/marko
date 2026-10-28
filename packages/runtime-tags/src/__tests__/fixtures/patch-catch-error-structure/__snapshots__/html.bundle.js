// template.marko
function boom(error) {
	throw error;
}
_shells({
	a1: "a1 !a5",
	a2: "a2;D ;<p> </p>",
	a: "a !a8;D%b D ;<main><!><button> </button></main>",
	a0: "a0;Db%;<b>missing <!></b>",
	a3: "a3,<i>failed</i>",
	a4: "a4;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_error ? "a6" : "a7");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a7");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_if(() => {
			if (err.status === 404) {
				const $scope3_id = _scope_id();
				_html(`<b>missing ${_text_resume($scope3_id, "a", err.message, 2, 4, 0)}</b>`);
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			} else {
				const $scope4_id = _scope_id();
				_html("<i>failed</i>");
				_write_if($scope2_reason, 0) && _scope($scope4_id, {});
				return 1;
			}
		}, $scope2_id, "a", 1, _write_guard($scope2_reason, 0), void 0, void 0, void 0, ["a0", "a3"]);
		_for_of(err.items, (item) => {
			const $scope5_id = _scope_id();
			_html(`<span>${_text_resume($scope5_id, "a", item, void 0, 4, 0)}</span>`);
			_scope($scope5_id, {});
		}, 0, $scope2_id, "b", 1, void 0, void 0, void 0, void 0, "a4");
		_script($scope2_id, "a5");
		_scope($scope2_id, { f: _unfilled_if($scope2_reason, 0) && err?.message });
	}, void 0, "a1", "a2", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: count,
		h: $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures
	});
}, 1);
