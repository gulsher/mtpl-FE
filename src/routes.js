import {MainPage, PackagesPage, PacksPage, AssignedChannelPage} from "./_components/pages/index";
const routes = [
    { path: '/main', exact: true, name: 'Channels', component: MainPage },
    { path: '/packages', exact: true, name: 'Packages', component: PackagesPage },
    { path: '/packs', exact: true, name: 'Packs', component: PacksPage } ,
    { path: '/channel', exact: true, name: 'AssignedChannel', component: AssignedChannelPage } 
       
];

export default routes;