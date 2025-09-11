class Conta{
    private titular : string;
    private saldo: number;

    constructor(
        _titular: string,
        _saldo : number,
    ){
        this.titular = _titular;
        this.saldo = _saldo;
    }
    public getTitular(): string{
        return this.titular;
    }
    public setTitular(_titular: string){
        this.titular= _titular;
    }
    public getSaldo(): number{
        return this.saldo;
    }
    public setSaldo(_saldo: number):void{
        this.saldo = _saldo;
    }
    public depositar(valor: number): void{
        this.saldo += valor
        
    }
     public sacar(valor: number): void{
        if(valor > this.saldo){
            console.log(`Você não tem saldo suficiente`);
        } else{
            this.saldo -= valor;
        }
        
    }
     
    public recuperarSaldo(): number{
        return this.saldo;
    }
}

export default Conta;