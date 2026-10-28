// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "c", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "c", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !a2; b b b%b b b ;<h1>Fields</h1><label>second</label><input><!><label>local</label><input><button>toggle</button>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const heading = input.heading || _id("A");
	const second = _id("B");
	_html(`<h1${_attr("id", heading, $scope0_id, "a", $scope0_reason, 0)}>Fields</h1>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<label${_attr("for", second, $scope0_id, "b", 0, 0)}>second</label>${_el_resume($scope0_id, "b", 0)}<input${_attr("id", second, $scope0_id, "c", 0, 0)}>${_el_resume($scope0_id, "c", 0)}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		field_default({
			name: item.key,
			uid: item.uid,
			heading
		});
		_patch_child_end();
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
		_scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "key", $scope0_id, "d", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 1);
	let local = "given";
	const localId = local;
	_html(`<label${_attr("for", localId)}>local</label>${_el_resume($scope0_id, "e")}<input${_attr("id", localId)}>${_el_resume($scope0_id, "f")}<button>toggle</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		l: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && heading,
		n: local
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", heading, !_server_guard($scope0_reason, 0));
}, 1);
