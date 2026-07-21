// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 1), $sg__input_title__OR__input_missing = _serialize_guard($scope0_reason, 0), $sg__input_missing = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", $sg__input_title)}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => input.missing ? 0 : 1, $scope0_id, "#text/3", $sg__input_missing, $sg__input_missing, $sg__input_missing, void 0, void 0, "__tests__/template.marko_0/update_if_#text/3", [() => {
		const $scope5_id = _scope_id();
		_html("<p>gone</p>");
		$sg__input_missing && writeScope($scope5_id, {}, "__tests__/template.marko", "6:2");
	}, () => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_6_content", () => {
			const $scope6_id = _scope_id();
			_scope_reason();
			_await($scope6_id, "#text/0", resolveAfter(0, 1), () => {
				const $scope8_id = _scope_id();
				_html("<p><strong>deals never change</strong></p>");
			}, 0, "__tests__/template.marko_8_update");
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_7_content", () => {
			_scope_reason();
			const $scope7_id = _scope_id();
			_html("loading deals…");
		}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/0", "__tests__/template.marko_6_update");
		_html("</section><footer>");
		_try($scope1_id, "#text/1", _content_resume("__tests__/template.marko_2_content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_await($scope2_id, "#text/0", resolveAfter(0, 2), () => {
				const $scope3_id = _scope_id();
				_for_to(3, 1, 1, (i) => {
					const $scope4_id = _scope_id();
					$sg__input_title__OR__input_missing && _script($scope4_id, "__tests__/template.marko_4_input_title/pending");
					_html(`<em>review <!>${_escape(_hole_value($scope4_id, "PatchHole:#text/0", i, _persisted_reason()))}${_el_resume($scope4_id, "#text/0")} of ${_sep($sg__input_title)}${_escape(_hole_value($scope4_id, "PatchHole:#text/1", input.title, _persisted_reason()))}${_el_resume($scope4_id, "#text/1", $sg__input_title)}</em>`);
					$sg__input_title__OR__input_missing && writeScope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "22:10");
				}, 0, $scope3_id, "#text/0", $sg__input_title, $sg__input_title, 0, 0, 1, "__tests__/template.marko_4_update");
				$sg__input_title__OR__input_missing && writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "21:8");
			}, $sg__input_title__OR__input_missing, "__tests__/template.marko_3_update");
			$sg__input_title__OR__input_missing && writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "19:6");
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_9_content", () => {
			_scope_reason();
			const $scope9_id = _scope_id();
			_html("loading reviews…");
		}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/1", "__tests__/template.marko_2_update");
		_html("</footer>");
		$sg__input_title__OR__input_missing && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2");
	}], ["__tests__/template.marko_5_update", "__tests__/template.marko_1_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_title: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.title,
		count: _state_reason() && count,
		"ClosureScopes:input_title": $sg__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_9_update": ["loading reviews…", "b"],
	"__tests__/template.marko_9_content": ["loading reviews…", "b"],
	"__tests__/template.marko_8_update": ["<p><strong>deals never change</strong></p>", "b"],
	"__tests__/template.marko_8_content": ["<p><strong>deals never change</strong></p>", "b"],
	"__tests__/template.marko_7_update": ["loading deals…", "b"],
	"__tests__/template.marko_7_content": ["loading deals…", "b"],
	"__tests__/template.marko_6_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_6_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_5_update": ["<p>gone</p>", "b"],
	"__tests__/template.marko_5_content": ["<p>gone</p>", "b"],
	"__tests__/template.marko_4_update": ["<em>review <!> of <!></em>", "Db%c%l"],
	"__tests__/template.marko_4_content": ["<em>review <!> of <!></em>", "Db%c%l"],
	"__tests__/template.marko_3_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_3_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<section><!></section><footer><!></footer>", "D%lD%l"],
	"__tests__/template.marko_1_content": ["<section><!></section><footer><!></footer>", "D%lD%l"],
	"__tests__/template.marko_0_update": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"],
	"__tests__/template.marko": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"]
});
