function randomColor() {
    let rgb = {
        r: parseInt(Math.random() * 256),
        g: parseInt(Math.random() * 256),
        b: parseInt(Math.random() * 256)
    }

    return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
}

export default randomColor;
