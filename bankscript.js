class Bank {
    static accountDetails() {
        let userData = {
            1000: { accno: 1000, password: "userone", balance: 5000 },
            1001: { accno: 1001, password: "usertwo", balance: 5000 },
            1002: { accno: 1002, password: "userthree", balance: 1000 }
        }
        return userData
    }
    static authenticate(acno, password) {
        var dataset = Bank.accountDetails()
        if (acno in dataset) {
            if (password == dataset[acno]["password"]) {
                return 1 //sucessfull auth
            }
            else {
                return 0 //invalid pw
            }
        }
        else {
            return -1 //invalid accno
        }
    }
    static setStorage(accno,password){
       let obj={
           accno:accno,
           password:password
       }
       localStorage.setItem("data",JSON.stringify(obj))
    }

    static login() {
        var accno = document.querySelector("#acno").value
        var password = document.querySelector("#pwd").value
        let user = Bank.authenticate(accno, password)//0 , 1 ,-1
        if (user == 0) {
            alert("invalid password")
        }
        else if (user == 1) {
            Bank.setStorage(accno,password)
            window.location.href = "home.html"
        }
        else if (user == -1) {
            alert("invalid accountnumber")
        }
    }
    static withdraw() {
        var dataset = Bank.accountDetails()
        var accno = document.querySelector("#acno").value
        var password = document.querySelector("#pwd").value
        var amount = document.querySelector("#amt").value
        var bal = dataset[accno]["balance"]

        let wth = Bank.authenticate(accno, password, amount, bal)
        if (wth == 0) {
            alert("invalid password")
        }
        else if (wth == 1) {
            if (amount <= bal) {
                var res = bal - amount
                alert("withdrawn  " + amount + "  balance= " + res)
            }
            else if (amount > bal) {
                alert("insufficent balance")
            }
            // alert("Withdrawn "+amount+" from balance")
        }
        else if (wth == -1) {
            alert("invalid accountnumber")
        }
    }
    static deposit() {
        var accno = document.querySelector("#acno").value
        var password = document.querySelector("#pwd").value
        var amount = document.querySelector("#amt").value
        let wth = Bank.authenticate(accno, password, amount)
        if (wth == 0) {
            alert("invalid password")
        }
        else if (wth == 1) {
            alert("Deposited " + amount + " into balance")
        }
        else if (wth == -1) {
            alert("invalid accountnumber")
        }

    }
}


