// tags/wrapper/index.marko
var wrapper_default = _template("__tests__/tags/wrapper/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrapper/index.marko", 0);
});

// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_a11yText = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $btn_getter = _hoist($scope0_id, "__tests__/tags/child/index.marko_0_$btn#2/hoist");
	const $wrapper_content__subscribers = new Set();
	const $input_a11yText__closures = new Set();
	wrapper_default({ content: _content("__tests__/tags/child/index.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $inputa11yTextbutton_scope = _peek_scope_id();
		let $btn = _dynamic_tag($scope1_id, "#text/0", input.a11yText && "button", { "aria-label": input.a11yText }, _content_resume("__tests__/tags/child/index.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html("content");
		}, $scope1_id));
		_var($scope1_id, "#scopeOffset/1", $inputa11yTextbutton_scope, "__tests__/tags/child/index.marko_1_$btn#2/var");
		_subscribe($si__input_a11yText && $input_a11yText__closures, _subscribe($wrapper_content__subscribers, _scope($scope1_id, {
			$btn,
			_: $si__input_a11yText && _scope_with_id($scope0_id)
		}, "__tests__/tags/child/index.marko", "1:2", { $btn: "2:36" })));
		_assert_hoist($btn);
	}, $scope0_id) });
	const $return = { btn: $btn_getter };
	_scope($scope0_id, {
		"ClosureScopes:1": $wrapper_content__subscribers,
		"ClosureScopes:input_a11yText": $si__input_a11yText && $input_a11yText__closures
	}, "__tests__/tags/child/index.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let plain = child_default({});
	let labeled = child_default({ a11yText: "Close" });
}, 1);
