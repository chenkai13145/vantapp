<template>
     <div>
         <router-view/>
         <!-- 底部nav -->
         <Nav/> 
     </div>
</template>
<script>
import Nav from '../../components/bottomNav'
export default {
    components:{
        Nav
    }
}
</script>
<style lang="scss">

</style>