// counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
_shells({ "__tests__/counter.marko": "__tests__/counter.marko !__tests__/counter.marko_0; D ;<button> </button>" });
var counter_default = _template_persisted("__tests__/counter.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = input;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = n;
	_script($scope0_id, "__tests__/counter.marko_0");
	_patch_bind($scope0_id, "#TagVariableChange", _resume(function(v) {
		n = v;
	}, "__tests__/counter.marko_0/valueChange", $scope0_id) || void 0);
	_patch_value($scope0_id, "__tests__/counter.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, {
		n,
		"#TagVariableChange": _resume(function(v) {
			n = v;
		}, "__tests__/counter.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/counter.marko", 0, { n: "1:6" });
	return $return;
}, 0, 0);

// template.marko
const $template = "<main><!><p> </p></main>";
const $walks = "D1bD m";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D1bD ;<main><!><p> </p></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.on ? counter_default : null;
	const $input2 = [input.start];
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, "__tests__/template.marko_0_n#8/var", $scope0_owned, 0);
	const $inputoncounternull_scope = _peek_scope_id();
	let n = _dynamic_tag($scope0_id, "#text/0", $tag, [...$input2], 0, 1, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $inputoncounternull_scope, "__tests__/template.marko_0_n#8/var");
	_html(`<p>${_patch_text($scope0_id, "#text/2", n, void 0, $scope0_owned, 0)}</p></main>`);
	$scope0_reason && _scope($scope0_id, {
		input_on: input.on,
		input_start: input.start
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_start: ["input.start"]
	});
}, 1, 1);
