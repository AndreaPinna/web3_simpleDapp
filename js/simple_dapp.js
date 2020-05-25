// Documentation
// https://github.com/ethereum/wiki/wiki/JavaScript-API

//1. Caricare web3 e lanciare la funzione startApp (che lavora come una main)
window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    // Now you can start your app & access web3 freely:
    window.ethereum.enable(startApp());

});


//2. definisco la funzione startApp

var startApp = function () {

    //quando il documento è pronto
    $(document).ready(function () {

        var addressRow = $('#addressRow');

        //mostro in che rete siamo
        getNetwork(showNetwork);

        //mostro il blocco corrente
        readBlockNumber(showBlock);


        //controllo del form per mostrare il balance di un address
        $("#buttonSub").click(function () {
            addressRow.find(".addressBalanceError").text("");
            cAddress = document.getElementById("cAddress").value

            readBalance(cAddress,showBalance);



        });


    });
}


//3. funzioni di scrittura sulla pagina

var showBlock = function (value) {
    var blockRow = $('#blockRow');
    blockRow.find(".currentBlock").text(value);
}

var showNetwork = function (netstring) {
    var newtworkRow = $('#networkRow');
    newtworkRow.find(".network").html("<spam class=\"text-success\">"+netstring+"</spam>");
}

var showBalance = function (value) {
    var addressRow = $('#addressRow');
    addressRow.find(".addressBalance").text(value);
    //converto il numero in ether con fromWei
    addressRow.find(".addressBalanceEther").text(web3.fromWei(value,"ether"));

}



//4. Implementazione funzioni

//ESERCIZIO 1
var getNetwork = function (callback) {
    callback("TODO");
}


//ESERCIZIO 2
//chiama getBlockNumber per leggere il blocco corrente sulla rete in uso
//ASINCRONO: OBBLIGATORIO USARE CALLBACK
var readBlockNumber = function(callback) {
    callback("TODO");
}

//Esercizio 3
var readBalance = function(cAddress,callback) {
    callback("TODO");
}
