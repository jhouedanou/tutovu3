import Contact from './pages/Contact.vue'
import PortfolioMain from './pages/PortfolioMain.vue'
export const routes = [
    {
        path: '/',
        component: PortfolioMain
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/contact/:id',
        component: Contact
    }

]