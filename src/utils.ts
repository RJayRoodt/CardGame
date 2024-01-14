import minimist from "minimist";
import {
  CardGame_PokerVariantEnum,
  CardGame_ShuffleAlgorithmEnum,
  CardGame_GameParams,
} from "./types";

export const DEFAULT_PARAMS = {
  shuffleAlgorithm: CardGame_ShuffleAlgorithmEnum.lodash,
  pokerVariant: CardGame_PokerVariantEnum.fiveCard,
  debug: false,
};

export const CARD_SUITS = ["h", "s", "c", "d"];
export const CARD_OPTIONS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export const getParams = (): Promise<CardGame_GameParams> =>
  new Promise<minimist.ParsedArgs>((resolve, _) =>
    resolve(minimist(process.argv.splice(2))),
  ).then((params) => ({
    shuffleAlgorithm:
      params?.a?.toUpperCase?.() ??
      params?.algorithm?.toUpperCase?.() ??
      DEFAULT_PARAMS.shuffleAlgorithm,
    pokerVariant:
      params?.v?.toUpperCase?.() ??
      params?.variant?.toUpperCase?.() ??
      DEFAULT_PARAMS.pokerVariant,
    debug:
      params?.d?.toUpperCase?.() ??
      params?.debug?.toUpperCase?.() ??
      DEFAULT_PARAMS.debug,
  }));

export const validateParams = (params: CardGame_GameParams) =>
  new Promise<void>((resolve, reject) => {
    params.debug && console.log("Shuffle Algorithm:", params.shuffleAlgorithm);
    if (
      !Object.keys(CardGame_ShuffleAlgorithmEnum)
        .map((key) => key.toUpperCase())
        .includes(params.shuffleAlgorithm)
    ) {
      return reject(
        `Unknown Shuffle Algorithm: ${params.shuffleAlgorithm}, try: ${Object.keys(CardGame_ShuffleAlgorithmEnum).join(", ")}`,
      );
    }
    params.debug && console.log("Poker Variant:", params.pokerVariant);
    if (
      !Object.keys(CardGame_PokerVariantEnum)
        .map((key) => key.toUpperCase())
        .includes(params.pokerVariant)
    ) {
      return reject(
        `Unknown Poker Variant: ${params.pokerVariant}, try: ${Object.keys(CardGame_PokerVariantEnum).join(", ")}`,
      );
    }
    return resolve();
  });
