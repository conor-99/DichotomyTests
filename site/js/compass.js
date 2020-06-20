let Measurements = {
    offset: 0,
    length: 0,
    half: 0,
    center: 0
};

let Compass = {

    generate: function(data, percentages) {

        let canvas = $('#compass-canvas');
        let ctx = canvas.get(0).getContext('2d');

        this.initMeasurements(canvas);

        this.drawCompass(ctx, data);
        this.drawText(ctx, data);
        this.drawPoint(ctx, percentages);

        ctx.save();

    },

    initMeasurements: function(canvas) {

        Measurements.offset = CANVAS_WIDTH * 0.08;
        Measurements.length = CANVAS_WIDTH * 0.84;
        Measurements.half = Measurements.length * 0.5;
        Measurements.center = Measurements.offset + (Measurements.length * 0.5);

    },

    drawCompass: function(ctx, data) {

        // draw quadrants
        ctx.fillStyle = data.scales[0].a.color;
        ctx.fillRect(Measurements.offset, Measurements.offset, Measurements.center, Measurements.center);
        ctx.fillStyle = data.scales[0].b.color;
        ctx.fillRect(Measurements.center, Measurements.center, Measurements.half, Measurements.half);
        ctx.fillStyle = data.scales[1].a.color;
        ctx.fillRect(Measurements.center, Measurements.offset, Measurements.half, Measurements.half);
        ctx.fillStyle = data.scales[1].b.color;
        ctx.fillRect(Measurements.offset, Measurements.center, Measurements.half, Measurements.half);

        // draw outline
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#AAAAAA';
        ctx.strokeRect(Measurements.offset, Measurements.offset, Measurements.length, Measurements.length);

        // draw grid
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 11; j += 10) {

                let p = Measurements.offset + (Measurements.length * (i + j + 1) * 0.05);

                ctx.beginPath();
                ctx.moveTo(p, Measurements.offset);
                ctx.lineTo(p, Measurements.offset + Measurements.length);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(Measurements.offset, p);
                ctx.lineTo(Measurements.offset + Measurements.length, p);
                ctx.stroke();

            }
        }

        // draw centre lines
        ctx.strokeStyle = '#767676';

        ctx.beginPath();
        ctx.moveTo(Measurements.center, Measurements.offset);
        ctx.lineTo(Measurements.center, Measurements.offset + Measurements.length);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(Measurements.offset, Measurements.center);
        ctx.lineTo(Measurements.offset + Measurements.length, Measurements.center);
        ctx.stroke();

    },

    drawText: function(ctx, data) {

        ctx.fillStyle = '#333333';
        ctx.font = '17px Sans-Serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.save();
        ctx.translate((Measurements.offset * 0.6), Measurements.center);
        ctx.rotate(Math.PI * -0.5);
        ctx.fillText(data.scales[0].a.text, 0, 0);
        ctx.restore();

        ctx.save();
        ctx.translate((Measurements.length + (Measurements.offset * 1.4)), Measurements.center);
        ctx.rotate(Math.PI * 0.5);
        ctx.fillText(data.scales[0].b.text, 0, 0);
        ctx.restore();

        ctx.fillText(data.scales[1].a.text, Measurements.center, Measurements.offset * 0.6);
        ctx.fillText(data.scales[1].b.text, Measurements.center, Measurements.length + (Measurements.offset * 1.5));

    },

    drawPoint: function(ctx, percentages) {

        let x = Measurements.offset + (percentages[0] * Measurements.length);
        let y = Measurements.offset + ((1 - percentages[1]) * Measurements.length);

        ctx.fillStyle = '#BA3B46';
        ctx.strokeStyle = '#444444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, (Measurements.length * 0.02), 0, (Math.PI * 2));
        ctx.fill();
        ctx.stroke();

    }

};
