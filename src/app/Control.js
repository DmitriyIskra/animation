export default class Control {
    constructor(drawUI) {
        this.drawUI = drawUI;
        this.widget = null;

        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.drawUI.rendering();

        this.widget = document.querySelector('.widget-wrapper');
        
        this.registerEvent();
    }

    registerEvent() {
        this.widget.addEventListener('click', this.onClick);

        this.drawUI.content.addEventListener('transitioned', (e) => {
            console.log('event transitioned')
            console.log(e)
        })
    }

    onClick(e) {
        if(e.target.closest('.widget-button')) {
            this.drawUI.redrawUI();
        }
    }
}