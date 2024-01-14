import {
  CardGame_GameParams,
  CardGame_PokerVariantEnum,
  CardGame_Results,
  CardGame_ShuffleAlgorithmEnum,
} from "./types";
import { CARD_OPTIONS, CARD_SUITS } from "./utils";
import { shuffle } from "lodash";

const Hand = require("pokersolver").Hand;

interface ICarGame {
  shuffle: () => string[];
  validateHand: () => CardGame_Results;
  play: () => CardGame_Results;
}

class CardGameImpl implements ICarGame {
  readonly params: CardGame_GameParams;
  private cards: string[];
  constructor(params: CardGame_GameParams) {
    this.params = params;
    this.cards = [
      ...CARD_OPTIONS.flatMap((number) =>
        CARD_SUITS.map((suit) => `${number}${suit}`)
      ),
    ];
    params.debug && console.debug("DEBUG: Cards are:", this.cards);
  }

  private getGameType = (params: CardGame_GameParams) => {
    switch (params.pokerVariant) {
      case CardGame_PokerVariantEnum.badugi:
        return 4;
      case CardGame_PokerVariantEnum.sevenCard:
        return 7;
      case CardGame_PokerVariantEnum.fiveCard:
      default:
        return 5;
    }
  };

  public shuffle = () => {
    console.info("Shuffle ... Shuffle ... Shuffle ...");
    switch (this.params.shuffleAlgorithm) {
      case CardGame_ShuffleAlgorithmEnum.lodash:
      default:
        this.cards = shuffle<string>(this.cards);
        break;
    }
    this.params.debug && console.debug("DEBUG: Cards after shuffle", this.cards);
    return this.cards;
  };

  public validateHand = () => {
    const numberOfCards = this.getGameType(this.params);
    const hand = [...this.cards.splice(0, numberOfCards)];
    this.params.debug && console.debug("DEBUG: Number Cards are", numberOfCards);
    this.params.debug && console.debug("DEBUG: Cards in Hand are", hand);
    return {
      hand: hand.join(" "),
      description: Hand.solve(hand).descr as string,
    };
  };

  public play = () => {
    this.shuffle();
    return this.validateHand();
  };
}

export const createCardGameImpl = (params: CardGame_GameParams) =>
  new CardGameImpl(params);

export default CardGameImpl;
