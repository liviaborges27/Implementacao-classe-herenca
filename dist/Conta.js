class Conta {
    titular;
    saldo;
    constructor(_titular, _saldo) {
        this.titular = _titular;
        this.saldo = _saldo;
    }
    getTitular() {
        return this.titular;
    }
    setTitular(_titular) {
        this.titular = _titular;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(_saldo) {
        this.saldo = _saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Você não tem saldo suficiente`);
        }
        else {
            this.saldo -= valor;
        }
    }
    recuperarSaldo() {
        return this.saldo;
    }
}
export default Conta;
//# sourceMappingURL=Conta.js.map