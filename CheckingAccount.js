import { Client } from "./Client.js";

export class CheckingAccount {
  static numOfAccounts = 0;
  agency;
  #client;
  #balance = 0;

  set Client(newValue) {
    if (newValue instanceof Client) {
      this.#client = newValue;
    }
  }

  get Client() {
    return this.#client;
  }

  get balance() {
    return this.#balance;
  }

  constructor(agency, client) {
    this.agency = agency;
    this.Client = client;
    CheckingAccount.numOfAccounts += 1;
  }

  withdraw(value) {
    if (this.#balance >= value) {
      this.#balance -= value;
      return value;
    }
  }

  deposit(value) {
    if (value <= 0) {
      return;
    }
    this.#balance += value;
  }

  transfer(value, conta) {
    const winthdrawnValue = this.withdraw(value);
    conta.deposit(winthdrawnValue);
  }
}
