import { currentRoute } from './store';

export const setThisRoute = (routeName:string) => {
  currentRoute.set(routeName)
}