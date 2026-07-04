// data.js
function getProduct(id) {
	if (typeof window !== "undefined") {
		throw new Error("getProduct is server-only");
	}
	return {
		id,
		title: `Product ${id}`,
		price: id * 100 + .5,
		image: `/images/${id}.svg`
	};
}
function getRecommendations(id) {
	if (typeof window !== "undefined") {
		throw new Error("getRecommendations is server-only");
	}
	return resolveAfter([{
		id: id + 1,
		title: `Product ${id + 1}`
	}, {
		id: id + 2,
		title: `Product ${id + 2}`
	}], 1);
}
const getProducts = typeof window === "undefined" ? (ids) => ids.map((id) => ({
	id,
	title: `Product ${id}`,
	price: id * 100 + .5
})) : undefined;

// tags/shared-list.marko
const subsByKey = {};
var shared_list_default = _template("__tests__/tags/shared-list.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = $global().data[input.name];
	const $return = value;
	_script($scope0_id, "__tests__/tags/shared-list.marko_0_input_name_$global_data");
	writeScope($scope0_id, {
		input_name: input.name,
		"#TagVariableChange": _state_reason() && (_resume(function(next) {
			$global().data[input.name] = next;
			subsByKey[input.name]?.forEach((cb) => cb());
		}, "__tests__/tags/shared-list.marko_0/valueChange", $scope0_id) || void 0)
	}, "__tests__/tags/shared-list.marko", 0, { input_name: ["input.name"] });
	_resume_branch($scope0_id);
	return $return;
});

// tags/actions.marko
var actions_default = _template("__tests__/tags/actions.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const productId = input.id;
	const $childScope = _peek_scope_id();
	let list = shared_list_default({ name: "cart" });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/actions.marko_0_list/var");
	let added = 0;
	_html(`<button class=add>added <!>${_escape(added)}${_el_resume($scope0_id, "#text/3")} of ${_sep($sg__input_id)}${_escape(_hole_value($scope0_id, "#text/4", productId, _persisted_reason()))}${_el_resume($scope0_id, "#text/4", $sg__input_id)} (<!>${_escape(list.length)}${_el_resume($scope0_id, "#text/5")} in cart)</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/actions.marko_0");
	writeScope($scope0_id, {
		productId,
		list: _state_reason() && list,
		added: _state_reason() && added,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/actions.marko", 0, {
		productId: "1:8",
		list: "2:14",
		added: "3:6"
	});
	_resume_branch($scope0_id);
});

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>${open ? "collapse" : "expand"}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}</aside><section>`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason());
	_html("</section>");
	_script($scope0_id, "__tests__/tags/layout.marko_0");
	writeScope($scope0_id, { open: _state_reason() && open }, "__tests__/tags/layout.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global_productId__closures = new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Cart = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $childScope = _peek_scope_id();
		let list = shared_list_default({ name: "cart" });
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_list/var");
		let products = getProducts?.(list) || [];
		const entries = list.map((id) => ({
			product: products.find((p) => p.id === id),
			id
		}));
		_if(() => {
			if (!entries.length) {
				const $scope3_id = _scope_id();
				_html("<p class=cart>cart is empty</p>");
				writeScope($scope3_id, {}, "__tests__/template.marko", "10:4");
				return 0;
			} else {
				const $scope2_id = _scope_id();
				_html("<ul class=cart>");
				_for_of(entries, (entry) => {
					const $scope4_id = _scope_id();
					_html(`<li>${_escape(entry.product.title)}${_el_resume($scope4_id, "#text/0")} $<!>${_escape(entry.product.price)}${_el_resume($scope4_id, "#text/1")}</li>`);
					writeScope($scope4_id, {}, "__tests__/template.marko", "15:8");
				}, function(entry) {
					return entry.id;
				}, $scope2_id, "#ul/0", 1, 1, 1, "</ul>", 1);
				_html(`<p class=total>total $<!>${_escape(entries.reduce((sum, e) => sum + e.product.price, 0))}${_el_resume($scope2_id, "#text/1")}</p>`);
				writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "13:4");
				return 1;
			}
		}, $scope1_id, "#text/2");
		writeScope($scope1_id, {
			products: _state_reason() && products,
			entries: _state_reason() && entries,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:2", {
			products: "8:8",
			entries: "9:10"
		});
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const Item = { content: _content_resume("__tests__/template.marko_5_content", () => {
		const $scope5_id = _scope_id();
		const $Item_content__product_id__closures = new Set();
		const $scope5_reason = _scope_reason();
		const product = $global().productId && getProduct($global().productId);
		_if(() => {
			if (!product) {
				const $scope8_id = _scope_id();
				_html("<h2>not found</h2>");
				_persisted_reason() && writeScope($scope8_id, {}, "__tests__/template.marko", "24:4");
				return 0;
			} else {
				const $scope6_id = _scope_id();
				_html(`<img${_attr("src", _hole_value($scope6_id, "UpdateAttr:src:#img/0", product.image, _persisted_reason()))}${_attr("alt", _hole_value($scope6_id, "UpdateAttr:alt:#img/0", product.title, _persisted_reason()))} class=thumb>${_el_resume($scope6_id, "#img/0", _persisted_reason())}<h2 class=title>${_escape(_hole_value($scope6_id, "#text/1", product.title, _persisted_reason()))}${_el_resume($scope6_id, "#text/1", _persisted_reason())}</h2><div class=price>$${_sep(_persisted_reason())}${_escape(_hole_value($scope6_id, "#text/2", product.price.toFixed(2), _persisted_reason()))}${_el_resume($scope6_id, "#text/2", _persisted_reason())}</div>`);
				const $childScope2 = _peek_scope_id();
				_set_serialize_reason(_persisted_reason());
				actions_default({ id: product.id });
				_try($scope6_id, "#text/4", _content_resume("__tests__/template.marko_7_content", () => {
					const $scope7_id = _scope_id();
					const $scope7_reason = _scope_reason();
					_await($scope7_id, "#text/0", getRecommendations(product.id), (recs) => {
						const $scope10_id = _scope_id();
						_html("<ul class=recs>");
						_for_of(recs, (rec) => {
							const $scope11_id = _scope_id();
							_html(`<li>${_escape(_hole_value($scope11_id, "#text/0", rec.title, _persisted_reason()))}${_el_resume($scope11_id, "#text/0", _persisted_reason())}</li>`);
							_persisted_reason() && writeScope($scope11_id, {}, "__tests__/template.marko", "36:12");
						}, function(rec) {
							return rec.id;
						}, $scope10_id, "#ul/0", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1);
						_persisted_reason() && writeScope($scope10_id, {}, "__tests__/template.marko", "34:8");
					}, _persisted_reason());
					_persisted_reason() && _subscribe($Item_content__product_id__closures, writeScope($scope7_id, { _: _scope_with_id($scope6_id) }, "__tests__/template.marko", "32:6"));
					_resume_branch($scope7_id);
				}, $scope6_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_9_content", () => {
					_scope_reason();
					const $scope9_id = _scope_id();
					_html("loading recommendations…");
				}, $scope6_id) }) });
				_persisted_reason() && writeScope($scope6_id, {
					_: _scope_with_id($scope5_id),
					"#childScope/3": _existing_scope($childScope2)
				}, "__tests__/template.marko", "27:4");
				return 1;
			}
		}, $scope5_id, "#text/0", _persisted_reason(), _persisted_reason(), _persisted_reason());
		_persisted_reason() && _subscribe($global_productId__closures, writeScope($scope5_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:product_id": $Item_content__product_id__closures
		}, "__tests__/template.marko", "22:2", {
			product_image: ["product.image", "23:10"],
			product_title: ["product.title", "23:10"],
			product_price: ["product.price", "23:10"],
			product_id: ["product.id", "23:10"]
		}));
		_resume_branch($scope5_id);
	}, $scope0_id) };
	const $childScope3 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "item" ? Item : Cart });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:$global_productId": _persisted_reason() && $global_productId__closures,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, {
		count: "3:6",
		Cart: "6:9",
		Item: "22:9"
	});
	_resume_branch($scope0_id);
}, 1);
