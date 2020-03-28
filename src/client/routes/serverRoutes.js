import { Hello } from '../containers/Hello'
import { Other } from '../containers/Other'

export const serverRoutes = [
  {
    exact: true,
    path: '/',
    component: Hello,
  },
  {
    exact: true,
    path: '/other',
    component: Other,
  }
]