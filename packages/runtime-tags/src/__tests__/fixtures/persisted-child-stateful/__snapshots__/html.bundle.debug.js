// tags/counter/index.marko
const $template$1 = "<button class=c> </button>";
const $walks$1 = " D l";
_shells({ "__tests__/tags/counter/index.marko": "__tests__/tags/counter/index.marko !__tests__/tags/counter/index.marko_0; D ;<button class=c> </button>" });
var counter_default = _template_persisted("__tests__/tags/counter/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=c>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/counter/index.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, { n }, "__tests__/tags/counter/index.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = "<main><!><button class=t>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			counter_default({});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
