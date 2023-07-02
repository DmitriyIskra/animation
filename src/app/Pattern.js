export default class Pattern {


    getWidget() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('widget-wrapper')

        const button = document.createElement('button');
        button.classList.add('widget-button');
        button.textContent = 'Collapse';

        const wrapperContent = document.createElement('div');
        wrapperContent.classList.add('wrapper-content');
        wrapperContent.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iure ut, aperiam sed vero velit sunt amet praesentium. Cupiditate nostrum assumenda distinctio id asperiores animi eligendi, dolorem consequatur quod mollitia aliquid impedit labore laudantium. Vitae molestias at quam corporis saepe.';

        wrapper.append(button);
        wrapper.append(wrapperContent);

        return wrapper;
    }
}