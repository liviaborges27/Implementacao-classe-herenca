import Conta from "./Conta.js";
class Corrente extends Conta {
    taxaManutencao;
    constructor(_titular, _saldo, _taxaManutencao) {
        super(_titular, _saldo);
        this.taxaManutencao = _taxaManutencao;
    }
    getTaxaManutencao() {
        return this.taxaManutencao;
    }
    setTaxaManutencao(_taxaManutencao) {
        this.taxaManutencao = _taxaManutencao;
    }
    cobrarTaxa() {
        let saldo = this.recuperarSaldo();
        this.setSaldo(saldo - (saldo * this.taxaManutencao));
    }
}
export default Corrente;
//# sourceMappingURL=Corrente.js.map