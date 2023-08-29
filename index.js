function al() {

    let data = []
    let intervals = []

    function table(data, options = {}) {

        let {
            mode = "startstop"
        } = options;

        data = data
    }

    table.data = function (_) {
        return arguments.length
            ? (data = _, table)
            : data;
    };

    table.extent = () => {
        let start = Infinity;
        let end = -Infinity;

        for (let i = 0; i < data.length; i++) {
            start = Math.min(start, data[i][0]);
            end = Math.max(end, data[i][1]);
        }

        return [start, end];
    }

    table.sort_by_start = () => {
        data.sort((a, b) => {
            return a[0] - b[0];
        });
        return data;
    }

    table.sort_by_end = () => {
        data.sort((a, b) => {
            return a[1] - b[1];
        });
        return data;
    }

    table.duration = () => {
        return intervals == null ? 0 : intervals[0][1] - intervals[0][0];
    }

    return table
}

module.exports = al