import {PostsPage} from './pages/PostsPage.jsx'
import {AboutPage} from './pages/AboutPage.jsx'
import {PostPage} from './pages/PostPage.jsx'
import {LoginPage} from './pages/LoginPage.jsx'
export const publicRoutes = [
  {path: '/login', component: LoginPage, exact:true}
]

export const privateRoutes = [
  {path: '/posts', component: PostsPage, exact:true},
  {path: '/about', component: AboutPage, exact:true},
  {path: '/posts/:id', component: PostPage, exact:true},
]