<template>
    <div class="home">

        <div>
            <ExtraComponent/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import ExtraComponent from '@/components/ExtraComponent.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld,
            ExtraComponent
        }
    }
</script>
