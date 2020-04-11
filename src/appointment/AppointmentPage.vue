<template>
    <div>
        <p>Hi {{user.firstName}}!</p>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
    </div>
</template>

<script>
import { userService } from '../_services';

export default {
    data () {
        return {
            user: {},
            users: []
        }
    },
    created () {
        this.user = JSON.parse(localStorage.getItem('session'));
        this.users.loading = true;
    }
};
</script>