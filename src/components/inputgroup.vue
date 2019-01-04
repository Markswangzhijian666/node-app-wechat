<template>
    <div class="input-label">
        <label :for="name">{{ label }}</label>
        <input  :type="type" 
                :value="value"
                :placeholder="placeholder"
                :name="name"
                @input="$emit('input',$event.target.value)"
        >
    </div>
</template>


<script>
export default {
    name : "input-label",
    props : {
        type:{
            type :String,
            default :"text"
        },
        value :String,
        placeholder:String,
        name:String,
        label:String
    }
}
</script>

<style scoped>
.input-label{
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
    border-bottom: .1rem solid #d9d9d9;
    padding: .5rem 0;
    margin: 0 auto;
    line-height: 3rem;
}
.input-label label{
    display: inline-block;
    width: 30%;
    font-size: .8rem;
}
.input-label input{
    display: inline-block;
    width: 65%;
    font-size: 0.8rem;
    border: none;
    outline: none;
}

</style>
