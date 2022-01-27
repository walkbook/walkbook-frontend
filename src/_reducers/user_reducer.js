const initialState = {
  name: 'yeji',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'setToken':
      return { 
        ...state,
        token: action.payload,
      };
    
    case 'setLocation':
      return {
        ...state,
        location: action.payload,
      };

    case 'setSigninData':
      return {
        ...state,
        userData: action.payload,
      };

    case 'signout':
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
}
