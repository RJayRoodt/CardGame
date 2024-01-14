import { createCardGameImpl } from "./src/CardGameImpl";
import { getParams, validateParams } from "./src/utils";

const init = () =>
// get input parameters
  getParams().then((params) =>
  // validate input parameters
    validateParams(params)
      .then(() => {
        // instantiate card game
        const CardGame = createCardGameImpl(params);
        // play game
        CardGame.play();
        console.info("Your Hand: ", CardGame.hand.cards.join(" "));
        console.info("You have: ", CardGame.hand.description);
      })
      .catch((err) => {
        console.warn("ERROR", err);
      })
  );

init();
