import { createContext } from "react";
import defaultLang from "../utils/localization";

const { Provider, Consumer } = createContext(defaultLang);

export { Provider, Consumer };
