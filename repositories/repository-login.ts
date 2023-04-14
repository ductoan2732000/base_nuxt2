import { NuxtAxiosInstance } from '@nuxtjs/axios'
export interface RepositoryLoginProps {
  login: (params: any) => Promise<any>
}

export const RepositoryLogin = (
  $axios: NuxtAxiosInstance
): RepositoryLoginProps => ({
  login(params: any): Promise<any> {
    return $axios.$post('/login', params)
  },
})
