// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2",
	a3: "a3;D ;<b> </b>",
	a4: "a4;D ;<em> </em>",
	a5: "a5;D%b%;<div><!><!></div>",
	a: "a !a8;D%b ;<main><!><button>x</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_fast__OR__input_slow = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_fast__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "a", input.fast, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_text_mark($scope3_id, "a", a, 1, $scope0_reason, 1)}</b>`);
			_scope($scope3_id, {});
		}, 1, "a1", _unfilled_if($scope0_reason, 1) && 2, 1);
		_await($scope1_id, "b", input.slow, (b) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_mark($scope4_id, "a", b, 1, $scope0_reason, 2)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a0", _unfilled_if($scope0_reason, 2) && 2, 1);
		_html("</div>");
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a6", 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a7", 1);
		$wi__input_fast__OR__input_slow && _subscribe(_unfilled_if($scope0_reason, 2) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fast__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a6", 0), _client_guard($scope0_reason, 2) && "a7", 0);
		$wi__input_fast__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a2", void 0, "a5", 1, 0, 2);
	_html(`<button>x</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_fast__closures,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_slow__closures
	});
}, 1);
