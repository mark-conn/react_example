export const types = {
  SIGN_IN: 'SIGN_IN',
  SET_ENTITY: 'SET_ENTITY'
}

export function setEntity(entity: string, data: any) {
  return {
    type: types.SET_ENTITY,
    payload: {
      entity,
      data
    }
  }
}

export function signIn(username: string) {
  return {
    type: types.SIGN_IN,
    payload: username
  }
}