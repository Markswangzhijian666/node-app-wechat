<template>
 <div class="tab-bar">
     <router-link 
        class="tab-item"
        v-for="(item,index) in data"
        :key="index"
        :to="item.path"
        active-class="is-selected"
        >
        <div class="tab-item-icon">
            <i :class="'fa fa-'+item.icon"></i>
        </div>
        <div class="tab-item-label">
            {{ item.title }}
        </div>
     </router-link> 
 </div>
</template>

<script>
export default {
  name: "tabBar",
  props : {
      data : Array
  }
};
</script>

<style scoped>
.tab-bar{
    width: 100%;
    height: 3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    background-color: #bbb8b8;
}
.tab-item{
   width: 25%;
   text-align: center;
   font-size: .85rem;
}
.tab-item-icon{
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: .3rem auto;
}
.tab-item-icon>i{
    display: inline-block;
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
    color: #333;
}
.is-selected{
    color: #20af0e;
}
</style>
