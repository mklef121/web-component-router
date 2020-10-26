
customElements.define("name",class {
	constructor(){

	}
})
// router.push({ name: 'user', params: { userId: 123 }}) pragmatic routing
// ROute name="a"
// cache attribute on route-element
// redirect attribute to a route-element

const routes = [
	{
		path:"/home",
		component: "name",
		name:"home"
	},
	{
		path:"/dial",
		component: "name",
		name:"phone"
	},
	{
		path:"/user/profile/:id",
		component: "userComp",
		name:"user-profile"
	},
]
// children:[
// 			{
// 				path:"user", //   /home/user
// 				component:"user-component"
// 			}
// 		]

var el = document.createElement("name");

let eleme = customElements.get("name");
var el = new eleme()


