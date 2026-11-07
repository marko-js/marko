// a.marko
_shells({ a: "a,<h1>A</h1>" });
var a_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>A</h1>");
});

// b.marko
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1",
	b2: "b2;D ;<p> </p>",
	b3: "b3;b%;<!><!><!>",
	b: "b !b5; b%;<button>go</button><!><!>"
});
var b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html(`<button>go</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_mark($scope3_id, "a", value, 1, $scope0_reason, 0)}</p>`);
			_scope($scope3_id, {});
		}, 1, "b0", _unfilled_if($scope0_reason, 0) && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b4", 1);
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "b4", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading");
	}, void 0, "b1", void 0, "b3", 1, 0, 2);
	_script($scope0_id, "b5");
	_scope($scope0_id, { f: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
});

// template.marko
_shells({ c: "c;D%;<main><!></main>" });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page__OR__input_promise = _write_guard($scope0_reason, 0), $fg__input_page = _filled_guard($scope0_reason, 1), $fg__input_promise = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.page === "b" ? b_default : a_default, { promise: input.promise }, 1, 0, 0, $wg__input_page__OR__input_promise, $scope0_reason, 0);
	_html("</main>");
	_patch_render($scope0_id, "c0", [$fg__input_page && "d", $fg__input_promise && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.page,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.promise
	}) || ($fg__input_page && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.page, !_server_guard($scope0_reason, 1)), $fg__input_promise && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 2)));
}, 1);
