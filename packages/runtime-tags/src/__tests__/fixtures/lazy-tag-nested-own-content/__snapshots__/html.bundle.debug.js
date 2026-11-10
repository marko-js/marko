// tags/press-button.marko
var press_button_default = _template("__tests__/tags/press-button.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<button>");
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 0));
	_html(`</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/press-button.marko_0_input_onPress#4");
	_scope($scope0_id, { input_onPress: input.onPress }, "__tests__/tags/press-button.marko", 0, { input_onPress: ["input.onPress"] });
});

// tags/press-buttons.marko
var press_buttons_default = _template("__tests__/tags/press-buttons.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_button = _write_guard($scope0_reason, 0), $wi__input_button = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.button, (button) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_button << 1);
		const $childScope = _peek_scope_id();
		press_button_default(button);
		$wi__input_button && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/press-buttons.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_button, $wg__input_button, 0, 0, 1);
	$wi__input_button && _scope($scope0_id, {}, "__tests__/tags/press-buttons.marko", 0);
});

// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	press_button_default({
		onPress: _resume(function() {
			count++;
		}, "__tests__/grand-child.marko_0/onPress", $scope0_id),
		content: _content("__tests__/grand-child.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`count:${_text_mark($scope1_id, "#text/0", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/grand-child.marko", "2:2"), "__tests__/grand-child.marko_1_count#0:2/subscribe");
		}, $scope0_id)
	});
	_set_scope_reason(2);
	let $button;
	forOf([10], (step) => $button = attrTags($button, {
		onPress: _resume_locals(function() {
			count += step;
		}, "__tests__/grand-child.marko_0/onPress2", { "step/7": step }, $scope0_id),
		content: _content("__tests__/grand-child.marko_2*content", () => {
			const $scope2_reason = _scope_reason(), $wg__step = _write_guard($scope2_reason, 0);
			const $scope2_id = _scope_id();
			_html(`add ${_text_mark($scope2_id, "#text/0", step, $wg__step * 2)}`);
			_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/grand-child.marko", "5:6");
		}, $scope0_id)
	}));
	const $childScope = _peek_scope_id();
	press_buttons_default({ button: $button });
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/3": $count__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/grand-child.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(() => grand_child_default, "__tests__/grand-child.marko", flush, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$GrandChild_withLoadAssets({});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
}, 1);
