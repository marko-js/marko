// tags/wrapper.marko
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	wrapper_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let l = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" }
		];
		let short = false;
		_for_to(l.length - 1, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "a", l[i].name)}</span>`);
			_scope($scope2_id, { M: i });
		}, 0, $scope1_id, "a", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			c: l,
			d: l?.length,
			e: short
		});
	}, $scope0_id) });
}, 1);
