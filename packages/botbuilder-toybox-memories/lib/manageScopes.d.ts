/**
 * @module botbuilder-toybox
 */
/** Licensed under the MIT License. */
import { TurnContext, Middleware } from 'botbuilder-core';
import { MemoryScope } from './memoryScope';
/**
 * :package: **botbuilder-toybox-memories**
 *
 * Middleware that manages the automatic loading and saving of one or more scopes to storage.
 *
 * The middleware quickly learns which scopes a bot accesses for a given activity type and will
 * pre-load in parallel the most likely needed scopes for the activity type received.
 *
 * The middleware extends adds to the context object a `ScopeAccessor` instance for every scope
 * that its managing. The name of the property added to the context object matches the unique
 * `namespace` for the scope.
 *
 * **Usage Example**
 *
 * ```JavaScript
 * const { UserScope, ConversationScope, ManageScopes, ForgetAfter } = require('botbuilder-toybox-memories');
 *
 * // Define memory scopes and add to adapter
 * const storage = new MemoryStorage();
 * const userScope = new UserScope(storage);
 * const convoScope = new ConversationScope(storage);
 * adapter.use(new ManageScopes(userScope, convoScope));
 *
 * // Define the bots memory fragments
 * userScope.fragment('profile', {});
 * convoScope.fragment('state', {}).forgetAfter(1 * ForgetAfter.days);
 *
 * // Listen for incoming requests
 * server.post('/api/messages', (req, res) => {
 *     adapter.processActivity(req, res, async (context) => {
 *         // Get profile and conversation state
 *         const profile = await context.user.get('profile');
 *         const state = await context.conversation.get('state');
 *
 *         // Process received activity
 *     });
 * });
 * ```
 *
 * If you're using TypeScript you'll need to extend the `TurnContext` interface to avoid compile errors around the new "user" and "conversation" properties added to the context object.
 *
 * ```TypeScript
 * const { ScopeAccessor } = require('botbuilder-toybox-memories');
 *
 * // Define context extensions
 * interface MyContext extends TurnContext {
 *     user: ScopeAccessor;
 *     conversation: ScopeAccessor;
 * }
 *
 * // Listen for incoming requests
 * server.post('/api/messages', (req, res) => {
 *     adapter.processActivity(req, res, async (context: MyContext) => {
 *         // Get profile and conversation state
 *         const profile = await context.user.get('profile');
 *         const state = await context.conversation.get('state');
 *
 *         // Process received activity
 *     });
 * });
 * ```
 */
export declare class ManageScopes implements Middleware {
    private scopes;
    private access;
    /**
     * Creates a new ManageScopes instance.
     * @param scopes One or more scopes to manage.
     */
    constructor(...scopes: MemoryScope[]);
    /** @private */
    onTurn(context: TurnContext, next: () => Promise<void>): Promise<void>;
    private extendContext(context);
    private preLoadScopes(context);
    private saveScopes(context);
}
