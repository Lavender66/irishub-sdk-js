// source: irismod/farm/farm.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.irismod.farm.FarmInfo', null, global);
goog.exportSymbol('proto.irismod.farm.FarmPool', null, global);
goog.exportSymbol('proto.irismod.farm.Params', null, global);
goog.exportSymbol('proto.irismod.farm.RewardRule', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.farm.FarmPool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.farm.FarmPool.repeatedFields_, null);
};
goog.inherits(proto.irismod.farm.FarmPool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.farm.FarmPool.displayName = 'proto.irismod.farm.FarmPool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.farm.RewardRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.farm.RewardRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.farm.RewardRule.displayName = 'proto.irismod.farm.RewardRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.farm.FarmInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.farm.FarmInfo.repeatedFields_, null);
};
goog.inherits(proto.irismod.farm.FarmInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.farm.FarmInfo.displayName = 'proto.irismod.farm.FarmInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.farm.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.farm.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.farm.Params.displayName = 'proto.irismod.farm.Params';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.farm.FarmPool.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.farm.FarmPool.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.farm.FarmPool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.farm.FarmPool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.FarmPool.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    creator: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startHeight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    endHeight: jspb.Message.getFieldWithDefault(msg, 5, 0),
    lastHeightDistrRewards: jspb.Message.getFieldWithDefault(msg, 6, 0),
    editable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    totalLptLocked: (f = msg.getTotalLptLocked()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.irismod.farm.RewardRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.farm.FarmPool}
 */
proto.irismod.farm.FarmPool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.farm.FarmPool;
  return proto.irismod.farm.FarmPool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.farm.FarmPool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.farm.FarmPool}
 */
proto.irismod.farm.FarmPool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndHeight(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastHeightDistrRewards(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEditable(value);
      break;
    case 8:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setTotalLptLocked(value);
      break;
    case 9:
      var value = new proto.irismod.farm.RewardRule;
      reader.readMessage(value,proto.irismod.farm.RewardRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.farm.FarmPool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.farm.FarmPool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.farm.FarmPool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.FarmPool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartHeight();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getEndHeight();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getLastHeightDistrRewards();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getEditable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getTotalLptLocked();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.irismod.farm.RewardRule.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.irismod.farm.FarmPool.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string creator = 2;
 * @return {string}
 */
proto.irismod.farm.FarmPool.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.irismod.farm.FarmPool.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 start_height = 4;
 * @return {number}
 */
proto.irismod.farm.FarmPool.prototype.getStartHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.setStartHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 end_height = 5;
 * @return {number}
 */
proto.irismod.farm.FarmPool.prototype.getEndHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.setEndHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 last_height_distr_rewards = 6;
 * @return {number}
 */
proto.irismod.farm.FarmPool.prototype.getLastHeightDistrRewards = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.setLastHeightDistrRewards = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool editable = 7;
 * @return {boolean}
 */
proto.irismod.farm.FarmPool.prototype.getEditable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.setEditable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional cosmos.base.v1beta1.Coin total_lpt_locked = 8;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.farm.FarmPool.prototype.getTotalLptLocked = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 8));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.irismod.farm.FarmPool} returns this
*/
proto.irismod.farm.FarmPool.prototype.setTotalLptLocked = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.clearTotalLptLocked = function() {
  return this.setTotalLptLocked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.farm.FarmPool.prototype.hasTotalLptLocked = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated RewardRule rules = 9;
 * @return {!Array<!proto.irismod.farm.RewardRule>}
 */
proto.irismod.farm.FarmPool.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.irismod.farm.RewardRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.irismod.farm.RewardRule, 9));
};


/**
 * @param {!Array<!proto.irismod.farm.RewardRule>} value
 * @return {!proto.irismod.farm.FarmPool} returns this
*/
proto.irismod.farm.FarmPool.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.irismod.farm.RewardRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.irismod.farm.RewardRule}
 */
proto.irismod.farm.FarmPool.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.irismod.farm.RewardRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.farm.FarmPool} returns this
 */
proto.irismod.farm.FarmPool.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.farm.RewardRule.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.farm.RewardRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.farm.RewardRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.RewardRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    reward: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalReward: jspb.Message.getFieldWithDefault(msg, 2, ""),
    remainingReward: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rewardPerBlock: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rewardPerShare: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.farm.RewardRule}
 */
proto.irismod.farm.RewardRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.farm.RewardRule;
  return proto.irismod.farm.RewardRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.farm.RewardRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.farm.RewardRule}
 */
proto.irismod.farm.RewardRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReward(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalReward(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemainingReward(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRewardPerBlock(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRewardPerShare(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.farm.RewardRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.farm.RewardRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.farm.RewardRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.RewardRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReward();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalReward();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRemainingReward();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRewardPerBlock();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRewardPerShare();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string reward = 1;
 * @return {string}
 */
proto.irismod.farm.RewardRule.prototype.getReward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.RewardRule} returns this
 */
proto.irismod.farm.RewardRule.prototype.setReward = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string total_reward = 2;
 * @return {string}
 */
proto.irismod.farm.RewardRule.prototype.getTotalReward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.RewardRule} returns this
 */
proto.irismod.farm.RewardRule.prototype.setTotalReward = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string remaining_reward = 3;
 * @return {string}
 */
proto.irismod.farm.RewardRule.prototype.getRemainingReward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.RewardRule} returns this
 */
proto.irismod.farm.RewardRule.prototype.setRemainingReward = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reward_per_block = 4;
 * @return {string}
 */
proto.irismod.farm.RewardRule.prototype.getRewardPerBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.RewardRule} returns this
 */
proto.irismod.farm.RewardRule.prototype.setRewardPerBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string reward_per_share = 5;
 * @return {string}
 */
proto.irismod.farm.RewardRule.prototype.getRewardPerShare = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.RewardRule} returns this
 */
proto.irismod.farm.RewardRule.prototype.setRewardPerShare = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.farm.FarmInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.farm.FarmInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.farm.FarmInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.farm.FarmInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.FarmInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    locked: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rewardDebtList: jspb.Message.toObjectList(msg.getRewardDebtList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.farm.FarmInfo}
 */
proto.irismod.farm.FarmInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.farm.FarmInfo;
  return proto.irismod.farm.FarmInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.farm.FarmInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.farm.FarmInfo}
 */
proto.irismod.farm.FarmInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPoolName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocked(value);
      break;
    case 4:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addRewardDebt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.farm.FarmInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.farm.FarmInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.farm.FarmInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.FarmInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocked();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRewardDebtList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional string pool_name = 1;
 * @return {string}
 */
proto.irismod.farm.FarmInfo.prototype.getPoolName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.FarmInfo} returns this
 */
proto.irismod.farm.FarmInfo.prototype.setPoolName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.irismod.farm.FarmInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.FarmInfo} returns this
 */
proto.irismod.farm.FarmInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string locked = 3;
 * @return {string}
 */
proto.irismod.farm.FarmInfo.prototype.getLocked = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.farm.FarmInfo} returns this
 */
proto.irismod.farm.FarmInfo.prototype.setLocked = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated cosmos.base.v1beta1.Coin reward_debt = 4;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.irismod.farm.FarmInfo.prototype.getRewardDebtList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 4));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.irismod.farm.FarmInfo} returns this
*/
proto.irismod.farm.FarmInfo.prototype.setRewardDebtList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.farm.FarmInfo.prototype.addRewardDebt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.farm.FarmInfo} returns this
 */
proto.irismod.farm.FarmInfo.prototype.clearRewardDebtList = function() {
  return this.setRewardDebtList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.farm.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.farm.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.farm.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    createPoolFee: (f = msg.getCreatePoolFee()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    maxRewardCategories: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.farm.Params}
 */
proto.irismod.farm.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.farm.Params;
  return proto.irismod.farm.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.farm.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.farm.Params}
 */
proto.irismod.farm.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setCreatePoolFee(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxRewardCategories(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.farm.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.farm.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.farm.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.farm.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatePoolFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getMaxRewardCategories();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional cosmos.base.v1beta1.Coin create_pool_fee = 1;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.farm.Params.prototype.getCreatePoolFee = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.irismod.farm.Params} returns this
*/
proto.irismod.farm.Params.prototype.setCreatePoolFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.farm.Params} returns this
 */
proto.irismod.farm.Params.prototype.clearCreatePoolFee = function() {
  return this.setCreatePoolFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.farm.Params.prototype.hasCreatePoolFee = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 max_reward_categories = 2;
 * @return {number}
 */
proto.irismod.farm.Params.prototype.getMaxRewardCategories = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.farm.Params} returns this
 */
proto.irismod.farm.Params.prototype.setMaxRewardCategories = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.irismod.farm);