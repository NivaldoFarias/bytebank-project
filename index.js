import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);

const CheckingAccountRicardo = new CheckingAccount(1001, client1);
CheckingAccountRicardo.deposit(500);
CheckingAccountRicardo.withdraw(100);

const account2 = new CheckingAccount(102, client2);

let value = 200;
CheckingAccountRicardo.transfer(value, account2);

console.log(CheckingAccountRicardo);
