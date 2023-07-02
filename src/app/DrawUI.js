export default class DrawUI {
    constructor(str, pattern) {
        if(typeof str === 'string') {
            this.container = document.querySelector(str)
        }

        this.pattern = pattern;

        this.button = null;
        this.content = null;
    }

    rendering() {
        const widget = this.pattern.getWidget();
        this.container.append(widget);

        this.button = this.container.querySelector('.widget-button');
        this.content = this.container.querySelector('.wrapper-content');
    }

    redrawUI() {
        this.button.classList.toggle('widget-button_active');

        this.content.classList.toggle('wrapper-content_active');
        
        if(!this.content.closest('.show')) {
            this.content.classList.remove('hide');
            this.content.classList.add('show');
            return;
        }
        
        this.content.classList.remove('show');
        this.content.classList.add('hide');

        
    }
}