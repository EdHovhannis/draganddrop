import { ActionsProvider } from "./ActionsContext";
import { combineComponents } from "./combineComponents";
import { ContentProvider } from "./ContentContext";

const providers = [ActionsProvider, ContentProvider];
export const AppContextProvider = combineComponents(...providers);
