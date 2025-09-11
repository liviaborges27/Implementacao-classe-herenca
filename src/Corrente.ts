import Conta from "./Conta.js";

class Corrente extends Conta{
     private taxaManutencao: number;

    constructor(
        _titular: string,
        _saldo: number,
        _taxaManutencao: number
    ){ super(_titular,_saldo);
        this.taxaManutencao = _taxaManutencao;

    }
    public getTaxaManutencao(): number{
        return this.taxaManutencao;
    }
    public setTaxaManutencao(_taxaManutencao: number):void{
        this.taxaManutencao = _taxaManutencao;

    }
    public cobrarTaxa(): void{
        let saldo: number = this.recuperarSaldo();
        this.setSaldo(saldo - (saldo * this.taxaManutencao));
    }
       

}

    export default Corrente;







