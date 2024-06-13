export const moneyFormatter = (amount) =>{
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}