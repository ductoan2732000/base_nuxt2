import { RepositoryLogin } from './repository-login'

export interface RepositoriesInterface {
  login: typeof RepositoryLogin
}

const repositories: RepositoriesInterface = {
  login: RepositoryLogin,
}

export const RepositoryFactory = {
  create: (key: keyof RepositoriesInterface) => repositories[key],
}

export type RepositoriesType = <K extends keyof RepositoriesInterface>(
  key: K
) => ReturnType<RepositoriesInterface[K]>
