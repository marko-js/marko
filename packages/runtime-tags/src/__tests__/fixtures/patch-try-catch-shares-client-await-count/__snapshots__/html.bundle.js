// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1",
	a2: "a2;D ;<b> </b>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4 a7;D%b%;<div><!><!></div>",
	a: "a !a9;D%b ;<main><!><button>x</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $pending__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 0);
			_await($scope2_id, "a", input.a, (a) => {
				const $scope6_id = _scope_id();
				_html(`<b>${_text_mark($scope6_id, "a", a, 1, $scope0_reason, 0)}</b>`);
				_scope($scope6_id, {});
			}, 1, "a0", $ui__input_a && 2, 1);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a5", 1);
			$wi__input_a && _subscribe($ui__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 0) && "a5", 0);
			$wi__input_a && _resume_branch($scope2_id);
		}, void 0, (e) => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`<s>${_text_mark($scope5_id, "a", e.message, 1, 4, 0)}</s>`);
			_scope($scope5_id, {});
		}, 0, "a1", "a3", 1, 1);
		_if(() => {}, $scope1_id, "b");
		_html("</div>");
		_subscribe($pending__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a7");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a8", void 0, "a4", 1);
	_html(`<button>x</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		g: $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures,
		h: $pending__closures
	});
}, 1);
