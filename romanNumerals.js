var baseTenToRomanNumerals = (num) => {
  return evaluateThousands(num % 10000 - num  % 1000) + 
         evaluateHundreds(num % 1000 - num  % 100) + 
         evaluateTens(num % 100 - num % 10) + 
         evaluateOnes(num % 10)
}

var evaluateThousands = (num) => {
  switch (num){
    case 1000:
      return 'M'
    case 2000:
      return 'MM'
    case 3000:
      return 'MMM'
    default:
      return ''
  }
}

var evaluateHundreds = (num) => {
  switch (num){
    case 100:
      return 'C'
    case 200:
      return 'CC'
    case 300:
      return 'CCC'
    case 400:
      return 'CD'
    case 500:
      return 'D'
    case 600:
      return 'DC'
    case 700:
      return 'DCC'
    case 800:
      return 'DCCC'
    case 900:
      return 'CM'
    default:
      return ''
  }
}

var evaluateTens = (num) =>{
  switch (num){
    case 10:
      return 'X'
    case 20:
      return 'XX'
    case 30:
      return 'XXX'
    case 40:
      return 'XL'
    case 50:
      return 'L'
    case 60:
      return 'LX'
    case 70:
      return 'VII'
    case 80:
      return 'LXXX'
    case 90:
      return 'XC'
    default:
      return ''
  }
}

var evaluateOnes = (num) => {
  switch (num){
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 4:
      return 'IV'
    case 5:
      return 'V'
    case 6:
      return 'VI'
    case 7:
      return 'VII'
    case 8:
      return 'VIII'
    case 9:
      return 'IX'
    default:
        return ''
  }
}

module.exports = baseTenToRomanNumerals