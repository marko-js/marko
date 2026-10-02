// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		{
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "a", show)}</span>`);
			_subscribe($show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
		}
		_html(_escape((() => {
			throw new Error("nope");
		})()));
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "a", err.message, $wg__err_message)}</p>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, void 0, "a1");
	_html(`<button class=toggle>${_text_resume($scope0_id, "c", show)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: show,
		e: $show__closures
	});
}, 1);
