
import { resolveUrl } from '@/utils'

export const API_USER_CONFIG = {
  login: () => resolveUrl('/user/login'),
  registry: () => resolveUrl('/user/registry')
}
