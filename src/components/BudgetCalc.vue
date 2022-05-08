<template>
    <div>{{ budget }}</div>
</template>
<script>
export default {
    name: 'BudgetCalc',
    computed : {
        budget() {
            return 10;
        }
    }
}
</script>