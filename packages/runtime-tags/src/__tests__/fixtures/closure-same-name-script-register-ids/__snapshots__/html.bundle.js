// tags/wrap.marko
var wrap_default = _template("b", (input) => {
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
	const $x__closures = /* @__PURE__ */ new Set();
	let x = 1;
	_html(`<button class=x>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}`);
	wrap_default({ content: _content("a6", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrap_content__x2__closures = /* @__PURE__ */ new Set();
		let x = 10;
		_html(`<button class=y></button>${_el_resume($scope1_id, "a")}<em>${_text_resume($scope1_id, "b", x)}</em>`);
		wrap_default({ content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<s>${_text_resume($scope2_id, "a", x)}</s>`);
			_subscribe($wrap_content__x2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
		}, $scope1_id) });
		_script($scope1_id, "a2");
		_script($scope1_id, "a3");
		_script($scope1_id, "a4");
		_subscribe($x__closures, _scope($scope1_id, {
			d: x,
			_: _scope_with_id($scope0_id),
			f: $wrap_content__x2__closures
		}), "a5");
	}, $scope0_id) });
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		d: x,
		e: $x__closures
	});
}, 1);
