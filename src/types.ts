export type CardGame_GameParams = {
  pokerVariant: CardGame_PokerVariantEnum;
  shuffleAlgorithm: CardGame_ShuffleAlgorithmEnum;
  debug: boolean
};

export type CardGame_Results = { hand: string; description: string }

export enum CardGame_ShuffleAlgorithmEnum {
  lodash = "LODASH", // Fisher–Yates shuffle
}

export enum CardGame_PokerVariantEnum {
  fiveCard = "FIVECARD",
  sevenCard = "SEVENCARD",
  badugi = "BADUGI",
}
