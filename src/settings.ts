import { env } from "@/env";

export const EXCHANGE_PRICE_TTL = 5 * 60 * 1000; // 5 minutes
export const TOKENS_LIST_TTL = 20 * 60 * 1000; // 20 minutes
export const GGX_WSS_URL = env.NEXT_PUBLIC_PARACHAIN_URL;
//TODO: We need to define it more precisely
export const CONTRACT_MOCKED = false;
export const CALCULATION_PRECISION = 3;
// biome-ignore format: it went crazy - formats locally and remotely differently, causing CI to fail
export const NATIVE_TOKEN_ID_RESERVED = env.NEXT_PUBLIC_GGX_NETWORK === "sydney" ? 8888 : 8886;
export const BLOCK_TIME_IN_MILLIS = 2000;
export const MAX_DP = 8; //Integer. Max decimal precision
export const PRICE_DP = 4; //INTEGER
export const maxNumericInput = 10000000;
export const INFURA_API_KEY = process.env.NEXT_INFURA_API_KEY;
