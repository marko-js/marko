// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	panel_default({ content: _content_resume("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const x = input.label + "!";
		let k = 0;
		_html(`<button class=k>${_text_resume($scope1_id, "b", x + ":0")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			c: x,
			d: k,
			_: _scope_with_id($scope0_id)
		}), "a1");
	}, $scope0_id) });
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures
	});
}, 1);
