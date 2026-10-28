// template.marko
const $template = "<p> </p><div></div><!><button> </button>";
const $walks = "D l b%b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l b%b D ;<p> </p><div></div><!><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</p><div`);
	_attrs_content({
		title: input.label,
		onClick: _bind_resume(function() {
			console.log("clicked " + input.label);
		}, "__tests__/template.marko_0/onClick", $scope0_id)
	}, "#div/1", $scope0_id, "div", 0, 1, 0, $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/1")}`);
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/4", count)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_label#7");
	_scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6",
		"EventAttributes:#div/1": ["...{ title: input.label, onClick() { console.log(\"clicked \" + input.label) } }", "3:9"]
	});
}, 1);
