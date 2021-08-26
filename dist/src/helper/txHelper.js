import * as Bech32 from 'bech32';
import * as types from '../types';
import { SdkError, CODES } from '../errors';
export class TxHelper {
    static getHexPubkey(pubkey) {
        try {
            let pk = Bech32.decode(pubkey);
            pubkey = Buffer.from(Bech32.fromWords(pk.words)).toString('hex').toUpperCase();
        }
        catch (e) { }
        return pubkey;
    }
    static isSignDoc(signDoc) {
        return signDoc instanceof types.tx_tx_pb.SignDoc;
    }
    static isAny(value) {
        return value instanceof types.any_pb.Any;
    }
    static ecodeModelAddress(address) {
        if (!address) {
            throw new SdkError("address is empty", CODES.UnknownAddress);
        }
        let words = Bech32.decode(address, 'utf-8').words;
        return Buffer.from(Bech32.fromWords(words));
    }
}
//# sourceMappingURL=txHelper.js.map