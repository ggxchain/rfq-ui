
/** interfaces/lookup.ts
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
*/
export const translateErrorMesg = (error: string| undefined) => {
  if(error === undefined) return 'Error_Is_Undefined';
  const errorObj = JSON.parse(error);
  console.log("🚀 ~ translateErrorMesg ~ errorObj:", errorObj)
  let errEasy = '';
  switch(errorObj.token) {
    case 'FundsUnavailable':
      errEasy = "User's fund is not enough"
      break;
    case 'OnlyProvider':
      errEasy = "only provider are authorized"
        break;
    case 'BelowMinimum':
      errEasy = "amount is below minimum"
        break;
    case 'CannotCreate':
      errEasy = "cannot create token"
        break;
    case 'UnknownAsset':
      errEasy = "asset is unknown"
        break;
    case 'Frozen':
      errEasy = "token is frozen"
        break;
    case 'Unsupported':
      errEasy = "unsupported"
        break;
    case 'CannotCreateHold':
      errEasy = "cannot create hold"
        break;
    case 'NotExpendable':
      errEasy = "not expendable"
        break;
    case 'Blocked':
      errEasy = "blocked"
        break;
    case 'SpRuntimeModuleError':
      errEasy = "module error"
        break;
    case 'SpRuntimeTokenError':
      errEasy = "token error"
        break;
    case 'SpArithmeticArithmeticError':
      errEasy = "arithmetic error"
        break;
    case 'SpRuntimeTransactionalError':
      errEasy = "transactional error"
        break;
    case 'Null':
      errEasy = "null"
        break;
    case 'Underflow':
      errEasy = "cannot substract due to underflow"
        break;
    case 'Overflow':
      errEasy = "cannot add due to overflow"
        break;
    case 'DivisionByZero':
      errEasy = "cannot divide by zero"
        break;
    case 'LimitReached':
      errEasy = "LimitReached"
        break;
    case 'NoLayer':
      errEasy = "NoLayer"
        break;
    default:
      errEasy = errorObj.token;
  }
  return errEasy;
}
