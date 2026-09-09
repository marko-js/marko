// node_modules/probe-elements/define/probe-badge.js
var ProbeBadge = class extends HTMLElement {
	static observedAttributes = [
		"label",
		"count",
		"disabled"
	];
	constructor() {
		super();
		this.attachShadow({ mode: "open" }).innerHTML = "<button type=\"button\"></button><slot></slot>";
		this.button = this.shadowRoot.querySelector("button");
	}
	connectedCallback() {
		this.button.addEventListener("click", this);
		this.render();
	}
	disconnectedCallback() {
		this.button.removeEventListener("click", this);
	}
	attributeChangedCallback() {
		this.render();
	}
	handleEvent() {
		this.dispatchEvent(new CustomEvent("count-change", {
			detail: Number(this.getAttribute("count") || 0) + 1,
			bubbles: true
		}));
	}
	render() {
		this.button.textContent = `${this.getAttribute("label") || "Likes"}: ${Number(this.getAttribute("count") || 0)}`;
		this.button.disabled = this.hasAttribute("disabled");
	}
};
customElements.define("probe-badge", ProbeBadge);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	_attr($scope.a, "count", $scope.f);
	_text($scope.c, $scope.f);
});
const $label = /*@__PURE__*/ _let(6, ($scope) => {
	_attr($scope.a, "label", $scope.g);
	_text($scope.b, $scope.g);
});
const $disabled = /*@__PURE__*/ _let(7, ($scope) => _attr($scope.a, "disabled", $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "count-change", function(event) {
		$count($scope, event.detail);
	});
	_on($scope.d, "click", function() {
		$count($scope, 5);
		$label($scope, "Votes");
	});
	_on($scope.e, "click", function() {
		$disabled($scope, !$scope.h);
	});
});
