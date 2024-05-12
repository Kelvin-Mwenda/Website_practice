/*nested object*/
const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function(){
        console.log('function inside object')
    }
};

console.log(product2.rating.count)