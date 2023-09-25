
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ManagePage from '../pages/ManagePage.vue';
import MenuPage from '../pages/MenuPage.vue';
import AboutUs from '../pages/about/aboutUs.vue';
import HistoricalOrders from '../pages/about/HistoricalOrders.vue';
import ContactUs from '../pages/about/ContactUs.vue';
import DeliveryPage from '../pages/about/DeliveryPage.vue';
import OrderingGuide from '../pages/about/OrderingGuide.vue';
import TelUs from '../pages/about/TelUs.vue';
import VX from '../pages/about/VX.vue';
import LoginPage from '../pages/LoginPage.vue';
import RigsterPage from '../pages/RigsterPage.vue';


export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/Home',
            components:{
                default:HomePage,
                'historicalOrders':HistoricalOrders,
                'orderingGuide':OrderingGuide,
                'deliveryPage':DeliveryPage
            }
        },
        {
            path:'/Manage',
            component:ManagePage
        },
        {
            path:'/Menu',
            component:MenuPage
        },
        {
            path:'/Login',
            component:LoginPage
        },
        {
            path:'/Rigster',
            component:RigsterPage
        },
        {
            path:'/AboutUs',
            component:AboutUs,
            redirect:'/AboutUs/ContactUs',
            children: [
                {
                    name:'historicalOrdersLink',
                    path:'HistoricalOrders',
                    component:HistoricalOrders
                },
                {
                    name:'contactLink',
                    path:'ContactUs',
                    component:ContactUs,
                    children: [
                        {
                            name:'tel',
                            path:'TelUs',
                            component:TelUs
                        },
                        {
                            name:'vx',
                            path:'VX',
                            component:VX
                        }
                    ]
                },
                {
                    name:'deliveryLink',
                    path:'DeliveryPage',
                    component:DeliveryPage
                },
                {
                    name:'orderingGuideLink',
                    path:'OrderingGuide',
                    component:OrderingGuide
                }
            ]
        }
    ]
});
