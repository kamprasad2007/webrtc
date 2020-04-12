<template>
    <div class="appointment-group">
        <h1>AirCall</h1>
        <p id="instructions">Please enter your appointment number.</p>
        <form @submit.prevent="handleSubmit">
            <div id="room-id-input-buttons">
                <div class="form-group">
                    <input type="text" v-model="appointmentnumber" class="form-control" autofocus="" :class="{ 'is-invalid': submitted && !appointmentnumber }">
                    <div v-show="submitted && !appointmentnumber" class="invalid-feedback">Appointment number is required</div>
                </div>
                <div class="form-group">
                    <button  class="btn btn-primary btn-block" >JOIN</button>
                </div>
                <div v-if="error" class="alert alert-danger">{{error}}</div>
            </div>
        </form>
    </div>
</template>

<script>
import { userService } from '../_services';

export default {
    data () {
        return {
            submitted: false,
            appointmentnumber: '',
            error: ''
        }
    },
    created () {
    },
    methods :{
         handleSubmit (e) {
            this.submitted = true;
            const { appointmentnumber } = this;

            if (!(appointmentnumber)) {
                return;
            }

            this.$router.push(`session/${appointmentnumber}`) 
        }
    }
};
</script>

<style>
    .appointment-group {
        margin: 3em auto 0 auto;
        padding: 1em 1.5em 1.3em 1.5em;
        width: 25em;
    }
</style>