import {
  __commonJS
} from "./chunk-WKYGNSYM.js";

// node_modules/@intercom/messenger-js-sdk/dist/types.js
var require_types = __commonJS({
  "node_modules/@intercom/messenger-js-sdk/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Regions = void 0;
    var Regions;
    (function(Regions2) {
      Regions2["US"] = "us";
      Regions2["EU"] = "eu";
      Regions2["AP"] = "ap";
    })(Regions || (exports.Regions = Regions = {}));
  }
});

// node_modules/@intercom/messenger-js-sdk/dist/constants.js
var require_constants = __commonJS({
  "node_modules/@intercom/messenger-js-sdk/dist/constants.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.regionAPIs = void 0;
    var IntercomTypes = __importStar(require_types());
    exports.regionAPIs = {
      [IntercomTypes.Regions.US]: "https://api-iam.intercom.io",
      [IntercomTypes.Regions.EU]: "https://api-iam.eu.intercom.io",
      [IntercomTypes.Regions.AP]: "https://api-iam.au.intercom.io"
    };
  }
});

// node_modules/@intercom/messenger-js-sdk/dist/instance-manager.js
var require_instance_manager = __commonJS({
  "node_modules/@intercom/messenger-js-sdk/dist/instance-manager.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getIntercomRef = exports.ref = exports.init = void 0;
    var init = () => __awaiter(void 0, void 0, void 0, function* () {
      var w = window;
      var ic = w.Intercom;
      if (w.intercomSettings) {
        w.intercomSettings.installation_type = "npm-package";
      }
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function() {
          var _a, _b;
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/" + ((_a = window.intercomSettings) === null || _a === void 0 ? void 0 : _a.app_id);
          var x = d.getElementsByTagName("script")[0];
          (_b = x.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(s, x);
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    });
    exports.init = init;
    exports.ref = void 0;
    var getIntercomRef = () => {
      if (typeof window !== "undefined" && !exports.ref) {
        exports.ref = window.Intercom;
      }
      if (!exports.ref || typeof window === "undefined") {
        console.warn("Intercom not booted or setup incomplete.");
        if (typeof window === "undefined") {
          console.warn("Are you sure you are running on client-side?");
        }
        return () => {
        };
      }
      return exports.ref;
    };
    exports.getIntercomRef = getIntercomRef;
  }
});

// node_modules/@intercom/messenger-js-sdk/dist/index.js
var require_dist = __commonJS({
  "node_modules/@intercom/messenger-js-sdk/dist/index.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onUserEmailSupplied = exports.showConversation = exports.showTicket = exports.startChecklist = exports.startSurvey = exports.showNews = exports.showArticle = exports.startTour = exports.getVisitorId = exports.trackEvent = exports.onUnreadCountChange = exports.onShow = exports.onHide = exports.showNewMessage = exports.showMessages = exports.showSpace = exports.show = exports.hide = exports.update = exports.shutdown = exports.boot = void 0;
    var IntercomTypes = __importStar(require_types());
    var constants_1 = require_constants();
    var instance_manager_1 = require_instance_manager();
    var Intercom = (_a) => {
      var { region = IntercomTypes.Regions.US } = _a, args = __rest(_a, ["region"]);
      if (typeof window !== "undefined" && !instance_manager_1.ref) {
        window.intercomSettings = Object.assign(Object.assign({}, args), { api_base: region && constants_1.regionAPIs[region] || constants_1.regionAPIs.us });
        (0, instance_manager_1.init)();
      }
    };
    exports.default = Intercom;
    var boot = (arg) => {
      (0, instance_manager_1.getIntercomRef)()("boot", arg);
    };
    exports.boot = boot;
    var shutdown = () => {
      (0, instance_manager_1.getIntercomRef)()("shutdown");
    };
    exports.shutdown = shutdown;
    var update = (arg) => {
      (0, instance_manager_1.getIntercomRef)()("update", arg);
    };
    exports.update = update;
    var hide = () => {
      (0, instance_manager_1.getIntercomRef)()("hide");
    };
    exports.hide = hide;
    var show = () => {
      (0, instance_manager_1.getIntercomRef)()("show");
    };
    exports.show = show;
    var showSpace = (spaceName) => {
      (0, instance_manager_1.getIntercomRef)()("showSpace", spaceName);
    };
    exports.showSpace = showSpace;
    var showMessages = () => {
      (0, instance_manager_1.getIntercomRef)()("showMessages");
    };
    exports.showMessages = showMessages;
    var showNewMessage = (prePopulatedContent) => {
      (0, instance_manager_1.getIntercomRef)()("showNewMessage", prePopulatedContent);
    };
    exports.showNewMessage = showNewMessage;
    var onHide = (callback) => {
      (0, instance_manager_1.getIntercomRef)()("onHide", callback);
    };
    exports.onHide = onHide;
    var onShow = (callback) => {
      (0, instance_manager_1.getIntercomRef)()("onShow", callback);
    };
    exports.onShow = onShow;
    var onUnreadCountChange = (callback) => {
      (0, instance_manager_1.getIntercomRef)()("onUnreadCountChange", callback);
    };
    exports.onUnreadCountChange = onUnreadCountChange;
    var trackEvent = (...args) => {
      (0, instance_manager_1.getIntercomRef)()("trackEvent", ...args);
    };
    exports.trackEvent = trackEvent;
    var getVisitorId = () => {
      (0, instance_manager_1.getIntercomRef)()("getVisitorId");
    };
    exports.getVisitorId = getVisitorId;
    var startTour = (tourId) => {
      (0, instance_manager_1.getIntercomRef)()("startTour", tourId);
    };
    exports.startTour = startTour;
    var showArticle = (articleId) => {
      (0, instance_manager_1.getIntercomRef)()("showArticle", articleId);
    };
    exports.showArticle = showArticle;
    var showNews = (newsItemId) => {
      (0, instance_manager_1.getIntercomRef)()("showNews", newsItemId);
    };
    exports.showNews = showNews;
    var startSurvey = (surveyId) => {
      (0, instance_manager_1.getIntercomRef)()("startSurvey", surveyId);
    };
    exports.startSurvey = startSurvey;
    var startChecklist = (checklistId) => {
      (0, instance_manager_1.getIntercomRef)()("startChecklist", checklistId);
    };
    exports.startChecklist = startChecklist;
    var showTicket = (ticketId) => {
      (0, instance_manager_1.getIntercomRef)()("showTicket", ticketId);
    };
    exports.showTicket = showTicket;
    var showConversation = (conversationId) => {
      (0, instance_manager_1.getIntercomRef)()("showConversation", conversationId);
    };
    exports.showConversation = showConversation;
    var onUserEmailSupplied = (callback) => {
      (0, instance_manager_1.getIntercomRef)()("onUserEmailSupplied", callback);
    };
    exports.onUserEmailSupplied = onUserEmailSupplied;
  }
});
export default require_dist();
//# sourceMappingURL=@intercom_messenger-js-sdk.js.map
