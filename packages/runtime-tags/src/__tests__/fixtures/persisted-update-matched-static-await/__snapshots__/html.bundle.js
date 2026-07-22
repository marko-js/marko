// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 1), $sg__input_title__OR__input_missing = _serialize_guard($scope0_reason, 0), $sg__input_missing = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", $sg__input_title)}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_if(() => input.missing ? 0 : 1, $scope0_id, "d", $sg__input_missing, $sg__input_missing, $sg__input_missing, void 0, void 0, "a0", [() => {
		const $scope5_id = _scope_id();
		_html("<p>gone</p>");
		$sg__input_missing && writeScope($scope5_id, {});
	}, () => {
		const $scope1_id = _scope_id();
		_html("<section>");
		_try($scope1_id, "a", _content_resume("a6", () => {
			const $scope6_id = _scope_id();
			_scope_reason();
			_await($scope6_id, "a", resolveAfter(0, 1), () => {
				_scope_id();
				_html("<p><strong>deals never change</strong></p>");
			}, 0, "a4");
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a5", () => {
			_scope_reason();
			_scope_id();
			_html("loading deals…");
		}, $scope1_id) }) }, "a1", "a7");
		_html("</section><footer>");
		_try($scope1_id, "b", _content_resume("a12", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_await($scope2_id, "a", resolveAfter(0, 2), () => {
				const $scope3_id = _scope_id();
				_for_to(3, 1, 1, (i) => {
					const $scope4_id = _scope_id();
					$sg__input_title__OR__input_missing && _script($scope4_id, "a8");
					_html(`<em>review <!>${_escape(_hole_value($scope4_id, "Qa", i, _persisted_reason()))}${_el_resume($scope4_id, "a")} of ${_sep($sg__input_title)}${_escape(_hole_value($scope4_id, "Qb", input.title, _persisted_reason()))}${_el_resume($scope4_id, "b", $sg__input_title)}</em>`);
					$sg__input_title__OR__input_missing && writeScope($scope4_id, { _: _scope_with_id($scope3_id) });
				}, 0, $scope3_id, "a", $sg__input_title, $sg__input_title, 0, 0, 1, "a9");
				$sg__input_title__OR__input_missing && writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
			}, $sg__input_title__OR__input_missing, "a10");
			$sg__input_title__OR__input_missing && writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a11", () => {
			_scope_reason();
			_scope_id();
			_html("loading reviews…");
		}, $scope1_id) }) }, "a2", "a13");
		_html("</footer>");
		$sg__input_title__OR__input_missing && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}], ["a15", "a14"]);
	_script($scope0_id, "a16");
	writeScope($scope0_id, {
		g: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.title,
		i: _state_reason() && count,
		j: $sg__input_title && $input_title__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a17": ["loading reviews…", "b"],
	"a11": ["loading reviews…", "b"],
	"a4": ["<p><strong>deals never change</strong></p>", "b"],
	"a18": ["<p><strong>deals never change</strong></p>", "b"],
	"a19": ["loading deals…", "b"],
	"a5": ["loading deals…", "b"],
	"a7": ["<!><!><!>", "b%c"],
	"a6": ["<!><!><!>", "b%c"],
	"a15": ["<p>gone</p>", "b"],
	"a20": ["<p>gone</p>", "b"],
	"a9": ["<em>review <!> of <!></em>", "Db%c%l"],
	"a21": ["<em>review <!> of <!></em>", "Db%c%l"],
	"a10": ["<!><!><!>", "b%c"],
	"a22": ["<!><!><!>", "b%c"],
	"a13": ["<!><!><!>", "b%c"],
	"a12": ["<!><!><!>", "b%c"],
	"a14": ["<section><!></section><footer><!></footer>", "D%lD%l"],
	"a23": ["<section><!></section><footer><!></footer>", "D%lD%l"],
	"a3": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"],
	"a": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"]
});
