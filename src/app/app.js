import DrawUI from './DrawUI';
import Control from './Control';
import Pattern from './Pattern';

const pattern = new Pattern();
const drawUI = new DrawUI('.container', pattern);

const control = new Control(drawUI);
control.init(); 