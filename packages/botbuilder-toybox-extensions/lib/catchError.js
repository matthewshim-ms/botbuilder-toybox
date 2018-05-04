"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * :package: **botbuilder-toybox-extensions**
 *
 * This middleware gives you a centralized place to catch errors that either the bot or another
 * piece of middleware throws. The middleware will only invoke your handler once per conversation
 * so while you may want to use other middleware to log errors that occur this provides a perfect
 * place to notify the user that an error occurred:
 *
 * ```JavaScript
 * const { CatchError } from 'botbuilder-toybox-extensions';
 *
 * const conversationState = new ConversationState(new MemoryStorage());
 *
 * adapter.use(new CatchError(async (context, error) => {
 *     conversationState.clear(context);
 *     await context.sendActivity(`I'm sorry... Something went wrong.`);
 * }));
 * ```
 *
 * The example catches the error and reports it to the user then clears the conversation state to
 * prevent the user from getting trapped within a conversational loop. This protects against cases
 * where your bot is throwing errors because of some bad state its in.
 */
class CatchError {
    /**
     * Creates a new CatchError instance.
     * @param handler Function called should an error be raised by the bot or another piece of middleware.
     */
    constructor(handler) {
        this.handler = handler;
    }
    onTurn(context, next) {
        return next().catch((err) => {
            return Promise.resolve(this.handler(context, err));
        });
    }
}
exports.CatchError = CatchError;
//# sourceMappingURL=catchError.js.map