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
	const z = x;
	_html(`<button class=x>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}`);
	wrap_default({ content: _content("a6", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrap_content__x__closures = /* @__PURE__ */ new Set();
		let x = 10;
		_html(`<button class=y></button>${_el_resume($scope1_id, "a")}`);
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", resolveAfter(1, 1), (v) => {
				const $scope3_id = _scope_id();
				_html(`<i>${_text_resume($scope3_id, "a", z)}</i><b>${_text_resume($scope3_id, "b", x)}</b>`);
				_subscribe($wrap_content__x__closures, _subscribe($x__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0"), "a1");
			});
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, () => {
			_scope_reason();
			_scope_id();
			_html("loading");
		}, void 0, "a2");
		wrap_default({ content: _content("a4", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html(`<s>${_text_resume($scope4_id, "a", x)}</s>`);
			_subscribe($wrap_content__x__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				Cf: 1
			}), "a3");
		}, $scope1_id) });
		_script($scope1_id, "a5");
		_scope($scope1_id, {
			d: x,
			_: _scope_with_id($scope0_id),
			f: $wrap_content__x__closures
		});
	}, $scope0_id) });
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		d: x,
		e: $x__closures
	});
}, 1);
