<template>
    <div id="detail">
        <h4 class="title">{{ photo.title }}</h4>
        <img class="image" :src="photo.thumbnailUrl" />
    </div>
</template>

<script>

export default {
    name: 'PhotoDetail',
    props: ['photo'],
}
</script>

<style>
#detail {
    border: .1px solid gray;
    margin: 20px 0;
    padding-bottom: 15px;
}

    img {
        width:30%;
    }

.title {
    color: black;
    font-size: 14px;
    float: center;
}

</style>