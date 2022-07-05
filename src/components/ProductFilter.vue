<template>
    <ul class="filter">
        <li class="filter__item">По умолчанию</li>
        <li class="filter__item">По цене min (от меньшего к большему)</li>
        <li class="filter__item">По цене max (от большего к меньшему)</li>
        <li class="filter__item">По наименованию.</li>
    </ul>
</template>

<script>
export default {
    name: "ProductFilter",
    
}
// console.log(this.props)

</script>

<style lang="scss" scoped>
    .filter {
        width: 300px;
        padding: 10px 15px;
        position: absolute;
        top: 30px;
        right: 0;
        z-index: 10;
        border: 2px solid rgb(0 0 0 / 4%);
        border-radius: 10px;
        box-shadow: 0px 20px 30px rgb(0 0 0 / 4%), 0px 6px 10px rgb(0 0 0 / 2%);
        background: #fff;
        clear: both;
        list-style-type: none;

        &__item{
            margin: 10px 0;

            &:hover {
                cursor: pointer;
                color: #911b1b;
            }
        }
    }  
</style>