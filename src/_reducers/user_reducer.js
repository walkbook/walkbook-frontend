export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'setToken':
      return { 
        ...state,
        token: action.payload,
      };

    case 'setSigninData':
      return {
        ...state,
        userData: action.payload,
      }

      case 'signout':
        return {
          ...state,
          token: '',
        }
    default:
      return state;
  }
}
