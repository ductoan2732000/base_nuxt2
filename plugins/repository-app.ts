import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import {
  RepositoriesInterface,
  RepositoryFactory,
} from '~/repositories/repository'
export default defineNuxtPlugin((ctx, inject) => {
  const http = ctx.$axios.create({
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  http.setBaseURL(ctx.$config.apiUrl.lc)
  http.onRequest(() => {
    const token = 'ctx.app.$auth.getUserToken(true)'
    if (!token) {
      return
    }
    http.setHeader('Authorization', `Bearer ${token}`)
  })

  http.onResponseError((error) => {
    alert(error)
  })

  const repositories = (name: keyof RepositoriesInterface) => {
    return RepositoryFactory.create(name)(http)
  }

  inject('repositories', repositories)
})
