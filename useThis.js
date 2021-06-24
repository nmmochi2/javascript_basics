// method => object
// funtion => global(in node), window(in browser) object

// change this to return current obj., instead of returning window obj.

// approach 1
const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
};
video1.showTags();

// approach 2
function playVideo(a, b) {
    console.log(this, a, b);
}
playVideo.call({ name: 'Test'}, 1, 2);
playVideo.apply({ name: 'Test'}, [1, 2]);
playVideo.bind({name: 'Test'}, 1, 2)();

const fn = playVideo.bind({name: 'Test'}, 1, 2); 
fn();
