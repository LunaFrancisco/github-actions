<template lang="">
    <div>
        <h1></h1>
        <div>
            <h1>{{nombre}} {{apellido}}</h1>
        </div>
        <h3>{{email}}</h3>
        <a v-bind:href="linkedin"> LinkedIn </a> | 
        <a v-bind:href="githubPage"> Github </a>
            
        
    </div>
</template>
<script setup>
    const props = defineProps({
        nombre: {
            type: String,
            required: false,
            default: 'Juan'
        },
        apellido: {
            type: String,
            required: false,
            default: 'Perez'
        },
        email: {
            type: String,
            required: false,
            default: 'JuanPerez@mail.com'
        },
        linkedin: {
            type: String,
            required: false,
            default: 'https://www.linkedin.com/in/JuanPerez/'
        },
        githubPage: {
            type: String,
            required: false,
            default: ''
        }
    });
</script>
<style lang="">
    
</style>