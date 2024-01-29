import Pair from "./pair";
import { Amount, CounterId, OrderType, PubKey, TokenId } from "./types";

type Order = {
    pubkey: PubKey;
    pair: Pair;
    counter: CounterId;
    timestamp: number;
    orderType: OrderType
    amountOffered: Amount;
    amoutRequested: Amount;
}

export default Order

export class OrderUtils {
    static ownedToken(order: Order): TokenId {
        return order.orderType === "SELL" ? order.pair[0] : order.pair[1];
    }

    static desiredToken(order: Order): TokenId {
        return order.orderType === "SELL" ? order.pair[1] : order.pair[0];
    }
}
