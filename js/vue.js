import Vue from 'vue'

new Vue({
    el: '#copyright',
    data: {
        company: '海邊生活工作室',
        address: '宜蘭縣頭城鎮開蘭東路32號',
        year: '©' + new Date().getFullYear(),
    },
});

