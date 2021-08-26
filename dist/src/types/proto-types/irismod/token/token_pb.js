// source: irismod/token/token.proto
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
goog.exportSymbol('proto.irismod.token.Params', null, global);
goog.exportSymbol('proto.irismod.token.Token', null, global);
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
proto.irismod.token.Token = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.token.Token, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.token.Token.displayName = 'proto.irismod.token.Token';
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
proto.irismod.token.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.token.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.token.Params.displayName = 'proto.irismod.token.Params';
}



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
proto.irismod.token.Token.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.token.Token.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.token.Token} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.token.Token.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scale: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minUnit: jspb.Message.getFieldWithDefault(msg, 4, ""),
    initialSupply: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxSupply: jspb.Message.getFieldWithDefault(msg, 6, 0),
    mintable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    owner: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.irismod.token.Token}
 */
proto.irismod.token.Token.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.token.Token;
  return proto.irismod.token.Token.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.token.Token} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.token.Token}
 */
proto.irismod.token.Token.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setScale(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinUnit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInitialSupply(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxSupply(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMintable(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
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
proto.irismod.token.Token.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.token.Token.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.token.Token} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.token.Token.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScale();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMinUnit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInitialSupply();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMaxSupply();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMintable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.irismod.token.Token.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.irismod.token.Token.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 scale = 3;
 * @return {number}
 */
proto.irismod.token.Token.prototype.getScale = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setScale = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string min_unit = 4;
 * @return {string}
 */
proto.irismod.token.Token.prototype.getMinUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setMinUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 initial_supply = 5;
 * @return {number}
 */
proto.irismod.token.Token.prototype.getInitialSupply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setInitialSupply = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 max_supply = 6;
 * @return {number}
 */
proto.irismod.token.Token.prototype.getMaxSupply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setMaxSupply = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool mintable = 7;
 * @return {boolean}
 */
proto.irismod.token.Token.prototype.getMintable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setMintable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string owner = 8;
 * @return {string}
 */
proto.irismod.token.Token.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.token.Token} returns this
 */
proto.irismod.token.Token.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.irismod.token.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.token.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.token.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.token.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenTaxRate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    issueTokenBaseFee: (f = msg.getIssueTokenBaseFee()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    mintTokenFeeRatio: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.irismod.token.Params}
 */
proto.irismod.token.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.token.Params;
  return proto.irismod.token.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.token.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.token.Params}
 */
proto.irismod.token.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenTaxRate(value);
      break;
    case 2:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setIssueTokenBaseFee(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMintTokenFeeRatio(value);
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
proto.irismod.token.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.token.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.token.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.token.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenTaxRate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIssueTokenBaseFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getMintTokenFeeRatio();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token_tax_rate = 1;
 * @return {string}
 */
proto.irismod.token.Params.prototype.getTokenTaxRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.token.Params} returns this
 */
proto.irismod.token.Params.prototype.setTokenTaxRate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.v1beta1.Coin issue_token_base_fee = 2;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.token.Params.prototype.getIssueTokenBaseFee = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 2));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.irismod.token.Params} returns this
*/
proto.irismod.token.Params.prototype.setIssueTokenBaseFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.token.Params} returns this
 */
proto.irismod.token.Params.prototype.clearIssueTokenBaseFee = function() {
  return this.setIssueTokenBaseFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.token.Params.prototype.hasIssueTokenBaseFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string mint_token_fee_ratio = 3;
 * @return {string}
 */
proto.irismod.token.Params.prototype.getMintTokenFeeRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.token.Params} returns this
 */
proto.irismod.token.Params.prototype.setMintTokenFeeRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.irismod.token);
