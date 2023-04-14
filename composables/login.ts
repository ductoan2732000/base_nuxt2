import { InjectionKey, useContext } from '@nuxtjs/composition-api'
import { ParamsLogin } from '~/types/modal/login'

export function useLogin() {
  const { $repositories }: any = useContext()
  const login = async (params: ParamsLogin) => {
    const response: any = await $repositories('login').login(params)
    return response
  }

  return {
    login,
  }
}

export type ComposableLoginType = ReturnType<typeof useLogin>
export const composableShowroomKey: InjectionKey<ComposableLoginType> =
  Symbol('useLogin')
