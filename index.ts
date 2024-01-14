import { createCardGameImpl } from "./src/CardGameImpl";
import { getParams, validateParams } from "./src/utils";

const init = () =>
  getParams().then((params) =>
    validateParams(params)
      .then(() => {
        const CardGame = createCardGameImpl(params);
        const results = CardGame.play();
        console.info("Your Hand: ", results.hand);
        console.info("You have: ", results.description);
      })
      .catch((err) => {
        console.warn("ERROR", err);
      })
  );

init();
