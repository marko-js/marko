// tags/wrap.marko
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = /* @__PURE__ */ new Set();
	let x = 1;
	const z = x;
	_html(`<button class=outer>${_text_resume($scope0_id, "b", z)}</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "c", z)}</p>`);
	wrap_default({ content: _content("a6", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrap_content__x__closures = /* @__PURE__ */ new Set();
		let x = 1;
		_html(`<button class=inner></button>${_el_resume($scope1_id, "a")}<em>${_text_resume($scope1_id, "b", z)}</em>`);
		wrap_default({ content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_text_resume($scope2_id, "a", z)}</i><b>${_text_resume($scope2_id, "b", x)}</b>`);
			_subscribe($wrap_content__x__closures, _subscribe($x__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				Cf: 1
			}), "a0"), "a0");
		}, $scope1_id) });
		wrap_default({ content: _content("a3", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<s>${_text_resume($scope3_id, "a", x)}</s>`);
			_subscribe($wrap_content__x__closures, _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				Cg: 1
			}), "a2");
		}, $scope1_id) });
		_script($scope1_id, "a4");
		_subscribe($x__closures, _scope($scope1_id, {
			e: x,
			_: _scope_with_id($scope0_id),
			g: $wrap_content__x__closures
		}), "a5");
	}, $scope0_id) });
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		e: x,
		f: $x__closures
	});
}, 1);
