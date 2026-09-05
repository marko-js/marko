// tags/title.marko
var title_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=title>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/textarea.marko
var textarea_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=textarea>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 1;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	title_default({ content: _content("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`title ${_text_resume($scope1_id, "a", n, 2)}`);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) });
	textarea_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`textarea ${_text_resume($scope2_id, "a", n, 2)}`);
		_subscribe($n__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ce: 1
		}));
	}, $scope0_id) });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: n,
		e: $n__closures
	});
}, 1);
