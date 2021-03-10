import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home';
// import App from './views/App';
// import Dashboard from './views/Dashboard';
// import Technician from './views/Technician';
// import Statistics from './views/Statistics';
// import StatisticsEdit from './views/StatisticsEdit';
// import Regions from './views/Regions';
// import RegionsEdit from './views/RegionsEdit';
// import Researcher from './views/Researcher';
// import ResearcherEdit from './views/ResearcherEdit';
import Landing from "./views/Landing";
// import Login from './views/Login';

// import AddUsers from './components/LandingPage/AddUsers';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    // 	path: '',
    // 	name: 'home',
    // 	component: Home,
    // },
    {
      path: "/",
      name: "home",
      component: Landing,
    },
    // {
    // 	path: '/add-users',
    // 	name: 'addUsers',
    // 	component: AddUsers,
    // },
    // {
    // 	path: '/login',
    // 	name: 'login',
    // 	component: Login,
    // },
    // {
    // 	path: '/app/',
    // 	name: "app",
    // 	component: App,
    // 	children: [
    // 		{
    // 			path: '',
    // 			name: 'dashboard',
    // 			component: Dashboard,
    // 		},
    // 		{
    // 			path: 'technician',
    // 			name: 'technician',
    // 			component: Technician,
    // 		},
    // 		{
    // 			path: 'statistics-generator',
    // 			name: 'statistics',
    // 			component: Statistics,
    // 		},
    // 		{
    // 			path: 'statistics-generator/:id',
    // 			name: 'statisticsEdit',
    // 			component: StatisticsEdit,
    // 		},
    // 		{
    // 			path: 'researcher',
    // 			name: 'researcher',
    // 			component: Researcher,
    // 		},
    // 		{
    // 			path: 'researcher/:id',
    // 			name: 'researcherEdit',
    // 			component: ResearcherEdit,
    // 		},
    // 		{
    // 			path: 'regions',
    // 			name: 'regions',
    // 			component: Regions,
    // 		},
    // 		{
    // 			path: 'regions/:id',
    // 			name: 'regionsEdit',
    // 			component: RegionsEdit,
    // 		},
    // 	],
    // },
  ],
});
