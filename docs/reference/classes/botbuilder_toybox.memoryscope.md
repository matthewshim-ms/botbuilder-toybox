[Bot Builder Toybox](../README.md) > [MemoryScope](../classes/botbuilder_toybox.memoryscope.md)



# Class: MemoryScope

## Hierarchy

**MemoryScope**

↳  [UserScope](botbuilder_toybox.userscope.md)




↳  [ConversationScope](botbuilder_toybox.conversationscope.md)




↳  [ConversationMemberScope](botbuilder_toybox.conversationmemberscope.md)








## Index

### Constructors

* [constructor](botbuilder_toybox.memoryscope.md#constructor)


### Properties

* [fragments](botbuilder_toybox.memoryscope.md#fragments)
* [getKey](botbuilder_toybox.memoryscope.md#getkey)
* [namespace](botbuilder_toybox.memoryscope.md#namespace)
* [storage](botbuilder_toybox.memoryscope.md#storage)


### Methods

* [forgetAll](botbuilder_toybox.memoryscope.md#forgetall)
* [fragment](botbuilder_toybox.memoryscope.md#fragment)
* [load](botbuilder_toybox.memoryscope.md#load)
* [save](botbuilder_toybox.memoryscope.md#save)
* [wasAccessed](botbuilder_toybox.memoryscope.md#wasaccessed)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new MemoryScope**(storage: *`Storage`*, namespace: *`string`*, getKey: *`function`*): [MemoryScope](botbuilder_toybox.memoryscope.md)


*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:13](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L13)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| storage | `Storage`   |  - |
| namespace | `string`   |  - |
| getKey | `function`   |  - |





**Returns:** [MemoryScope](botbuilder_toybox.memoryscope.md)

---


## Properties
<a id="fragments"></a>

###  fragments

**●  fragments**:  *[Map]()`string`, [MemoryFragment](botbuilder_toybox.memoryfragment.md)`any`* 

*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:13](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L13)*





___

<a id="getkey"></a>

###  getKey

**●  getKey**:  *`function`* 

*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:11](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L11)*


#### Type declaration
►(context: *`TurnContext`*): `string`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| context | `TurnContext`   |  - |





**Returns:** `string`






___

<a id="namespace"></a>

###  namespace

**●  namespace**:  *`string`* 

*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:10](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L10)*





___

<a id="storage"></a>

###  storage

**●  storage**:  *`Storage`* 

*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:9](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L9)*





___


## Methods
<a id="forgetall"></a>

###  forgetAll

► **forgetAll**(context: *`TurnContext`*): `Promise`.<`void`>



*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:15](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L15)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| context | `TurnContext`   |  - |





**Returns:** `Promise`.<`void`>





___

<a id="fragment"></a>

###  fragment

► **fragment**T(name: *`string`*, defaultValue?: *`T`*): [MemoryFragment](botbuilder_toybox.memoryfragment.md)`T`



*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:16](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L16)*



**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| defaultValue | `T`   |  - |





**Returns:** [MemoryFragment](botbuilder_toybox.memoryfragment.md)`T`





___

<a id="load"></a>

###  load

► **load**(context: *`TurnContext`*, accessed?: *`boolean`*): `Promise`.<`any`>



*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:17](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L17)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| context | `TurnContext`   |  - |
| accessed | `boolean`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="save"></a>

###  save

► **save**(context: *`TurnContext`*): `Promise`.<`void`>



*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:18](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L18)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| context | `TurnContext`   |  - |





**Returns:** `Promise`.<`void`>





___

<a id="wasaccessed"></a>

###  wasAccessed

► **wasAccessed**(context: *`TurnContext`*): `boolean`



*Defined in [packages/botbuilder-toybox-memories/lib/memoryScope.d.ts:19](https://github.com/Stevenic/botbuilder-toybox/blob/5d9ea6c/packages/botbuilder-toybox-memories/lib/memoryScope.d.ts#L19)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| context | `TurnContext`   |  - |





**Returns:** `boolean`





___

