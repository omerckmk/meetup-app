import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Meetups from "@/components/Meetup/Meetups";
import CreateMeetup from "@/components/Meetup/CreateMeetup";
import Profile from "@/components/User/Profile";
import Signup from "@/components/User/Signup";
import Signin from "@/components/User/Signin";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/meetups",
        name: "Meetups",
        component: Meetups
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/signup",
        name: "SignUp",
        component: Signup
    },
    {
        path: "/signin",
        name: "Signin",
        component: Signin
    },
    {
        path: "/meetups/new",
        name: "CreateMeetup",
        component: CreateMeetup
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
