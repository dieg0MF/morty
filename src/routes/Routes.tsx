
// import Main from "../Components/pages/Main";
import Account from "../Components/pages/Account";
import Main from "../Components/pages/Main";
import Search from "../Components/pages/Search";

 const routes= [
    {path :'/',
	component: Main
	},
	{ path :'/search',
	component: Search
	},
	{ path :'/account',
	component: Account
	}
]
export default routes