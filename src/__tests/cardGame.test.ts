import { describe, test, expect } from "@jest/globals";
import { createCardGameImpl } from "../CardGameImpl";
import {
  CardGame_ShuffleAlgorithmEnum,
  CardGame_PokerVariantEnum,
} from "../types";

describe("Card Game Unit testing", () => {
  const params = {
    debug: false,
    shuffleAlgorithm: CardGame_ShuffleAlgorithmEnum.lodash,
    pokerVariant: CardGame_PokerVariantEnum.fiveCard,
  }

  const CardGame = createCardGameImpl(params);

  test("Shuffle Test", () => {
    const beforeShuffle = CardGame.cards;
    const afterShuffle = CardGame.shuffle();
    expect(beforeShuffle.join()).not.toEqual(afterShuffle.join());
  });

  test("Deal Hand Test", () => {
    CardGame.dealHand();
    const gameType = CardGame.getGameType(params);
    expect(CardGame.hand.cards.length).toEqual(gameType);
  });

  test("Play game Test", () => {
    CardGame.play();
    expect(CardGame.hand.description).toBeDefined();
    expect(CardGame.hand.cards).toBeDefined();
  });
});
