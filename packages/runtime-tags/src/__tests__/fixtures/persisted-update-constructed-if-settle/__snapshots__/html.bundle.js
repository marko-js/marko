// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 2), $sg__input_title__OR__input_missing = _serialize_guard($scope0_reason, 0), $sg__input_missing = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", $sg__input_title)}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_if(() => input.missing ? 0 : 1, $scope0_id, "d", $sg__input_title__OR__input_missing | $sg__input_missing, $sg__input_title__OR__input_missing, $sg__input_missing, void 0, void 0, "a0", [() => {
		const $scope6_id = _scope_id();
		_html("<p>gone</p>");
		$sg__input_missing && writeScope($scope6_id, {});
	}, () => {
		const $scope1_id = _scope_id();
		_if(() => input.title.length ? 0 : 1, $scope1_id, "a", $sg__input_title, $sg__input_title, _serialize_guard($scope0_reason, 4), void 0, void 0, "a1", [() => {
			const $scope2_id = _scope_id();
			_html(` 5> <h2>long ${_sep($sg__input_title)}${_escape(_hole_value($scope2_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope2_id, "a", $sg__input_title)}</h2>`);
			$sg__input_title__OR__input_missing && _subscribe($sg__input_title && $input_title__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
		}, () => {
			const $scope3_id = _scope_id();
			_html(`<h2>short ${_sep($sg__input_title)}${_escape(_hole_value($scope3_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__input_title)}</h2>`);
			$sg__input_title__OR__input_missing && _subscribe($sg__input_title && $input_title__closures, writeScope($scope3_id, {
				_: _scope_with_id($scope1_id),
				Ck: $sg__input_title && 1
			}));
		}], ["a5", "a4"]);
		_html("<section>");
		_try($scope1_id, "b", _content_resume("a9", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_await($scope4_id, "a", resolveAfter(0, 1), () => {
				const $scope5_id = _scope_id();
				$sg__input_title__OR__input_missing && _script($scope5_id, "a6");
				_html(`<p>extras for ${_sep($sg__input_title)}${_escape(_hole_value($scope5_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope5_id, "a", $sg__input_title)}</p>`);
				$sg__input_title__OR__input_missing && writeScope($scope5_id, {
					_: _scope_with_id($scope4_id),
					Ck: $sg__input_title && 2
				});
				_resume_branch($scope5_id);
			}, $sg__input_title__OR__input_missing, "a7");
			$sg__input_title__OR__input_missing && writeScope($scope4_id, { _: _scope_with_id($scope1_id) });
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a8", () => {
			_scope_reason();
			_scope_id();
			_html("loading extras…");
		}, $scope1_id) }) }, "a2", "a10");
		_html("</section>");
		$sg__input_title__OR__input_missing && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}], ["a12", "a11"]);
	_script($scope0_id, "a13");
	writeScope($scope0_id, {
		g: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.title,
		i: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.title?.length,
		j: _state_reason() && count,
		k: $sg__input_title && $input_title__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a14": ["loading extras…", "b"],
	"a8": ["loading extras…", "b"],
	"a12": ["<p>gone</p>", "b"],
	"a15": ["<p>gone</p>", "b"],
	"a7": ["<p>extras for <!></p>", "Db%l"],
	"a16": ["<p>extras for <!></p>", "Db%l"],
	"a10": ["<!><!><!>", "b%c"],
	"a9": ["<!><!><!>", "b%c"],
	"a4": ["<h2>short <!></h2>", "Db%l"],
	"a17": ["<h2>short <!></h2>", "Db%l"],
	"a5": [" 5> <h2>long <!></h2>", "bDb%l"],
	"a18": [" 5> <h2>long <!></h2>", "bDb%l"],
	"a11": ["<!><!><section><!></section>", "b%bD%l"],
	"a19": ["<!><!><section><!></section>", "b%bD%l"],
	"a3": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"],
	"a": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"]
});
