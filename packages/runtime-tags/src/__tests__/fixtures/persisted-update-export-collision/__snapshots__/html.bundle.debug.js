// data.js
function patch(id) {
	return `server patch ${id}`;
}
function have(id) {
	return `server have ${id}`;
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.id ? 0 : 1, $scope0_id, "#text/2", $sg__input_id, $sg__input_id, $sg__input_id, 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		const label = patch(input.id);
		_html(`<p>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", label, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_id)} / ${_sep($sg__input_id)}${_escape(_hole_value($scope1_id, "PatchHole:#text/1", have(input.id), _persisted_reason()))}${_el_resume($scope1_id, "#text/1", $sg__input_id)}</p>`);
		$sg__input_id && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p>nothing selected</p>");
		$sg__input_id && writeScope($scope2_id, {}, "__tests__/template.marko", "9:2");
	}], ["__tests__/template.marko_1_update", "__tests__/template.marko_2_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_id: (_serialize_if($scope0_reason, 0) || _patch_reason()) && input.id,
		count: _state_reason() && count
	}, "__tests__/template.marko", 0, {
		input_id: ["input.id"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<p>nothing selected</p>", "b"],
	"__tests__/template.marko_2_content": ["<p>nothing selected</p>", "b"],
	"__tests__/template.marko_1_update": ["<p><!> / <!></p>", "D%c%l"],
	"__tests__/template.marko_1_content": ["<p><!> / <!></p>", "D%c%l"],
	"__tests__/template.marko_0_update": ["<button>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button>clicked <!></button><!><!>", " Db%l%c"]
});
