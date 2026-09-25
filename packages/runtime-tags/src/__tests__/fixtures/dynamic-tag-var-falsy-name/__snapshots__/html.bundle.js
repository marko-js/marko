// tags/wrapper/index.marko
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $si__input_a11yText = _serialize_if(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $btn_getter = _hoist($scope0_id, "b0");
	const $wrapper_content__subscribers = /* @__PURE__ */ new Set();
	const $input_a11yText__closures = /* @__PURE__ */ new Set();
	wrapper_default({ content: _content("b4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $inputa11yTextbutton_scope = _peek_scope_id();
		let $btn = _dynamic_tag($scope1_id, "a", input.a11yText && "button", { "aria-label": input.a11yText }, _content("b1", () => {
			_scope_id();
			_scope_reason();
			_html("content");
		}, $scope1_id));
		_var($scope1_id, "b", $inputa11yTextbutton_scope, "b2");
		_subscribe($si__input_a11yText && $input_a11yText__closures, _subscribe($wrapper_content__subscribers, _scope($scope1_id, {
			c: $btn,
			_: $si__input_a11yText && _scope_with_id($scope0_id)
		})), "b3");
	}, $scope0_id) });
	const $return = { btn: $btn_getter };
	_scope($scope0_id, {
		B1: $wrapper_content__subscribers,
		e: $si__input_a11yText && $input_a11yText__closures
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	child_default({});
	child_default({ a11yText: "Close" });
}, 1);
