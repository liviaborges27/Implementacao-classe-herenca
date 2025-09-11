import Corrente from "./Corrente.js";
import Poupanca from "./Poupanca.js";
let corrente = new Corrente("Felisberto Felis", 1000, 0.08);
corrente.depositar(200);
corrente.cobrarTaxa();
corrente.sacar(2000);
corrente.recuperarSaldo();
let corrente2 = new Corrente("Joselito Rodrigues", 200, 0.06);
corrente2.depositar(75.12);
corrente2.cobrarTaxa();
corrente2.sacar(100);
corrente2.recuperarSaldo();
//# sourceMappingURL=main.js.map