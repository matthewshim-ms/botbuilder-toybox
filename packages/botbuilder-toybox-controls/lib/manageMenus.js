"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module botbuilder-toybox
 */
/** Licensed under the MIT License. */
const botbuilder_1 = require("botbuilder");
const menuManager_1 = require("./menuManager");
class ManageMenus {
    constructor(menuState, ...menus) {
        this.menuState = menuState;
        this.menus = {};
        // Ensure all menu names unique and only one default menu exists
        let defaultMenu = '';
        menus.forEach((m) => {
            if (m.settings.isDefaultMenu) {
                if (defaultMenu.length > 0) {
                    throw new Error(`ManageMenus: can't add default menu named '${m.name}' because a default menu name '${defaultMenu}' has already been added.`);
                }
                defaultMenu = m.name;
            }
            if (this.menus.hasOwnProperty(m.name)) {
                throw new Error(`ManageMenus: duplicate menu named '${m.name}' detected.`);
            }
            this.menus[m.name] = m;
        });
    }
    /** @private */
    onTurn(context, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extend context object with menu manager
            const manager = new menuManager_1.MenuManager(context, this.menuState, this.menus);
            Object.defineProperty(context, 'menus', {
                get() { return manager; }
            });
            // Listen for outgoing messages to augment with suggested actions
            context.onSendActivities((context, activities, next) => __awaiter(this, void 0, void 0, function* () {
                // Find last message being sent
                let lastMsg;
                activities.forEach((a) => {
                    if (a.type === botbuilder_1.ActivityTypes.Message) {
                        lastMsg = a;
                    }
                });
                // Append actions to last message
                if (lastMsg) {
                    yield manager.appendSuggestedActions(lastMsg);
                }
                // Deliver activities
                return yield next();
            }));
            // Recognize any invoked menu commands
            if (context.activity.type === botbuilder_1.ActivityTypes.Message) {
                yield manager.recognizeUtterance(next);
            }
            else {
                yield next();
            }
        });
    }
}
exports.ManageMenus = ManageMenus;
//# sourceMappingURL=manageMenus.js.map