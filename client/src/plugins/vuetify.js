import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import fr from 'vuetify/es5/locale/fr'

Vue.use(Vuetify, {
  theme: {
    primary: '#03a9f4',
    secondary: '#2196f3',
    accent: '#f44336',
    error: '#ff9800',
    warning: '#ffeb3b',
    info: '#00bcd4',
    success: '#8bc34a'
  },
    //{
    //primary: '#ee44aa',
    //secondary: '#424242',
    //accent: '#82B1FF',
    //error: '#FF5252',
   // info: '#2196F3',
   // success: '#4CAF50',
    //warning: '#FFC107'
  //},
  customProperties: true,
  iconfont: 'md',
  lang: {
    locales: { fr },
    current: 'fr'
  },
})
