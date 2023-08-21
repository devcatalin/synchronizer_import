// import { createDefaultMonokleAuthenticator } from "@monokle/synchronizer";
// import monokleSynchronizer from "@monokle/synchronizer";
import * as monokleSynchronizer from "@monokle/synchronizer";

const { createDefaultMonokleAuthenticator } = monokleSynchronizer;

const authenticator = createDefaultMonokleAuthenticator();

console.log(authenticator);
