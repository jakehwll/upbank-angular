
interface Value {
    currencyCode: string,
    value: string
    valueInBaseUnits: number
}

interface AccountAttributes {
    displayName: string
    accountType: string
    balance: Value []
    createdAt: string
}

interface BankAccount {
    type: string;
    id: string;
    attributes: AccountAttributes []
}