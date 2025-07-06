import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faClipboardList,
  faChevronDown,
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faRocket,
  faPlus,
  faListUl,
  faChartLine,
  faArrowUpRightFromSquare,
  faCode,
  faShieldHalved, 
  faCloud,
  faBolt,    
  faHammer,  
  faGamepad, 
  faChevronUp 
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookF,
  faTelegram,
  faDiscord,
  faXTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'


library.add(
  faClipboardList,
  faChevronDown,
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faRocket,
  faPlus,
  faListUl,
  faChartLine,
  faArrowUpRightFromSquare,
  faCode,
  faShieldHalved,
  faCloud,
  faBolt,
  faHammer,
  faGamepad,
  faChevronUp, 
  faFacebookF,
  faTelegram,
  faDiscord,
  faXTwitter,
  faGithub 
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})