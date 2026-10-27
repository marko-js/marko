// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	({ content: _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", n)}</p>`);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1");
	}, $scope0_id) }).content({});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			child_default({});
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {});
}, 1);
