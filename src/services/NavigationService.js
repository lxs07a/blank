import { NavigationActions, StackActions } from 'react-navigation';
import screens from '../navigation/screens';

class NavigationServices {
  constructor() {
    this.navigation = null;
  }

  init(ref) {
    if(this.navigation) return;

    this.navigation = ref;
  }

  navigate(route) {
    this.navigation.dispatch(NavigationActions.navigate(route))
  }

  navigateToHome() {
    this.navigate({ routeName: screens.Home });
  }

  navigateToRegister() {
    this.navigate({ routeName: screens.Register });
  }
}

export default new NavigationServices();