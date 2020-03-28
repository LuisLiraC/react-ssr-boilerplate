import { Hello } from '../containers/Hello'
import { Other } from '../containers/Other'
import { NotFound } from '../containers/NotFound'

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
  },
  {
    name: 'NotFound',
    component: NotFound
  }
]