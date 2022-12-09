<template lang="">
    <div>
        <h1></h1>
        <div>
            <h1>{{nombre}} {{apellido}}</h1>
        </div>
        <h3>{{email}}</h3>
        
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
        }
    });
</script>
<style lang="">
    
</style>