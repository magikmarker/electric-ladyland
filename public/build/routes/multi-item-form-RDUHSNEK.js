import {
  require_react_dom
} from "/build/_shared/chunk-2KUA5ERT.js";
import {
  Form,
  React,
  __commonJS,
  __toESM,
  _extends,
  init_extends,
  init_react,
  require_object_assign,
  require_react,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-KREO6WPC.js";

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object2.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment5 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object2) {
          return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object2) {
          return typeOf(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf(object2) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment5;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_react();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    init_react();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_react();
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_react();
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    init_react();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    init_react();
    var __extends2;
    var __assign3;
    var __rest3;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest3 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// browser-route-module:/Users/markjensen/shared/electric-ladyland/app/routes/multi-item-form.tsx?browser
init_react();

// app/routes/multi-item-form.tsx
init_react();

// app/services/electric-ladyland/shared.ts
init_react();
function convertSingleQuotes(string2) {
  let stringLength = string2.length;
  let result = "";
  for (let i = 0; i < stringLength; i++) {
    let stringChar = string2.charCodeAt(i);
    if (stringChar === 8216 || stringChar === 8217) {
      result += "'";
    } else {
      result += string2[i];
    }
  }
  return result;
}

// app/services/electric-ladyland/form-field.tsx
init_react();

// app/services/electric-ladyland/styles.css
var styles_default = "/build/_assets/styles-2WKJM6UW.css";

// app/services/electric-ladyland/components/hidden.tsx
init_react();
function HiddenField({
  fieldContext,
  fieldBlueprint
}) {
  var _a, _b;
  let initialValue = (_a = fieldBlueprint.initialValue) != null ? _a : "";
  let value = (_b = fieldContext == null ? void 0 : fieldContext.value) != null ? _b : initialValue;
  return /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: fieldBlueprint.name,
    value
  });
}

// app/services/electric-ladyland/components/text-input.tsx
init_react();

// app/services/electric-ladyland/components/shared/display.tsx
init_react();
function FieldLabel({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: `el-form-field-label${className ? " " + className : ""}`
  }, children));
}
function FieldDescription({ children }) {
  if (children) {
    return /* @__PURE__ */ React.createElement("p", {
      className: "el-form-field-description"
    }, children);
  }
  return null;
}
function displayFieldErrors({
  fieldErrors,
  fieldVisited
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, fieldErrors.length >= 1 && fieldVisited ? fieldErrors.map((fieldError) => {
    console.log({ fieldError });
    if (fieldErrors.length === 1) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "el-field-error-text",
        key: fieldError
      }, fieldError);
    } else {
      return /* @__PURE__ */ React.createElement("div", {
        className: "el-field-error-text",
        key: fieldError
      }, "- ", fieldError);
    }
  }) : null);
}
function displayFieldLabelDescriptionError({
  fieldBlueprint,
  fieldErrors,
  fieldVisited
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: fieldBlueprint.name,
    key: fieldBlueprint.name
  }, /* @__PURE__ */ React.createElement(FieldLabel, null, fieldBlueprint.label)), /* @__PURE__ */ React.createElement(FieldDescription, null, fieldBlueprint.description), fieldErrors && fieldVisited ? displayFieldErrors({ fieldErrors, fieldVisited }) : null);
}
function RadioOrCheckboxWrapper({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `el-radio-or-checkbox-wrapper${className ? " " + className : ""}`
  }, children));
}
function RadioOrCheckboxLabel({
  className,
  children,
  htmlFor
}) {
  return /* @__PURE__ */ React.createElement("label", {
    htmlFor,
    className: `el-radio-or-checkbox-label${className ? " " + className : ""}`
  }, children);
}

// app/services/electric-ladyland/components/shared/logic.tsx
init_react();
var import_react = __toESM(require_react());
function createFieldLabel(fieldName) {
  let words = fieldName.split("-");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
function onChange({
  e,
  fieldValidation,
  setFieldErrors,
  fieldErrors
}) {
  fieldValidation.patterns.forEach(async (pattern, index) => {
    var _a;
    let regexTestPattern = new RegExp(pattern, "gim");
    let value = convertSingleQuotes((_a = e == null ? void 0 : e.currentTarget) == null ? void 0 : _a.value);
    let fieldIsValid = regexTestPattern.test(value);
    if (fieldIsValid) {
      setFieldErrors([]);
    } else if (!fieldErrors.includes(fieldValidation.messages[index])) {
      setFieldErrors([...fieldErrors, fieldValidation.messages[index]]);
    }
  });
}
function useFormField({
  fieldBlueprint,
  fieldContext
}) {
  var _a, _b;
  let errors = [];
  let visited = false;
  if (fieldBlueprint.type === "email" || fieldBlueprint.type === "password" || fieldBlueprint.type === "text" || fieldBlueprint.type === "textarea") {
    if (fieldContext == null ? void 0 : fieldContext.errors) {
      errors = fieldContext == null ? void 0 : fieldContext.errors;
      if ((fieldContext == null ? void 0 : fieldContext.errors.length) >= 1)
        visited = true;
    }
  }
  let [fieldErrors, setFieldErrors] = (0, import_react.useState)(errors);
  let [fieldVisited, setFieldVisited] = (0, import_react.useState)(visited);
  let initialValue = (_a = fieldBlueprint.initialValue) != null ? _a : "";
  let defaultValue = (_b = fieldContext == null ? void 0 : fieldContext.value) != null ? _b : initialValue;
  return {
    fieldErrors,
    fieldVisited,
    setFieldErrors,
    setFieldVisited,
    defaultValue
  };
}

// app/services/electric-ladyland/components/text-input.tsx
function TextInput({
  fieldBlueprint,
  fieldContext,
  className
}) {
  let {
    defaultValue,
    fieldErrors,
    setFieldErrors,
    fieldVisited,
    setFieldVisited
  } = useFormField({ fieldBlueprint, fieldContext });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint,
    fieldErrors,
    fieldVisited
  }), fieldBlueprint.type === "text" || fieldBlueprint.type === "password" || fieldBlueprint.type === "email" ? /* @__PURE__ */ React.createElement("input", {
    "data-test": fieldBlueprint.name,
    name: fieldBlueprint.name,
    id: fieldBlueprint.name,
    className: `el-text-input${className ? " " + className : ""}`,
    required: fieldBlueprint.required,
    defaultValue,
    placeholder: fieldBlueprint.placeholder,
    onBlur: () => setFieldVisited(true),
    onChange: (event) => {
      onChange({
        e: event,
        setFieldErrors,
        fieldErrors,
        fieldValidation: fieldBlueprint.validation
      });
    },
    pattern: fieldBlueprint.validation.formInputPattern,
    title: fieldBlueprint.validation.formInputMessage,
    type: fieldBlueprint.type,
    autoCorrect: "false",
    autoComplete: "false"
  }) : fieldBlueprint.type === "textarea" ? /* @__PURE__ */ React.createElement("textarea", {
    name: fieldBlueprint.name,
    id: fieldBlueprint.name,
    "data-test": fieldBlueprint.name,
    className: "w-full font-medium mm:text-lg p-2 px-3 bg-white rounded",
    required: fieldBlueprint.required,
    rows: 5,
    defaultValue,
    placeholder: fieldBlueprint.placeholder,
    onBlur: () => setFieldVisited(true),
    onChange: (event) => {
      onChange({
        e: event,
        setFieldErrors,
        fieldErrors,
        fieldValidation: fieldBlueprint.validation
      });
    }
  }) : null);
}

// app/services/electric-ladyland/components/radio.tsx
init_react();
function Radio({
  fieldBlueprint,
  fieldContext
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint
  }), fieldBlueprint.options.map((radioValue) => {
    console.log({ radioValue });
    let defaultRadioValue = fieldBlueprint.initialValue;
    if (fieldContext == null ? void 0 : fieldContext.value) {
      defaultRadioValue = fieldContext.value;
    }
    const label = createFieldLabel(radioValue);
    return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
      key: `${fieldBlueprint.name}-${radioValue}`
    }, /* @__PURE__ */ React.createElement("input", {
      "data-test": `${fieldBlueprint.name}-${radioValue}`,
      key: radioValue,
      type: "radio",
      id: `${fieldBlueprint.name}-${radioValue}`,
      name: fieldBlueprint.name,
      value: radioValue,
      autoComplete: "off",
      defaultChecked: radioValue === defaultRadioValue
    }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
      className: "ml-2\n              ",
      htmlFor: `${fieldBlueprint.name}-${radioValue}`
    }, label));
  }));
}

// app/services/electric-ladyland/components/checkbox-group.tsx
init_react();
function CheckboxGroup({
  fieldBlueprint,
  context
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint
  }), fieldBlueprint.checkboxes.map((checkbox) => {
    return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
      key: checkbox.name
    }, /* @__PURE__ */ React.createElement("input", {
      "data-test": `${checkbox.name}-${checkbox.value}`,
      key: checkbox.name,
      type: "checkbox",
      id: checkbox.name,
      name: checkbox.name,
      value: checkbox.value,
      autoComplete: "off",
      defaultChecked: context == null ? void 0 : context[checkbox.name]
    }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
      className: "ml-2\n              ",
      htmlFor: checkbox.name
    }, checkbox.label));
  }));
}

// app/services/electric-ladyland/components/expandable-list.tsx
init_react();
var import_react14 = __toESM(require_react());

// node_modules/@reach/dialog/dist/reach-dialog.esm.js
init_react();
var import_react10 = __toESM(require_react());

// node_modules/@reach/portal/dist/reach-portal.esm.js
init_react();
var import_react4 = __toESM(require_react());

// node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js
init_react();
var import_react2 = __toESM(require_react());

// node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js
init_react();
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js
var useIsomorphicLayoutEffect = /* @__PURE__ */ canUseDOM() ? import_react2.useLayoutEffect : import_react2.useEffect;

// node_modules/@reach/utils/use-force-update/dist/reach-utils-use-force-update.esm.js
init_react();
var import_react3 = __toESM(require_react());
function useForceUpdate() {
  var _useState = (0, import_react3.useState)(/* @__PURE__ */ Object.create(null)), dispatch = _useState[1];
  return (0, import_react3.useCallback)(function() {
    dispatch(/* @__PURE__ */ Object.create(null));
  }, []);
}

// node_modules/@reach/portal/dist/reach-portal.esm.js
var import_react_dom = __toESM(require_react_dom());

// node_modules/tiny-warning/dist/tiny-warning.esm.js
init_react();
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/@reach/portal/dist/reach-portal.esm.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["unstable_skipInitialRender"];
var PortalImpl = function PortalImpl2(_ref2) {
  var children = _ref2.children, _ref$type = _ref2.type, type = _ref$type === void 0 ? "reach-portal" : _ref$type, containerRef = _ref2.containerRef;
  var mountNode = (0, import_react4.useRef)(null);
  var portalNode = (0, import_react4.useRef)(null);
  var forceUpdate = useForceUpdate();
  if (true) {
    (0, import_react4.useEffect)(function() {
      if (containerRef != null) {
        true ? tiny_warning_esm_default(typeof containerRef === "object" && "current" in containerRef, "@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : void 0;
        true ? tiny_warning_esm_default(containerRef ? containerRef.current != null : true, "@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html.") : void 0;
      }
    }, [containerRef]);
  }
  useIsomorphicLayoutEffect(function() {
    if (!mountNode.current)
      return;
    var ownerDocument = mountNode.current.ownerDocument;
    var body = (containerRef == null ? void 0 : containerRef.current) || ownerDocument.body;
    portalNode.current = ownerDocument == null ? void 0 : ownerDocument.createElement(type);
    body.appendChild(portalNode.current);
    forceUpdate();
    return function() {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);
  return portalNode.current ? /* @__PURE__ */ (0, import_react_dom.createPortal)(children, portalNode.current) : /* @__PURE__ */ (0, import_react4.createElement)("span", {
    ref: mountNode
  });
};
var Portal = function Portal2(_ref2) {
  var unstable_skipInitialRender = _ref2.unstable_skipInitialRender, props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var _React$useState = (0, import_react4.useState)(false), hydrated = _React$useState[0], setHydrated = _React$useState[1];
  (0, import_react4.useEffect)(function() {
    if (unstable_skipInitialRender) {
      setHydrated(true);
    }
  }, [unstable_skipInitialRender]);
  if (unstable_skipInitialRender && !hydrated) {
    return null;
  }
  return /* @__PURE__ */ (0, import_react4.createElement)(PortalImpl, props);
};
if (true) {
  Portal.displayName = "Portal";
}

// node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js
init_react();
function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}

// node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js
init_react();
function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
function isString(value) {
  return typeof value === "string";
}

// node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js
init_react();
function noop() {
}

// node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js
init_react();
var import_react5 = __toESM(require_react());
var checkedPkgs = {};
function checkStyles(packageName) {
  if (true) {
    var _ref2 = typeof process !== "undefined" ? process.env : {
      NODE_ENV: "development"
    }, environment = _ref2.NODE_ENV;
    if (checkedPkgs[packageName])
      return;
    checkedPkgs[packageName] = true;
    if (environment === "development" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + ' styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n  \n      import "@reach/' + packageName + `/styles.css";
  
    Otherwise you'll need to include them some other way:
  
      <link rel="stylesheet" type="text/css" href="node_modules/@reach/` + packageName + '/styles.css" />\n  \n    For more information visit https://ui.reach.tech/styling.\n    ');
    }
  }
}
function useCheckStyles(packageName) {
  if (true) {
    var name = (0, import_react5.useRef)(packageName);
    (0, import_react5.useEffect)(function() {
      return void (name.current = packageName);
    }, [packageName]);
    (0, import_react5.useEffect)(function() {
      return checkStyles(name.current);
    }, []);
  }
}

// node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js
init_react();
var import_react6 = __toESM(require_react());
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error('Cannot assign value "' + value + '" to ref "' + ref + '"');
    }
  }
}
function useComposedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return (0, import_react6.useCallback)(function(node2) {
    for (var _iterator = _createForOfIteratorHelperLoose(refs), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      assignRef(ref, node2);
    }
  }, refs);
}

// node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js
init_react();
function composeEventHandlers(theirHandler, ourHandler) {
  return function(event) {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

// node_modules/react-focus-lock/dist/es2015/index.js
init_react();

// node_modules/react-focus-lock/dist/es2015/Combination.js
init_react();

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react();
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/react-focus-lock/dist/es2015/Combination.js
init_extends();
var React7 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/Lock.js
init_react();
init_extends();
var React4 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/focus-lock/dist/es2015/constants.js
init_react();
var FOCUS_GROUP = "data-focus-lock";
var FOCUS_DISABLED = "data-focus-lock-disabled";
var FOCUS_ALLOW = "data-no-focus-lock";
var FOCUS_AUTO = "data-autofocus-inside";
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";

// node_modules/use-callback-ref/dist/es2015/index.js
init_react();

// node_modules/use-callback-ref/dist/es2015/assignRef.js
init_react();
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
init_react();
var import_react7 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react7.useState)(function() {
    return {
      value: initialValue,
      callback,
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
init_react();
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef2(ref, newValue);
    });
  });
}

// node_modules/react-focus-lock/dist/es2015/Lock.js
var import_react8 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/FocusGuard.js
init_react();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var hiddenGuard = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
var InFocusGuard = function InFocusGuard2(_ref2) {
  var children = _ref2.children;
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && /* @__PURE__ */ React2.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};
InFocusGuard.propTypes = true ? {
  children: import_prop_types.default.node
} : {};
InFocusGuard.defaultProps = {
  children: null
};

// node_modules/react-focus-lock/dist/es2015/medium.js
init_react();

// node_modules/use-sidecar/dist/es2015/index.js
init_react();

// node_modules/tslib/modules/index.js
init_react();
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// node_modules/use-sidecar/dist/es2015/medium.js
init_react();
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
init_react();
var React3 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar2 = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar2) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar2.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React3.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref2) {
  var target = _ref2.target, currentTarget = _ref2.currentTarget;
  return {
    target,
    currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true
});

// node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock = /* @__PURE__ */ React4.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends22;
  var _React$useState = React4.useState(), realObserved = _React$useState[0], setObserved = _React$useState[1];
  var observed = React4.useRef();
  var isActive = React4.useRef(false);
  var originalFocusedElement = React4.useRef(null);
  var children = props.children, disabled = props.disabled, noFocusGuards = props.noFocusGuards, persistentFocus = props.persistentFocus, crossFrame = props.crossFrame, autoFocus = props.autoFocus, allowTextSelection = props.allowTextSelection, group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar2 = props.sideCar, shouldReturnFocus = props.returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
  var _React$useState2 = React4.useState({}), id = _React$useState2[0];
  var onActivation = React4.useCallback(function() {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = React4.useCallback(function() {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  (0, import_react8.useEffect)(function() {
    if (!disabled) {
      originalFocusedElement.current = null;
    }
  }, []);
  var returnFocus = React4.useCallback(function(allowDefer) {
    var returnFocusTo = originalFocusedElement.current;
    if (returnFocusTo && returnFocusTo.focus) {
      var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function() {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus3 = React4.useCallback(function(event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur3 = mediumBlur.useMedium;
  var setObserveNode = React4.useCallback(function(newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  if (true) {
    if (typeof allowTextSelection !== "undefined") {
      console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default");
    }
    React4.useEffect(function() {
      if (!observed.current) {
        console.error("FocusLock: could not obtain ref to internal node");
      }
    }, []);
  }
  var lockProps = _extends((_extends22 = {}, _extends22[FOCUS_DISABLED] = disabled && "disabled", _extends22[FOCUS_GROUP] = group, _extends22), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, hasLeadingGuards && [
    /* @__PURE__ */ React4.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }),
    hasPositiveIndices ? /* @__PURE__ */ React4.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    }) : null
  ], !disabled && /* @__PURE__ */ React4.createElement(SideCar2, {
    id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled,
    persistentFocus,
    crossFrame,
    autoFocus,
    whiteList,
    shards,
    onActivation,
    onDeactivation,
    returnFocus,
    focusOptions
  }), /* @__PURE__ */ React4.createElement(Container, _extends({
    ref: mergedRef
  }, lockProps, {
    className,
    onBlur: onBlur3,
    onFocus: onFocus3
  }), children), hasTailingGuards && /* @__PURE__ */ React4.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = true ? {
  children: import_prop_types2.node,
  disabled: import_prop_types2.bool,
  returnFocus: (0, import_prop_types2.oneOfType)([import_prop_types2.bool, import_prop_types2.object, import_prop_types2.func]),
  focusOptions: import_prop_types2.object,
  noFocusGuards: import_prop_types2.bool,
  hasPositiveIndices: import_prop_types2.bool,
  allowTextSelection: import_prop_types2.bool,
  autoFocus: import_prop_types2.bool,
  persistentFocus: import_prop_types2.bool,
  crossFrame: import_prop_types2.bool,
  group: import_prop_types2.string,
  className: import_prop_types2.string,
  whiteList: import_prop_types2.func,
  shards: (0, import_prop_types2.arrayOf)(import_prop_types2.any),
  as: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.func, import_prop_types2.object]),
  lockProps: import_prop_types2.object,
  onActivation: import_prop_types2.func,
  onDeactivation: import_prop_types2.func,
  sideCar: import_prop_types2.any.isRequired
} : {};
FocusLock.defaultProps = {
  children: void 0,
  disabled: false,
  returnFocus: false,
  focusOptions: void 0,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
var Lock_default = FocusLock;

// node_modules/react-focus-lock/dist/es2015/Trap.js
init_react();
var React6 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/react-clientside-effect/lib/index.es.js
init_react();

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_react();

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
init_react();
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/react-clientside-effect/lib/index.es.js
var import_react9 = __toESM(require_react());
function withSideEffect(reducePropsToState2, handleStateChangeOnClient2) {
  if (true) {
    if (typeof reducePropsToState2 !== "function") {
      throw new Error("Expected reducePropsToState to be a function.");
    }
    if (typeof handleStateChangeOnClient2 !== "function") {
      throw new Error("Expected handleStateChangeOnClient to be a function.");
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function wrap(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== "function") {
        throw new Error("Expected WrappedComponent to be a React component.");
      }
    }
    var mountedInstances = [];
    var state;
    function emitChange() {
      state = reducePropsToState2(mountedInstances.map(function(instance) {
        return instance.props;
      }));
      handleStateChangeOnClient2(state);
    }
    var SideEffect = /* @__PURE__ */ function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function peek() {
        return state;
      };
      var _proto = SideEffect2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };
      _proto.render = function render() {
        return /* @__PURE__ */ import_react9.default.createElement(WrappedComponent, this.props);
      };
      return SideEffect2;
    }(import_react9.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}
var index_es_default = withSideEffect;

// node_modules/focus-lock/dist/es2015/index.js
init_react();

// node_modules/focus-lock/dist/es2015/focusInside.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/array.js
init_react();
var toArray = function(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};
var asArray = function(a) {
  return Array.isArray(a) ? a : [a];
};

// node_modules/focus-lock/dist/es2015/utils/is.js
init_react();
var isElementHidden = function(node2) {
  if (node2.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node2, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node2) {
  return node2.parentNode && node2.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? node2.parentNode.host : node2.parentNode;
};
var isTopNode = function(node2) {
  return node2 === document || node2 && node2.nodeType === Node.DOCUMENT_NODE;
};
var isVisibleUncached = function(node2, checkParent) {
  return !node2 || isTopNode(node2) || !isElementHidden(node2) && checkParent(getParentNode(node2));
};
var isVisibleCached = function(visibilityCache, node2) {
  var cached = visibilityCache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isVisibleUncached(node2, isVisibleCached.bind(void 0, visibilityCache));
  visibilityCache.set(node2, result);
  return result;
};
var isAutoFocusAllowedUncached = function(node2, checkParent) {
  return node2 && !isTopNode(node2) ? isAutoFocusAllowed(node2) ? checkParent(getParentNode(node2)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node2) {
  var cached = cache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isAutoFocusAllowedUncached(node2, isAutoFocusAllowedCached.bind(void 0, cache));
  cache.set(node2, result);
  return result;
};
var getDataset = function(node2) {
  return node2.dataset;
};
var isHTMLButtonElement = function(node2) {
  return node2.tagName === "BUTTON";
};
var isHTMLInputElement = function(node2) {
  return node2.tagName === "INPUT";
};
var isRadioElement = function(node2) {
  return isHTMLInputElement(node2) && node2.type === "radio";
};
var notHiddenInput = function(node2) {
  return !((isHTMLInputElement(node2) || isHTMLButtonElement(node2)) && (node2.type === "hidden" || node2.disabled));
};
var isAutoFocusAllowed = function(node2) {
  var attribute = node2.getAttribute(FOCUS_NO_AUTOFOCUS);
  return ![true, "true", ""].includes(attribute);
};
var isGuard = function(node2) {
  var _a;
  return Boolean(node2 && ((_a = getDataset(node2)) === null || _a === void 0 ? void 0 : _a.focusGuard));
};
var isNotAGuard = function(node2) {
  return !isGuard(node2);
};
var isDefined = function(x) {
  return Boolean(x);
};

// node_modules/focus-lock/dist/es2015/utils/tabOrder.js
init_react();
var tabSort = function(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;
  if (tabDiff) {
    if (!a.tabIndex) {
      return 1;
    }
    if (!b.tabIndex) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function(node2, index) {
    return {
      node: node2,
      index,
      tabIndex: keepGuards && node2.tabIndex === -1 ? (node2.dataset || {}).focusGuard ? 0 : -1 : node2.tabIndex
    };
  }).filter(function(data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/tabbables.js
init_react();
var tabbables = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
];

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
  var _a;
  return toArray(((_a = parent.shadowRoot) === null || _a === void 0 ? void 0 : _a.children) || parent.children).reduce(function(acc, child) {
    return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
  }, []);
};
var getFocusables = function(parents, withGuards) {
  return parents.reduce(function(acc, parent) {
    return acc.concat(getFocusablesWithShadowDom(parent, withGuards), parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node2) {
      return node2 === parent;
    }) : []);
  }, []);
};
var getParentAutofocusables = function(parent) {
  var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
  return toArray(parentFocus).map(function(node2) {
    return getFocusables([node2]);
  }).reduce(function(acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
var filterFocusable = function(nodes, visibilityCache) {
  return toArray(nodes).filter(function(node2) {
    return isVisibleCached(visibilityCache, node2);
  }).filter(function(node2) {
    return notHiddenInput(node2);
  });
};
var filterAutoFocusable = function(nodes, cache) {
  if (cache === void 0) {
    cache = /* @__PURE__ */ new Map();
  }
  return toArray(nodes).filter(function(node2) {
    return isAutoFocusAllowedCached(cache, node2);
  });
};
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getAllTabbableNodes = function(topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function(topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains = function(scope, element) {
  return (scope.shadowRoot ? contains(scope.shadowRoot, element) : Object.getPrototypeOf(scope).contains.call(scope, element)) || toArray(scope.children).some(function(child) {
    return contains(child, element);
  });
};

// node_modules/focus-lock/dist/es2015/utils/all-affected.js
init_react();
var filterNested = function(nodes) {
  var contained = /* @__PURE__ */ new Set();
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    for (var j = i + 1; j < l; j += 1) {
      var position = nodes[i].compareDocumentPosition(nodes[j]);
      if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j);
      }
      if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i);
      }
    }
  }
  return nodes.filter(function(_, index) {
    return !contained.has(index);
  });
};
var getTopParent = function(node2) {
  return node2.parentNode ? getTopParent(node2.parentNode) : node2;
};
var getAllAffectedNodes = function(node2) {
  var nodes = asArray(node2);
  return nodes.filter(Boolean).reduce(function(acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]);
    return acc;
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
init_react();
var getNestedShadowActiveElement = function(shadowRoot) {
  return shadowRoot.activeElement ? shadowRoot.activeElement.shadowRoot ? getNestedShadowActiveElement(shadowRoot.activeElement.shadowRoot) : shadowRoot.activeElement : void 0;
};
var getActiveElement = function() {
  return document.activeElement ? document.activeElement.shadowRoot ? getNestedShadowActiveElement(document.activeElement.shadowRoot) : document.activeElement : void 0;
};

// node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame) {
  return frame === document.activeElement;
};
var focusInsideIframe = function(topNode) {
  return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node2) {
    return focusInFrame(node2);
  }));
};
var focusInside = function(topNode) {
  var activeElement = document && getActiveElement();
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).some(function(node2) {
    return contains(node2, activeElement) || focusInsideIframe(node2);
  });
};

// node_modules/focus-lock/dist/es2015/focusIsHidden.js
init_react();
var focusIsHidden = function() {
  var activeElement = document && getActiveElement();
  if (!activeElement) {
    return false;
  }
  return toArray(document.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node2) {
    return contains(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/focusMerge.js
init_react();

// node_modules/focus-lock/dist/es2015/solver.js
init_react();

// node_modules/focus-lock/dist/es2015/utils/correctFocus.js
init_react();
var findSelectedRadio = function(node2, nodes) {
  return nodes.filter(isRadioElement).filter(function(el) {
    return el.name === node2.name;
  }).filter(function(el) {
    return el.checked;
  })[0] || node2;
};
var correctNode = function(node2, nodes) {
  if (isRadioElement(node2) && node2.name) {
    return findSelectedRadio(node2, nodes);
  }
  return node2;
};
var correctNodes = function(nodes) {
  var resultSet = /* @__PURE__ */ new Set();
  nodes.forEach(function(node2) {
    return resultSet.add(correctNode(node2, nodes));
  });
  return nodes.filter(function(node2) {
    return resultSet.has(node2);
  });
};

// node_modules/focus-lock/dist/es2015/utils/firstFocus.js
init_react();
var pickFirstFocus = function(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function(nodes, index) {
  if (nodes.length > 1) {
    return nodes.indexOf(correctNode(nodes[index], nodes));
  }
  return index;
};

// node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
var newFocus = function(innerNodes, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
    return void 0;
  }
  var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var correctedIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
  var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
  var returnFirstNode = pickFocusable(innerNodes, 0);
  var returnLastNode = pickFocusable(innerNodes, cnt - 1);
  if (activeIndex === -1 || lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return void 0;
};

// node_modules/focus-lock/dist/es2015/utils/parenting.js
init_react();
var getParents = function(node2, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node2);
  if (node2.parentNode) {
    getParents(node2.parentNode.host || node2.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function(nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function(entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function(subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || contains(common, topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function(entries, visibilityCache) {
  return entries.reduce(function(acc, node2) {
    return acc.concat(parentAutofocusables(node2, visibilityCache));
  }, []);
};

// node_modules/focus-lock/dist/es2015/focusMerge.js
var findAutoFocused = function(autoFocusables) {
  return function(node2) {
    var _a;
    return node2.autofocus || !!((_a = getDataset(node2)) === null || _a === void 0 ? void 0 : _a.autofocus) || autoFocusables.indexOf(node2) >= 0;
  };
};
var reorderNodes = function(srcNodes, dstNodes) {
  var remap = /* @__PURE__ */ new Map();
  dstNodes.forEach(function(entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function(node2) {
    return remap.get(node2);
  }).filter(isDefined);
};
var getFocusMerge = function(topNode, lastNode) {
  var activeElement = document && getActiveElement();
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var anyFocusable = getAllTabbableNodes(entries, visibilityCache);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a) {
    var node2 = _a.node;
    return isNotAGuard(node2);
  });
  if (!innerElements[0]) {
    innerElements = anyFocusable;
    if (!innerElements[0]) {
      return void 0;
    }
  }
  var outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(function(_a) {
    var node2 = _a.node;
    return node2;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function(_a) {
    var node2 = _a.node;
    return node2;
  });
  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var autoFocusable = filterAutoFocusable(anyFocusable.map(function(_a) {
      var node2 = _a.node;
      return node2;
    })).filter(findAutoFocused(allParentAutofocusables(entries, visibilityCache)));
    return {
      node: autoFocusable && autoFocusable.length ? pickFirstFocus(autoFocusable) : pickFirstFocus(filterAutoFocusable(innerNodes))
    };
  }
  if (newId === void 0) {
    return newId;
  }
  return orderedInnerElements[newId];
};

// node_modules/focus-lock/dist/es2015/focusables.js
init_react();
var getFocusabledIn = function(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var outerNodes = getTabbableNodes([commonParent], visibilityCache, true);
  var innerElements = getTabbableNodes(entries, visibilityCache).filter(function(_a) {
    var node2 = _a.node;
    return isNotAGuard(node2);
  }).map(function(_a) {
    var node2 = _a.node;
    return node2;
  });
  return outerNodes.map(function(_a) {
    var node2 = _a.node, index = _a.index;
    return {
      node: node2,
      index,
      lockItem: innerElements.indexOf(node2) >= 0,
      guard: isGuard(node2)
    };
  });
};

// node_modules/focus-lock/dist/es2015/setFocus.js
init_react();
var focusOn = function(target, focusOptions) {
  if ("focus" in target) {
    target.focus(focusOptions);
  }
  if ("contentWindow" in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};
var guardCount = 0;
var lockDisabled = false;
var setFocus = function(topNode, lastNode, options) {
  if (options === void 0) {
    options = {};
  }
  var focusable = getFocusMerge(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
      lockDisabled = true;
      setTimeout(function() {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node, options.focusOptions);
    guardCount--;
  }
};

// node_modules/focus-lock/dist/es2015/index.js
var es2015_default = setFocus;

// node_modules/react-focus-lock/dist/es2015/util.js
init_react();
function deferAction(action) {
  var _window = window, setImmediate = _window.setImmediate;
  if (typeof setImmediate !== "undefined") {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

// node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody2() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus2() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var defaultWhitelist = function defaultWhitelist2() {
  return true;
};
var focusWhitelisted = function focusWhitelisted2(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal2(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode,
    portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair2(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var extractRef = function extractRef2(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var focusWasOutside = function focusWasOutside2(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost2(check, el, boundary) {
  return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
};
var withinHost = function withinHost2(activeElement, workingArea) {
  return workingArea.some(function(area) {
    return checkInHost(activeElement, area, area);
  });
};
var activateTrap = function activateTrap2() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = es2015_default(workingArea, lastActiveFocus, {
                focusOptions
              });
              lastPortaledElement = {};
            }
          }
          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }
      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = getFocusabledIn(workingArea);
        var focusedIndex = allNodes.map(function(_ref2) {
          var node2 = _ref2.node;
          return node2;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function(_ref2) {
            var guard = _ref2.guard, node2 = _ref2.node;
            return guard && node2.dataset.focusAutoGuard;
          }).forEach(function(_ref3) {
            var node2 = _ref3.node;
            return node2.removeAttribute("tabIndex");
          });
          autoGuard(focusedIndex, allNodes.length, 1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap2(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur2() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus2(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher2() {
  return null;
};
var FocusTrap = function FocusTrap2(_ref4) {
  var children = _ref4.children;
  return /* @__PURE__ */ React6.createElement("div", {
    onBlur,
    onFocus
  }, children);
};
FocusTrap.propTypes = true ? {
  children: import_prop_types3.default.node.isRequired
} : {};
var onWindowBlur = function onWindowBlur2() {
  focusWasOutsideWindow = "just";
  setTimeout(function() {
    focusWasOutsideWindow = "meanwhile";
  }, 0);
};
var attachHandler = function attachHandler2() {
  document.addEventListener("focusin", onTrap);
  document.addEventListener("focusout", onBlur);
  window.addEventListener("blur", onWindowBlur);
};
var detachHandler = function detachHandler2() {
  document.removeEventListener("focusin", onTrap);
  document.removeEventListener("focusout", onBlur);
  window.removeEventListener("blur", onWindowBlur);
};
function reducePropsToState(propsList) {
  return propsList.filter(function(_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function(_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }
    activateTrap(true);
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
  return cb({
    moveFocusInside: es2015_default,
    focusInside
  });
});
var Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

// node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = /* @__PURE__ */ React7.forwardRef(function FocusLockUICombination(props, ref) {
  return /* @__PURE__ */ React7.createElement(Lock_default, _extends({
    sideCar: Trap_default,
    ref
  }, props));
});
var _ref = Lock_default.propTypes || {};
var sideCar = _ref.sideCar;
var propTypes = _objectWithoutPropertiesLoose2(_ref, ["sideCar"]);
FocusLockCombination.propTypes = true ? propTypes : {};
var Combination_default = FocusLockCombination;

// node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default2 = Combination_default;

// node_modules/react-remove-scroll/dist/es2015/index.js
init_react();

// node_modules/react-remove-scroll/dist/es2015/Combination.js
init_react();
var React12 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
init_react();
var React8 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
init_react();
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll/dist/es2015/medium.js
init_react();
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React8.forwardRef(function(props, parentRef) {
  var ref = React8.useRef(null);
  var _a = React8.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar2 = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar2;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React8.createElement(React8.Fragment, null, enabled && React8.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }), forwardProps ? React8.cloneElement(React8.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React8.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children));
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
init_react();

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
init_react();
var React11 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/index.js
init_react();

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
init_react();
var React10 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/index.js
init_react();

// node_modules/react-style-singleton/dist/es2015/component.js
init_react();

// node_modules/react-style-singleton/dist/es2015/hook.js
init_react();
var React9 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/singleton.js
init_react();

// node_modules/get-nonce/dist/es2015/index.js
init_react();
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React9.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
init_react();
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  if (true) {
    if (cs.overflowY === "hidden") {
      console.error("react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body");
    }
  }
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React10.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React10.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
init_react();
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
init_react();
var elementCouldBeVScrolled = function(node2) {
  var styles = window.getComputedStyle(node2);
  return styles.overflowY !== "hidden" && !(styles.overflowY === styles.overflowX && styles.overflowY === "visible");
};
var elementCouldBeHScrolled = function(node2) {
  var styles = window.getComputedStyle(node2);
  return styles.overflowX !== "hidden" && !(styles.overflowY === styles.overflowX && styles.overflowX === "visible");
};
var locationCouldBeScrolled = function(axis, node2) {
  var current = node2;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node2) {
  return axis === "v" ? elementCouldBeVScrolled(node2) : elementCouldBeHScrolled(node2);
};
var getScrollVariables = function(axis, node2) {
  return axis === "v" ? getVScrollVariables(node2) : getHScrollVariables(node2);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef3 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React11.useRef([]);
  var touchStartRef = React11.useRef([0, 0]);
  var activeAxis = React11.useRef();
  var id = React11.useState(idCounter++)[0];
  var Style2 = React11.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React11.useRef(props);
  React11.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React11.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef3), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React11.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React11.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef3).filter(Boolean).filter(function(node2) {
        return node2.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React11.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React11.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React11.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React11.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React11.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React11.createElement(React11.Fragment, null, inert ? React11.createElement(Style2, { styles: generateStyle(id) }) : null, removeScrollBar ? React11.createElement(RemoveScrollBar, { gapMode: "margin" }) : null);
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React12.forwardRef(function(props, ref) {
  return React12.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/@reach/dialog/dist/reach-dialog.esm.js
var import_prop_types4 = __toESM(require_prop_types());
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded2 = ["as", "isOpen"];
var _excluded22 = ["allowPinchZoom", "as", "dangerouslyBypassFocusLock", "dangerouslyBypassScrollLock", "initialFocusRef", "onClick", "onDismiss", "onKeyDown", "onMouseDown", "unstable_lockFocusAcrossFrames"];
var _excluded3 = ["as", "onClick", "onKeyDown"];
var _excluded4 = ["allowPinchZoom", "initialFocusRef", "isOpen", "onDismiss"];
var overlayPropTypes = {
  allowPinchZoom: import_prop_types4.default.bool,
  dangerouslyBypassFocusLock: import_prop_types4.default.bool,
  dangerouslyBypassScrollLock: import_prop_types4.default.bool,
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  onDismiss: import_prop_types4.default.func
};
var DialogOverlay = /* @__PURE__ */ (0, import_react10.forwardRef)(function DialogOverlay2(_ref2, forwardedRef) {
  var _ref$as = _ref2.as, Comp = _ref$as === void 0 ? "div" : _ref$as, _ref$isOpen = _ref2.isOpen, isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen, props = _objectWithoutPropertiesLoose3(_ref2, _excluded2);
  useCheckStyles("dialog");
  (0, import_react10.useEffect)(function() {
    if (isOpen) {
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(function() {
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return isOpen ? /* @__PURE__ */ (0, import_react10.createElement)(Portal, {
    "data-reach-dialog-wrapper": ""
  }, /* @__PURE__ */ (0, import_react10.createElement)(DialogInner, _extends2({
    ref: forwardedRef,
    as: Comp
  }, props))) : null;
});
if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /* @__PURE__ */ _extends2({}, overlayPropTypes, {
    isOpen: import_prop_types4.default.bool
  });
}
var DialogInner = /* @__PURE__ */ (0, import_react10.forwardRef)(function DialogInner2(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom, _ref2$as = _ref2.as, Comp = _ref2$as === void 0 ? "div" : _ref2$as, _ref2$dangerouslyBypa = _ref2.dangerouslyBypassFocusLock, dangerouslyBypassFocusLock = _ref2$dangerouslyBypa === void 0 ? false : _ref2$dangerouslyBypa, _ref2$dangerouslyBypa2 = _ref2.dangerouslyBypassScrollLock, dangerouslyBypassScrollLock = _ref2$dangerouslyBypa2 === void 0 ? false : _ref2$dangerouslyBypa2, initialFocusRef2 = _ref2.initialFocusRef, onClick = _ref2.onClick, _ref2$onDismiss = _ref2.onDismiss, onDismiss = _ref2$onDismiss === void 0 ? noop : _ref2$onDismiss, onKeyDown = _ref2.onKeyDown, onMouseDown = _ref2.onMouseDown, unstable_lockFocusAcrossFrames = _ref2.unstable_lockFocusAcrossFrames, props = _objectWithoutPropertiesLoose3(_ref2, _excluded22);
  var lockFocusAcrossFramesIsDefined = unstable_lockFocusAcrossFrames !== void 0;
  if (true) {
    (0, import_react10.useEffect)(function() {
      if (lockFocusAcrossFramesIsDefined) {
        console.warn("The unstable_lockFocusAcrossFrames in @reach/dialog is deprecated. It will be removed in the next minor release.");
      }
    }, [lockFocusAcrossFramesIsDefined]);
  }
  var mouseDownTarget = (0, import_react10.useRef)(null);
  var overlayNode = (0, import_react10.useRef)(null);
  var ref = useComposedRefs(overlayNode, forwardedRef);
  var activateFocusLock = (0, import_react10.useCallback)(function() {
    if (initialFocusRef2 && initialFocusRef2.current) {
      initialFocusRef2.current.focus();
    }
  }, [initialFocusRef2]);
  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }
  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }
  (0, import_react10.useEffect)(function() {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void 0;
  }, []);
  return /* @__PURE__ */ (0, import_react10.createElement)(es2015_default2, {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    disabled: dangerouslyBypassFocusLock,
    crossFrame: unstable_lockFocusAcrossFrames != null ? unstable_lockFocusAcrossFrames : true
  }, /* @__PURE__ */ (0, import_react10.createElement)(Combination_default2, {
    allowPinchZoom,
    enabled: !dangerouslyBypassScrollLock
  }, /* @__PURE__ */ (0, import_react10.createElement)(Comp, _extends2({}, props, {
    ref,
    "data-reach-dialog-overlay": "",
    onClick: composeEventHandlers(onClick, handleClick),
    onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown)
  }))));
});
if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /* @__PURE__ */ _extends2({}, overlayPropTypes);
}
var DialogContent = /* @__PURE__ */ (0, import_react10.forwardRef)(function DialogContent2(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as, Comp = _ref3$as === void 0 ? "div" : _ref3$as, onClick = _ref3.onClick;
  _ref3.onKeyDown;
  var props = _objectWithoutPropertiesLoose3(_ref3, _excluded3);
  return /* @__PURE__ */ (0, import_react10.createElement)(Comp, _extends2({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: composeEventHandlers(onClick, function(event) {
      event.stopPropagation();
    })
  }));
});
if (true) {
  DialogContent.displayName = "DialogContent";
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}
var Dialog = /* @__PURE__ */ (0, import_react10.forwardRef)(function Dialog2(_ref4, forwardedRef) {
  var _ref4$allowPinchZoom = _ref4.allowPinchZoom, allowPinchZoom = _ref4$allowPinchZoom === void 0 ? false : _ref4$allowPinchZoom, initialFocusRef2 = _ref4.initialFocusRef, isOpen = _ref4.isOpen, _ref4$onDismiss = _ref4.onDismiss, onDismiss = _ref4$onDismiss === void 0 ? noop : _ref4$onDismiss, props = _objectWithoutPropertiesLoose3(_ref4, _excluded4);
  return /* @__PURE__ */ (0, import_react10.createElement)(DialogOverlay, {
    allowPinchZoom,
    initialFocusRef: initialFocusRef2,
    isOpen,
    onDismiss
  }, /* @__PURE__ */ (0, import_react10.createElement)(DialogContent, _extends2({
    ref: forwardedRef
  }, props)));
});
if (true) {
  Dialog.displayName = "Dialog";
  Dialog.propTypes = {
    isOpen: import_prop_types4.default.bool,
    onDismiss: import_prop_types4.default.func,
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}
function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = getOwnerDocument(dialogNode);
  if (!dialogNode) {
    if (true) {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }
    return noop;
  }
  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function(node2) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;
    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) == null ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) == null ? void 0 : _dialogNode$parentNod2.parentNode;
    if (node2 === portalNode) {
      return;
    }
    var attr = node2.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";
    if (alreadyHidden) {
      return;
    }
    originalValues.push(attr);
    rootNodes.push(node2);
    node2.setAttribute("aria-hidden", "true");
  });
  return function() {
    rootNodes.forEach(function(node2, index) {
      var originalValue = originalValues[index];
      if (originalValue === null) {
        node2.removeAttribute("aria-hidden");
      } else {
        node2.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}
function ariaLabelType(props, propName, compName, location, propFullName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";
  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }
  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  } else if (props[propName] != null && !isString(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `string`, received `" + (Array.isArray(propFullName) ? "array" : typeof propFullName) + "`.");
  }
  return null;
}

// node_modules/react-icons/fi/index.esm.js
init_react();

// node_modules/react-icons/lib/esm/index.js
init_react();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_react();

// node_modules/react-icons/lib/esm/iconBase.js
init_react();
var import_react12 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_react();
var import_react11 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react11.default.createContext && import_react11.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node2, i) {
    return import_react12.default.createElement(node2.tag, __assign2({
      key: i
    }, node2.attr), Tree2Element(node2.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react12.default.createElement(IconBase, __assign2({
      attr: __assign2({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest2(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react12.default.createElement("svg", __assign2({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign2(__assign2({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react12.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react12.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fi/index.esm.js
function FiPlusCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "10" } }, { "tag": "line", "attr": { "x1": "12", "y1": "8", "x2": "12", "y2": "16" } }, { "tag": "line", "attr": { "x1": "8", "y1": "12", "x2": "16", "y2": "12" } }] })(props);
}

// node_modules/react-icons/io5/index.esm.js
init_react();
function IoClose(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" } }] })(props);
}

// app/services/electric-ladyland/components/expandable-list.tsx
function ExpandableList({
  fieldBlueprint,
  fieldContext
}) {
  const submit = useSubmit();
  const [showDialog, setShowDialog] = (0, import_react14.useState)(false);
  const [selectedIndex, setSelectedIndex] = (0, import_react14.useState)(void 0);
  const [selectedAction, setSelectedAction] = (0, import_react14.useState)("");
  const [listItems, setListItems] = (0, import_react14.useState)([]);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  (0, import_react14.useEffect)(() => {
    console.log("context changed");
    setListItems(fieldContext == null ? void 0 : fieldContext.value);
    console.log({ listItems });
  }, [fieldContext, listItems]);
  let { listItemStructure } = fieldBlueprint;
  let fieldsToShowInTable = {};
  listItemStructure.forEach((field) => {
    if (field.showOnMobileTable) {
      fieldsToShowInTable[field.name] = field;
    }
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "el-field-item"
  }, displayFieldLabelDescriptionError({
    fieldBlueprint
  }), /* @__PURE__ */ React.createElement("button", {
    className: "expand-click-target el-form-button el-form-add-item-button",
    onClick: (e) => {
      e.preventDefault();
      setSelectedIndex(void 0);
      setSelectedAction("");
      open();
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "el-form-left-icon"
  }, /* @__PURE__ */ React.createElement(FiPlusCircle, null)), fieldBlueprint.addItemLabel), listItems.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "list-items-table-wrapper"
  }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", {
    className: "lit-row"
  }, listItemStructure.map((nestedField) => {
    if (Object.keys(fieldsToShowInTable).includes(nestedField.name)) {
      return /* @__PURE__ */ React.createElement("th", {
        className: "lit-cell",
        "data-flex": nestedField.tableFlex,
        "data-align-text": nestedField.alignText,
        key: nestedField.name
      }, nestedField.label);
    } else {
      return null;
    }
  }), /* @__PURE__ */ React.createElement("th", {
    className: "lit-cell",
    "data-flex": 3
  }, "\xA0"), /* @__PURE__ */ React.createElement("th", {
    className: "lit-cell",
    "data-flex": 3
  }, "\xA0"))), listItems.map((item, index) => {
    return /* @__PURE__ */ React.createElement("tr", {
      className: "lit-row",
      key: index
    }, Object.keys(fieldsToShowInTable).map((fieldToShow, index2) => {
      var _a;
      console.log({ index: index2 });
      let cellFlexValue;
      let alignTextValue;
      listItemStructure.forEach((itemStructure) => {
        if (itemStructure.name === fieldToShow) {
          cellFlexValue = itemStructure.tableFlex;
          alignTextValue = itemStructure.alignText;
        }
      });
      console.log({ cellFlexValue });
      return /* @__PURE__ */ React.createElement("th", {
        className: "lit-cell",
        "data-flex": cellFlexValue,
        "data-align-text": alignTextValue,
        key: `${item[fieldToShow]}-${index2}`
      }, (_a = item[fieldToShow]) == null ? void 0 : _a.value);
    }), /* @__PURE__ */ React.createElement("th", {
      className: "lit-cell",
      "data-align-text": "right",
      "data-flex": 3
    }, /* @__PURE__ */ React.createElement("button", {
      className: "edit-item-button expand-click-target",
      "data-test": `edit-${index}`,
      onClick: (e) => {
        e.preventDefault();
        setSelectedIndex(index);
        setSelectedAction("edit-item");
        open();
      }
    }, "Edit")), /* @__PURE__ */ React.createElement("th", {
      className: "lit-cell",
      "data-align-text": "right",
      "data-flex": 3
    }, /* @__PURE__ */ React.createElement("button", {
      className: "delete-item-button expand-click-target",
      "data-test": `delete-${index}`,
      onClick: (e) => {
        e.preventDefault();
        setSelectedIndex(index);
        setSelectedAction("delete-item");
        open();
      }
    }, "Delete")));
  })))), /* @__PURE__ */ React.createElement(DialogOverlay, {
    isOpen: showDialog,
    onDismiss: close
  }, /* @__PURE__ */ React.createElement(DialogContent, {
    "aria-label": fieldBlueprint.addOrEditItemModalLabel
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-content-wrapper"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "close-modal-button expand-click-target",
    onClick: close
  }, /* @__PURE__ */ React.createElement("span", {
    className: "close-icon-wrapper"
  }, /* @__PURE__ */ React.createElement(IoClose, {
    role: "img"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Close Modal")), selectedAction === "delete-item" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold text-2xl text-danger-7"
  }, "Delete Item"), /* @__PURE__ */ React.createElement("span", {
    className: "block h-3"
  }), /* @__PURE__ */ React.createElement("p", null, "Are you sure you want to delete item", " ", listItems.map((item, index) => {
    var _a;
    if (index === selectedIndex) {
      console.log({ item: item[Object.keys(item)[0]] });
      return (_a = listItems[selectedIndex][Object.keys(listItems[selectedIndex])[0]]) == null ? void 0 : _a.value;
    } else {
      return null;
    }
  })), /* @__PURE__ */ React.createElement("span", {
    className: "block h-6"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-primary-05 text-primary-7 font-bold py-2 px-4 rounded-md mr-8 border-none expand-click-target",
    "data-test": "cancel",
    onClick: () => {
      close();
    }
  }, "Cancel"), /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    onSubmitCapture: (event) => {
      submit(event.currentTarget);
      close();
    }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "operation-type",
    value: "delete-list-item"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "index-to-delete",
    value: selectedIndex
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-danger-05 text-danger-9 font-bold outline-none py-2 px-4 rounded-md",
    "data-test": "confirm-delete",
    type: "submit"
  }, "Confirm Delete")))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "modal-add-item-label"
  }, typeof selectedIndex === "number" ? fieldBlueprint.editItemLabel : fieldBlueprint.addItemLabel), /* @__PURE__ */ React.createElement("span", {
    className: "block h-8"
  }), /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
    method: "post",
    onSubmitCapture: (event) => {
      submit(event.currentTarget);
      close();
    }
  }, selectedAction === "edit-item" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "operation-type",
    value: "edit-list-item"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "index-to-change",
    value: selectedIndex
  })) : /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "operation-type",
    value: "add-item-to-list"
  }), listItemStructure.map((nestedField) => {
    return /* @__PURE__ */ React.createElement(FormField, {
      context: typeof selectedIndex === "number" ? fieldContext == null ? void 0 : fieldContext.value[selectedIndex] : fieldContext,
      key: nestedField.name,
      field: nestedField
    });
  }), /* @__PURE__ */ React.createElement("span", {
    className: "block h-4"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "el-form-button el-form-add-item-button expand-click-target",
    type: "submit"
  }, "Confirm")))))));
}

// app/services/electric-ladyland/components/stateful-radio.tsx
init_react();
var import_react15 = __toESM(require_react());
function StatefulRadio({
  fieldBlueprint,
  context
}) {
  let selectedIndex = 0;
  fieldBlueprint.options.forEach((option, index) => {
    var _a, _b;
    let defaultValue = (_b = (_a = context[fieldBlueprint.name]) == null ? void 0 : _a.value) != null ? _b : fieldBlueprint.initialValue;
    if (defaultValue === option) {
      selectedIndex = index;
    }
  });
  console.log({ context });
  const [selectedValue, setSelectedValue] = (0, import_react15.useState)(selectedIndex);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, displayFieldLabelDescriptionError({
    fieldBlueprint
  }), /* @__PURE__ */ React.createElement("div", {
    className: "el-field-item"
  }, fieldBlueprint.options.map((radioValue, index) => {
    const label = createFieldLabel(radioValue);
    if (index === selectedValue) {
      return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
        key: radioValue
      }, /* @__PURE__ */ React.createElement("input", {
        "data-test": `${fieldBlueprint.name}-${radioValue}`,
        type: "radio",
        id: `${fieldBlueprint.name}-${radioValue}`,
        name: fieldBlueprint.name,
        value: radioValue,
        onChange: () => {
          setSelectedValue(index);
        },
        checked: true,
        autoComplete: "off"
      }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
        htmlFor: `${fieldBlueprint.name}-${radioValue}`
      }, label));
    } else {
      return /* @__PURE__ */ React.createElement(RadioOrCheckboxWrapper, {
        key: radioValue
      }, /* @__PURE__ */ React.createElement("input", {
        "data-test": `${fieldBlueprint.name}-${radioValue}`,
        type: "radio",
        id: `${fieldBlueprint.name}-${radioValue}`,
        name: fieldBlueprint.name,
        value: radioValue,
        onChange: () => {
          setSelectedValue(index);
        },
        autoComplete: "off"
      }), /* @__PURE__ */ React.createElement(RadioOrCheckboxLabel, {
        htmlFor: `${fieldBlueprint.name}-${radioValue}`
      }, label));
    }
  })), fieldBlueprint.dependentChildren[selectedValue].map((nestedField) => {
    if (nestedField) {
      return /* @__PURE__ */ React.createElement(FormField, {
        context,
        key: nestedField.name,
        field: nestedField
      });
    }
    return null;
  }));
}

// app/services/electric-ladyland/form-field.tsx
FormField.styles = styles_default;
function FormField({
  field,
  context
}) {
  if (field.type === "hidden") {
    return /* @__PURE__ */ React.createElement(HiddenField, {
      fieldContext: context[field.name],
      fieldBlueprint: field
    });
  }
  if (field.type === "text" || field.type === "textarea" || field.type === "password" || field.type === "email") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(TextInput, {
      fieldBlueprint: field,
      fieldContext: context[field.name]
    }));
  }
  if (field.type === "radio") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(Radio, {
      fieldBlueprint: field,
      fieldContext: context[field.name]
    }));
  }
  if (field.type === "checkbox-group") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(CheckboxGroup, {
      fieldBlueprint: field,
      context
    }));
  }
  if (field.type === "expandable-list") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(ExpandableList, {
      fieldBlueprint: field,
      fieldContext: context[field.name]
    }));
  }
  if (field.type === "stateful-radio") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "el-field-item"
    }, /* @__PURE__ */ React.createElement(StatefulRadio, {
      fieldBlueprint: field,
      context
    }));
  }
  return null;
}

// app/services/electric-ladyland/form-wrapper.tsx
init_react();

// node_modules/react-icons/fa/index.esm.js
init_react();
function FaChevronLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" } }] })(props);
}
function FaChevronRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" } }] })(props);
}

// app/services/electric-ladyland/form-wrapper.tsx
function MultipartForm({
  context,
  formStructure,
  action,
  reloadDocument = false
}) {
  console.log({ formStructure });
  return /* @__PURE__ */ React.createElement("div", {
    className: "el-form-wrapper"
  }, /* @__PURE__ */ React.createElement(FormWrapper, {
    reloadDocument,
    action
  }, /* @__PURE__ */ React.createElement(HoneypotField, null), formStructure.map((field) => {
    return /* @__PURE__ */ React.createElement(FormField, {
      field,
      context,
      key: field.name
    });
  }), context.dataHandlerErrorMessage && context.formStage === "end" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "font-display text-lg font-semibold text-danger-5"
  }, context.dataHandlerErrorMessage), /* @__PURE__ */ React.createElement("span", {
    className: "block h-6"
  })) : null, /* @__PURE__ */ React.createElement("div", {
    className: "forward-button-wrapper mt-10 flex w-full"
  }, (context.formStage === "beginning" || context.formStage === "middle") && /* @__PURE__ */ React.createElement(FormButton, {
    dataTest: "next",
    className: "el-form-button-forward",
    name: "submit-type",
    type: "submit",
    value: "next"
  }, context.nextButtonText, /* @__PURE__ */ React.createElement("span", {
    className: "el-form-right-icon"
  }, /* @__PURE__ */ React.createElement(FaChevronRight, {
    "aria-hidden": "true"
  }))), context.formStage === "end" && /* @__PURE__ */ React.createElement(FormButton, {
    dataTest: "submit",
    className: "el-form-button-forward",
    name: "submit-type",
    type: "submit",
    value: "submit"
  }, "Submit", /* @__PURE__ */ React.createElement("span", {
    className: "el-form-right-icon"
  }, /* @__PURE__ */ React.createElement(FaChevronRight, {
    "aria-hidden": "true"
  }))))), (context.formStage === "middle" || context.formStage === "end") && /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(FormButton, {
    dataTest: "back",
    className: "el-form-button-back",
    name: "submit-type",
    type: "submit",
    value: "back"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "el-form-left-icon"
  }, /* @__PURE__ */ React.createElement(FaChevronLeft, {
    "aria-hidden": "true"
  })), context.backButtonText)));
}
function FormWrapper({
  children,
  action,
  reloadDocument = false
}) {
  if (reloadDocument) {
    return /* @__PURE__ */ React.createElement(Form, {
      reloadDocument: true,
      action,
      method: "post"
    }, children);
  }
  return /* @__PURE__ */ React.createElement(Form, {
    action,
    method: "post"
  }, children);
}
function HoneypotField() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    className: "visually-hidden",
    type: "text",
    name: "given-name",
    id: "given-name"
  }), /* @__PURE__ */ React.createElement("label", {
    className: "visually-hidden",
    htmlFor: "given-name"
  }, "Given Name"));
}
function FormButton({
  children,
  name,
  className,
  value,
  type = "submit",
  dataTest
}) {
  return /* @__PURE__ */ React.createElement("button", {
    "data-test": dataTest,
    className: `el-form-button${className ? " " + className : ""}`,
    name,
    type,
    value
  }, children);
}

// app/routes/multi-item-form.tsx
var metaTitle = "Multi-Item Form";
var metaDescription = "TODO - Fill in description";
var meta = () => {
  return {
    title: metaTitle,
    description: metaDescription
  };
};
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: FormField.styles
    }
  ];
};
function MultiItemForm() {
  let data = useLoaderData();
  let context = data == null ? void 0 : data.context;
  let currentStepBlueprint = data == null ? void 0 : data.currentStepBlueprint;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "content-wrapper form-content-wrapper"
  }, /* @__PURE__ */ React.createElement(MultipartForm, {
    context,
    formStructure: currentStepBlueprint
  })));
}
export {
  MultiItemForm as default,
  links,
  meta
};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/multi-item-form-RDUHSNEK.js.map
